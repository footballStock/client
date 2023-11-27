import axios from 'axios';
import {useInfiniteQuery, UseInfiniteQueryResult} from 'react-query';
import {ChatMessage} from '../states/types';

type ChatPage = {
  posts: ChatMsg[];
  isLastPage: boolean;
};

type ChatMsg = {
  content: string;
  id: number;
  room: number;
  sender: number;
  timestamp: string;
};

// API를 호출하여 채팅 데이터를 가져오는 함수
const fetchChats = async ({
  pageParam = 1,
  room,
}: {
  pageParam?: number;
  room: string;
}): Promise<ChatPage> => {
  const response = await axios.get<ChatPage>(
    `${process.env.REACT_APP_BASEURL}/api/chats/${room}/?page=${pageParam}`,
  );
  return response.data;
};

// room 별 채팅 데이터를 불러오는 커스텀 훅
export const useChatData = (
  room: string,
): UseInfiniteQueryResult<ChatPage, Error> => {
  return useInfiniteQuery(
    ['chats', room],
    ({pageParam = 1}) => fetchChats({pageParam, room}),
    {
      getNextPageParam: lastPage => {
        if (lastPage.isLastPage) {
          return undefined; // 더 이상 불러올 페이지가 없음
        }
        return lastPage.posts.length; // 다음 페이지 번호
      },
    },
  );
};

import React, {useEffect, useRef, useState} from 'react';
import {useChatData} from '../../hooks/useChatData';

const ChatLog: React.FC<{room: string | null}> = ({room}) => {
  if (!room) {
    return;
  }

  const chatStartRef = useRef<HTMLDivElement | null>(null);
  const chatsRef = useRef<HTMLDivElement | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const {data: chats, fetchNextPage, isFetchingNextPage} = useChatData(room);

  const [prevScrollHeight, setPrevScrollHeight] = useState<number>(0);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView();
  };

  //* 채팅방에 들어올 때, 가장 아래로 스크롤 위치 변경
  useEffect(() => {
    requestAnimationFrame(() => {
      scrollToBottom();
    });
  }, [chats]);

  //* 채팅 데이터가 추가 되어도 스크롤 위치 고정
  useEffect(() => {
    if (!isFetchingNextPage) {
      const scrollHeight = chatsRef.current?.scrollHeight ?? 0;
      chatsRef.current?.scrollTo(0, scrollHeight - prevScrollHeight);
    }
  }, [isFetchingNextPage]);

  //* 채팅방 상단으로 이동시, 추가적인 데이터 요청
  useEffect(() => {
    if (!chatStartRef.current) {
      return;
    }

    const chatObserver = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting) {
          const scrollHeight = chatsRef.current?.scrollHeight ?? 0;
          setPrevScrollHeight(scrollHeight);
          fetchNextPage();
        }
      },
      {
        threshold: 0.1,
      },
    );

    chatObserver.observe(chatStartRef.current);

    return () => chatObserver.disconnect();
  }, []);

  useEffect(() => {
    console.log(chats);
    // console.log(chats?.pages);
    // chats?.pages.map((page, i) => {
    //   console.log(page.posts);

    //   page.posts.map((data, i) => {
    //     console.log(data.content);
    //   });
    // });
  }, [chats]);

  return (
    <div className="overflow-y-scroll h-72 w-60 bg-custom-room" ref={chatsRef}>
      <div ref={chatStartRef}></div>

      {chats?.pages.map((page, i) =>
        page.messages
          .reverse()
          .map((msg, j) => <div key={j}>{msg.content}</div>),
      )}

      <div ref={chatEndRef}></div>
    </div>
  );
};

export default ChatLog;

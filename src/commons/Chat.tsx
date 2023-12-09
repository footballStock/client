import React, {useEffect, useRef, useState} from 'react';
import {useRecoilValue} from 'recoil';
import Swal from 'sweetalert2';
import axios from 'axios';
import {format, utcToZonedTime} from 'date-fns-tz';
import {enGB, ko} from 'date-fns/locale';

import SocketInterface from '../interface/SocketInterface';

import {userState} from '../states/recoil';

import ChatIcon from '@mui/icons-material/Chat';
import {User} from '../states/types';
import {getData} from '../commons/api';

//TODO
interface ChatType {
  content: string;
  id: number;
  room: number;
  user: User;
  timestamp: string;
}

const rooms = [
  {name: '1'},
  {name: '2'},
  {name: '3'},
  {name: '4'},
  {name: '5'},
  {name: '6'},
];

const Chat = () => {
  const [chats, setChats] = useState<ChatType[]>([]);
  const [message, setMessage] = useState<string>('');
  const [id, setId] = useState<number | null>(null);

  const [status, setStatus] = useState<string>('DISCONNECTED');
  const [socket, setSocket] = useState<SocketInterface | null>(null);
  const [room, setRoom] = useState<string | null>(null);
  const [roomList, setRoomList] = useState<any | null>(null);

  const [prevScrollHeight, setPrevScrollHeight] = useState<number>(0);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isFirstChatLoaded, setIsFirstChatLoaded] = useState<boolean>(false);
  const [showChat, setShowChat] = useState<boolean>(false);

  const chatsRef = useRef<HTMLDivElement | null>(null);
  const chatStartRef = useRef<HTMLDivElement | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [currentRoom, setCurrentRoom] = useState<string | null>(null);

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };

  const user = useRecoilValue(userState);

  const toggleChat = () => {
    if (!user) {
      Swal.fire({
        title: 'Please log in first',
        html: 'Chat function requires login',
      });
      return;
    }

    setShowChat(prev => !prev);
    setIsClicked(prev => !prev);
    setIsHovered(false);
  };

  const scrollToBottom = () => {
    const chatContainer = chatsRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    // chatEndRef.current?.scrollIntoView();
  };

  const onMessage = async (msg: any) => {
    if (socket) {
      const data: ChatType = JSON.parse(msg.data);
      setChats(prev => [...prev, data]);

      if (data.user.nickname === user?.nickname) {
        requestAnimationFrame(() => {
          scrollToBottom();
        });
      }

      if (!isFirstChatLoaded) {
        requestAnimationFrame(() => {
          scrollToBottom();
        });
        setIsFirstChatLoaded(true);
      }
    }
  };

  const onOpen = () => {
    setStatus('CONNECTED');
  };

  const onClose = () => {
    setStatus('DISCONNECTED');
  };

  const onSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const now = new Date();
    if (socket && user) {
      const postData: ChatType = {
        content: message,
        id: 0,
        room: 1,
        user: {
          profile: {
            src: user.profile.src,
            alt: user.profile.alt,
          },
          nickname: user.nickname,
        },
        timestamp: '',
      };

      const result = socket.send(JSON.stringify(postData));
      setMessage('');
    }
  };

  useEffect(() => {
    if (socket) {
      socket.connect();
      socket.registerEvent('open', onOpen);
      socket.registerEvent('close', onClose);
      socket.registerEvent('message', onMessage);
    }
  }, [socket]);

  // id 포함 => id 이전 5개
  // id x => 최근 5개

  const handleChangeRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = event.currentTarget;
    setRoom(name);
    setCurrentRoom(name);
    setSocket(new SocketInterface(name));
    setIsFirstChatLoaded(false);
    setChats([]);
  };

  useEffect(() => {
    if (!room) return;

    if (!chatStartRef.current) return;

    const chatObserver = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting && room) {
          const scrollHeight = chatsRef.current?.scrollHeight ?? 0;
          setPrevScrollHeight(scrollHeight);

          //* mocking
          const fetchData = async () => {
            if (id === 0) {
              return;
            }

            if (id) {
              try {
                const res = await axios.get(
                  `${process.env.REACT_APP_BASEURL}/api/chats/${room}/?last=${id}`,
                );

                if (res.status === 200) {
                  const newChats: ChatType[] = res.data;

                  // Filter out any chats that are already present
                  const uniqueNewChats = newChats.filter(
                    newChat =>
                      !chats.some(
                        existingChat => existingChat.id === newChat.id,
                      ),
                  );

                  // Only update the chats state if there are new chats
                  if (uniqueNewChats.length > 0) {
                    setChats(prev => [...uniqueNewChats, ...prev]);
                  }
                  setIsFetching(true);
                }
              } catch (error) {}
            } else {
              try {
                const res = await axios.get(
                  `${process.env.REACT_APP_BASEURL}/api/chats/${room}/`,
                );

                if (res.status === 200) {
                  const newChats: ChatType[] = res.data;

                  const initId =
                    newChats.length > 0
                      ? Math.min(...newChats.map(chat => chat.id))
                      : null;

                  setId(initId);

                  // Only update the chats state if there are new chats
                  if (newChats.length > 0) {
                    setChats(newChats);
                  }
                  setIsFetching(true);
                }
              } catch (error) {}
            }
          };

          fetchData();
        }
      },
      {
        threshold: 0.1,
      },
    );

    chatObserver.observe(chatStartRef.current);

    return () => chatObserver.disconnect();
  }, [room, id]);

  useEffect(() => {
    setId(null);
  }, [room]);

  useEffect(() => {
    if (isFetching) {
      requestAnimationFrame(() => {
        const scrollHeight = chatsRef.current?.scrollHeight ?? 0;
        chatsRef.current?.scrollTo(0, scrollHeight - prevScrollHeight);
      });

      const minId =
        chats.length > 0 ? Math.min(...chats.map(chat => chat.id)) : 0;

      if (id !== minId) {
        setId(minId);
      }
      setIsFetching(false);
    }
  }, [isFetching]);

  const getRoomList = async () => {
    return getData('/chats/rooms/').then(result => result);
  };

  useEffect(() => {
    getRoomList().then((data: any[]) => {
      setRoomList(data);
    });
  }, []);

  // 시간 문자열을 한국 시간대의 '오전/오후 시:분' 형식으로 변환하는 함수
  function formatKoreanTime(timeStr: string): string {
    // 한국 시간대로 변환 (한국은 UTC+9)
    const koreaTimeZone = 'Asia/Seoul';
    const date = new Date(timeStr);
    const koreaTime = utcToZonedTime(date, koreaTimeZone);

    // '오전/오후 시:분' 형식으로 포매팅
    return format(koreaTime, 'aaaa hh:mm', {timeZone: koreaTimeZone});
  }

  // 타임스탬프에서 날짜를 추출하여 특정 포맷으로 반환하는 함수
  function extractDateFromTimestamp(timestamp: string): string {
    const date = new Date(timestamp);

    // 'yyyy년 M월 d일 EEEE' 형식으로 포매팅 (예: '2023년 4월 23일 월요일')
    return format(date, 'yyyy. M. d. EEEE', {locale: enGB});
  }

  function isDateChanged(prevTimestamp: string, currentTimestamp: string) {
    const prevDate = extractDateFromTimestamp(prevTimestamp);
    const currentDate = extractDateFromTimestamp(currentTimestamp);
    return prevDate !== currentDate;
  }

  return (
    <div id="chat">
      <div className="flex flex-col items-end mr-4">
        <div
          id="chat-ui"
          className={`${
            isClicked
              ? 'w-60 h-10 rounded-none'
              : isHovered
              ? 'w-32 h-10 rounded-full'
              : 'w-10 h-10 rounded-full'
          } relative flex items-center justify-end bg-custom-gray4 p-1 transition-all duration-300 cursor-pointer`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={toggleChat}>
          {(isClicked || isHovered) && (
            <span
              id="chat-name"
              className={`${
                isClicked ? 'mr-30' : 'mr-0'
              } absolute whitespace-nowrap text-custom-dark font-semibold text-[16px]`}>
              CHAT
            </span>
          )}
          <ChatIcon className="mr-1 scale-105 text-custom-dark" />
        </div>
        {showChat && (
          <div>
            <div id="chat-room">
              <p className="border-b-2 border-b-black">Room</p>
              {roomList?.map((room: any) => (
                <button
                  onClick={handleChangeRoom}
                  name={room.id}
                  key={room.id}
                  className={currentRoom == room.id ? 'current-room' : ''}>
                  <div className="room-status-indicator"></div>
                  <div className="chat-room-name">{room.team}</div>
                </button>
              ))}
            </div>

            <div id="chat-message">
              <div
                id="chat-message-room"
                className=" hide-scrollbar"
                ref={chatsRef}>
                <div ref={chatStartRef}></div>
                {chats.length > 0 ? (
                  <>
                    {chats.map((chat, i) => (
                      <div key={i} className="p-2 ">
                        {i === 0 ||
                        isDateChanged(
                          chats[i - 1].timestamp,
                          chat.timestamp,
                        ) ? (
                          <div className="mb-2 text-base date-display font-sidebar-name">
                            {extractDateFromTimestamp(chat.timestamp)}
                          </div>
                        ) : null}
                        <div className="flex flex-row">
                          <img
                            src={
                              process.env.REACT_APP_BASEURL +
                              chat.user.profile.src
                            }
                            alt={chat.user.profile.alt}
                            className="w-8 h-8 rounded" // Adjust size as needed
                          />
                          <div className="flex flex-col chat-content font-sidebar-name">
                            <p className="mb-0 ml-2 text-sm">
                              {chat.user.nickname}
                            </p>
                            <p className="mt-0 ml-2 text-xs text-custom-gray3">
                              {formatKoreanTime(chat.timestamp)}
                            </p>
                          </div>
                        </div>
                        <p className="mt-1 ml-1 text-sm chat-content font-detail-content">
                          {chat.content}
                        </p>
                      </div>
                    ))}
                  </>
                ) : (
                  <></>
                )}
                <div ref={chatEndRef}></div>
              </div>
              <div id="chat-input">
                <form onSubmit={onSendMessage}>
                  <input
                    type="text"
                    name="text"
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    disabled={status !== 'CONNECTED'}
                  />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;

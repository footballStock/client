import React, {useEffect, useRef, useState} from 'react';
import {useRecoilValue} from 'recoil';
import axios from 'axios';

import SocketInterface from '../interface/SocketInterface';

import {userState} from '../states/recoil';

import ChatIcon from '@mui/icons-material/Chat';
import {User} from '../states/types';

import Swal from 'sweetalert2';

import account from '../myaccount.png';

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

  const [prevScrollHeight, setPrevScrollHeight] = useState<number>(0);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isFirstChatLoaded, setIsFirstChatLoaded] = useState<boolean>(false);

  const chatsRef = useRef<HTMLDivElement | null>(null);
  const chatStartRef = useRef<HTMLDivElement | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const user = useRecoilValue(userState);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView();
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
    if (socket) {
      const postData: ChatType = {
        content: 'Some content',
        id: 0,
        room: 1,
        user: {
          profile: {
            src: 'image_source',
            alt: 'image_alt',
          },
          nickname: 'UserNickname',
        },
        timestamp: '12312312',
      };

      const postDataToLog = async () => {
        try {
          // Make the POST request
          const response = await axios.post('/log', postData);

          if (response.status === 201) {
            console.log('Log updated successfully:', response.data);
          } else {
            console.error('Unexpected response status:', response.status);
          }
        } catch (error) {
          console.error('Error making POST request:', error);
        }
      };

      postDataToLog();
      setChats(prev => [...prev, postData]);
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
    if (!user) {
      Swal.fire({
        title: 'Please log in first',
        html: 'Chat function requires login',
      });

      return;
    }

    const {name} = event.currentTarget;
    setRoom(name);
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
                const res = await axios.get(`/log/room=${room}/${id}`);

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
              } catch (error) {
                console.log(error);
              }
            } else {
              try {
                const res = await axios.get(`/log/room=${room}/`);

                if (res.status === 200) {
                  const newChats: ChatType[] = res.data;

                  const initId =
                    newChats.length > 0
                      ? Math.min(...newChats.map(chat => chat.id))
                      : null;

                  // Only update the chats state if there are new chats
                  if (newChats.length > 0) {
                    setChats(newChats);
                  }
                  setIsFetching(true);
                }
              } catch (error) {
                console.log(error);
              }
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
    if (isFetching) {
      requestAnimationFrame(() => {
        const scrollHeight = chatsRef.current?.scrollHeight ?? 0;
        chatsRef.current?.scrollTo(0, scrollHeight - prevScrollHeight);
      });

      const minId = Math.min(...chats.map(chat => chat.id));
      if (id !== minId) {
        setId(minId);
      }
      setIsFetching(false);
    }
  }, [isFetching]);

  return (
    <div className="flex flex-col mr-4">
      <ChatIcon className="cursor-pointer" />
      <div className="flex flex-col bg-custom-room">
        <p className="border border-b-black">Room</p>
        {rooms.map((room, i) => (
          <button onClick={handleChangeRoom} name={room.name} key={i}>
            <div className="border">{room.name}</div>
          </button>
        ))}
      </div>

      <div className="flex flex-col bg-custom-chat">
        <p>Chatting</p>
        <p className="border border-b-black">Room: {room}</p>
        <div
          className="overflow-x-hidden overflow-y-auto scrollbar-hide h-96 w-60"
          ref={chatsRef}>
          <div ref={chatStartRef}></div>
          {chats.length > 0 ? (
            <>
              {chats.map((chat, i) => (
                <div key={i} className="p-2 ">
                  <div className="flex flex-row">
                    <img
                      // src={chat.user.profile.src}
                      src={account}
                      alt={chat.user.profile.alt}
                    />
                    <p className="ml-2">{chat.user.nickname}</p>
                  </div>
                  <p className="break-words">{chat.content}</p>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
          <div ref={chatEndRef}></div>
        </div>
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
  );
};

export default Chat;
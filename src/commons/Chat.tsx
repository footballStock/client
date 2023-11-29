import React, {useEffect, useRef, useState} from 'react';
import {useRecoilValue} from 'recoil';

import SocketInterface from './Chat/SocketInterface';

import {userState} from '../states/recoil';

import ChatIcon from '@mui/icons-material/Chat';
import {User} from '../states/types';
import axios from 'axios';
import {postData} from './api';

//TODO
interface ChatType {
  content: string;
  id: number;
  room: number;
  user: User;
  timestamp: string;
}

const rooms = [{name: '1'}];

const Chat = () => {
  const [isChatRoomOpen, setIsChatRoomOpen] = useState<boolean>(false);
  const [isChatLogOpen, setIsChatLogOpen] = useState<boolean>(false);
  const [chats, setChats] = useState<ChatType[]>([]);
  const [message, setMessage] = useState<string>('');
  const [id, setId] = useState<number>(0);

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

      if (!isFirstChatLoaded) {
        requestAnimationFrame(() => {
          scrollToBottom();
        });
        setIsFirstChatLoaded(true);
      }

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

  const handleChatIconClick = () => {
    if (!user) return;

    setIsChatRoomOpen(prev => !prev);
  };

  const handleChangeRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = event.currentTarget;
    setRoom(name);
    setSocket(new SocketInterface(name));
    setIsFirstChatLoaded(false);
  };

  useEffect(() => {
    if (room) {
      setIsChatLogOpen(true);
    }

    if (!chatStartRef.current) {
      return;
    }

    const chatObserver = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting && room) {
          const scrollHeight = chatsRef.current?.scrollHeight ?? 0;
          setPrevScrollHeight(scrollHeight);

          //* mocking
          const fetchData = async () => {
            try {
              const res = await axios.get(`/log/${id}`);

              if (res.status === 200) {
                const newChats: ChatType[] = res.data;

                // Filter out any chats that are already present
                const uniqueNewChats = newChats.filter(
                  newChat =>
                    !chats.some(existingChat => existingChat.id === newChat.id),
                );

                // Only update the chats state if there are new chats
                if (uniqueNewChats.length > 0) {
                  setChats(prev => [...uniqueNewChats.reverse(), ...prev]);
                }
                setIsFetching(true);
              }
            } catch (error) {
              console.log(error);
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

      const maxId =
        chats.length > 0 ? Math.max(...chats.map(chat => chat.id)) : 0;
      setId(maxId);
      setIsFetching(false);
    }
  }, [isFetching]);

  return (
    <div className="flex flex-col items-center space-x-4 top-4">
      <ChatIcon onClick={handleChatIconClick} className="cursor-pointer" />
      {status}
      {isChatRoomOpen ? (
        <div>
          {rooms.map((room, i) => (
            <button onClick={handleChangeRoom} name={room.name} key={i}>
              <p>{room.name}</p>
            </button>
          ))}
        </div>
      ) : (
        <>...loading</>
      )}
      <div>
        <div className="overflow-y-scroll h-72 w-60" ref={chatsRef}>
          <div ref={chatStartRef}></div>
          {chats.length > 0 ? (
            <>
              {chats.map((chat, i) => (
                <div key={i}>
                  {chat.user.nickname} : {chat.id} :{chat.content}
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
          />
          <button type="submit" value={message}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

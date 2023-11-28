import React, {useEffect, useRef, useState} from 'react';
import {useRecoilValue} from 'recoil';

import ChatIcon from '@mui/icons-material/Chat';

import SocketInterface from './SocketInterface';

import {ChatMessage} from '../../states/types';
import {userState} from '../../states/recoil';
import ChatLog from './ChatLog';
import {getData} from '../api';

//TODO
const rooms = [{name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}, {name: '5'}];

const Chat = () => {
  const [socket, setSocket] = useState<SocketInterface>();
  const [status, setStatus] = useState<string>('DISCONNECTED');
  const [message, setMessage] = useState<string>('');
  // const [log, setLog] = useState<ChatMessage[]>([]);
  const user = useRecoilValue(userState);
  const [room, setRoom] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isRoomOpen, setIsRoomOpen] = useState(false);

  const user1: ChatMessage = {
    user: {profile: {src: '', alt: ''}, nickname: ''},
    message: '',
    timeStamp: 1,
  };

  const [log, setlog] = useState<ChatMessage[]>([user1]);

  const chatStartRef = useRef<HTMLDivElement | null>(null);
  const chatsRef = useRef<HTMLDivElement | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const [prevScrollHeight, setPrevScrollHeight] = useState<number>(0);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView();
  };

  //* get message using websocket
  const onMessage = async (msg: any) => {
    if (socket) {
      const data: ChatMessage = JSON.parse(msg.data);
      setlog(prev => [...prev, data]);

      //* DONE: 내가 채팅을 보냈을 때, 가장 마지막으로 이동해야 한다.
      if (data.user.nickname === user?.nickname) {
        requestAnimationFrame(() => {
          scrollToBottom();
        });
      }
    }
  };

  //* if disconnected
  const onConnectionClosed = () => {
    setStatus('DISCONNECTED');
  };

  //* if connect
  const onConnectionOpened = async () => {
    setStatus('CONNECTED');
  };

  //* connect using websocket
  useEffect(() => {
    if (socket) {
      socket.connect();
      socket.registerEvent('open', onConnectionOpened);
      socket.registerEvent('close', onConnectionClosed);
      socket.registerEvent('message', onMessage);
    }
  }, [socket]);

  useEffect(() => {
    if (!chatStartRef.current) {
      return;
    }

    // Observer 인스턴스 생성
    const chatObserver = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting && room) {
          const scrollHeight = chatsRef.current?.scrollHeight ?? 0;
          setPrevScrollHeight(scrollHeight);
          //* 추가 데이터 요청
          getData(`/chats/${room}/?page=1`).then(data => {
            const msgs = data?.messages.map((msg: any) => {
              const storedMsg: ChatMessage = {
                user: {profile: {src: '', alt: ''}, nickname: ''},
                message: msg.content,
                timeStamp: msg.timeStamp,
              };

              return storedMsg;
            });

            //TODO : 데이터 요청 방식
            const newLog = [...msgs, ...log];
            setlog(newLog);
            requestAnimationFrame(() => {
              scrollToBottom();
            });
          });
        }
      },
      {threshold: 0.1},
    );

    // Observer 시작
    chatObserver.observe(chatStartRef.current);
    requestAnimationFrame(() => {
      scrollToBottom();
    });

    // 컴포넌트가 언마운트되거나 room 값이 변경될 때 Observer 정리
    return () => {
      chatObserver.disconnect();
    };
  }, [room]); // 의존성 배열에 room 포함

  useEffect(() => {
    if (room) {
      setIsRoomOpen(true);
    }
  }, [room]);

  const handleChatIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!user) {
      return;
    }

    setIsChatOpen(prev => !prev);
  };

  const handleChangeRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = event.currentTarget;
    setSocket(new SocketInterface(name));
    setRoom(name);
  };

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    socket?.send(JSON.stringify({user: user, message: message}));
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center space-x-4 top-4 h-1/2">
      {status}
      <button onClick={handleChatIconClick} className="cursor-pointer">
        <ChatIcon />
      </button>
      {isChatOpen ? (
        <>
          {/* ChatRoom */}
          <div>
            {rooms.map((r, i) => (
              <div key={i}>
                <button onClick={handleChangeRoom} name={r.name}>
                  {r.name}
                </button>
              </div>
            ))}
          </div>
          {isRoomOpen ? (
            <>
              {/* ChatLog */}
              {/* <ChatLog room={room} /> */}
              {/* Send Form */}
              <div>
                <form onSubmit={handleSendMessage}>
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
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      <div
        className="overflow-y-scroll h-72 w-60 bg-custom-room"
        ref={chatsRef}>
        <div ref={chatStartRef}></div>

        {log.map((msgs, i) => (
          <div key={i}>{msgs.message}</div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
    </div>
  );
};

export default Chat;

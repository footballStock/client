import React, {useEffect, useRef, useState} from 'react';
import {useRecoilValue} from 'recoil';

import ChatIcon from '@mui/icons-material/Chat';

import SocketInterface from './SocketInterface';

import {ChatMessage} from '../../states/types';
import {userState} from '../../states/recoil';
import ChatLog from './ChatLog';

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

  //* get message using websocket
  const onMessage = async (msg: any) => {
    if (socket) {
      const data: ChatMessage = JSON.parse(msg.data);
      console.log(data);
    }
  };

  //* if disconnected
  const onConnectionClosed = () => {
    setStatus('DISCONNECTED');
  };

  //* if connect
  const onConnectionOpened = () => {
    setStatus('CONNECTED');
  };

  const handleChangeRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = event.currentTarget;
    setSocket(new SocketInterface(name));
    setRoom(name);
  };

  const handlePostMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    socket?.send(JSON.stringify({user: user, message: message}));
    setMessage('');

    // //* 내가 채팅을 보냈을 때, 가장 마지막으로 이동해야 한다.
    // requestAnimationFrame(() => {
    //   scrollToBottom();
    // });
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

  const handleChatIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!user) {
      return;
    }

    setIsChatOpen(prev => !prev);
  };

  useEffect(() => {
    if (room) {
      setIsRoomOpen(true);
    }
  }, [room]);

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
              <ChatLog room={room} />
              {/* Send Form */}
              <div>
                <form onSubmit={handlePostMessage}>
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
    </div>
  );
};

export default Chat;

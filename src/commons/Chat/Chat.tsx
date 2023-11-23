import React, {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';

import SocketInterface from './SocketInterface';
import ChatRoom from './ChatRoom';
import ChatLog from './ChatLog';

import LiveChat from '../../static/others/Livechat.png';
import {ChatMessage} from '../../states/types';

const Chat = () => {
  const [socket, setSocket] = useState<SocketInterface | null>(null);
  const [status, setStatus] = useState('DISCONNECTED');
  const [log, setLog] = useState<ChatMessage[]>([]);
  //TODO : ROOM 이름으로!

  //* save the data to local storage when receiving the data from web server.
  const saveToLocalStorage = (key: string, data: ChatMessage) => {
    return new Promise((resolve: any) => {
      const existingData = localStorage.getItem(key);
      const dataArr = existingData ? JSON.parse(existingData) : [];
      dataArr.push(data);
      localStorage.setItem(key, JSON.stringify(dataArr));
      resolve();
    });
  };

  //* load the data from local storage when room is selected.
  const loadFromLocalStorage = (key: string): Promise<ChatMessage[]> => {
    return new Promise((resolve: any) => {
      const data = localStorage.getItem(key);
      resolve(data ? JSON.parse(data) : []);
    });
  };

  //* get message using websocket
  const onMessage = async (msg: any) => {
    if (socket) {
      const msgData: ChatMessage = JSON.parse(msg.data);
      setLog(prevData => [...prevData, msgData]);
      await saveToLocalStorage(socket?.room, msgData);
    }
  };

  //* if disconntected,
  const onConnectionClosed = () => {
    setStatus('DISCONNECTED');
  };

  //* if conneted,
  const onConnectionOpened = () => {
    setStatus('CONNECTED');
  };

  //* if there is a user which is logined, connect using websocket
  useEffect(() => {
    if (socket) {
      socket.connect();
      socket.registerEvent('open', onConnectionOpened);
      socket.registerEvent('close', onConnectionClosed);
      socket.registerEvent('message', onMessage);
    }
  }, [socket]);

  // 컴포넌트 마운트 시 로컬 스토리지에서 메시지 불러오기
  useEffect(() => {
    if (socket) {
      const loadMessages = async () => {
        const savedMessages = await loadFromLocalStorage(socket?.room);
        if (savedMessages) {
          setLog(savedMessages);
        }
      };
      loadMessages();
    }
  }, []);

  return (
    <section
      id="chat"
      className="sticky flex flex-col items-center space-x-4 top-4 h-1/2">
      <div className="px-20">
        <img src={LiveChat} className="w-7 h-7" />
        {status}
      </div>
      <ChatRoom setSocket={setSocket} />
      <ChatLog socket={socket} log={log} />
    </section>
  );
};

export default Chat;

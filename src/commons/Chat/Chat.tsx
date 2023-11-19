import React, {useEffect, useState} from 'react';

import SocketInterface from './SocketInterface';

import LiveChat from '../../static/Livechat.png';

const config = require('./WebInterface').default;

interface ChatMessage {
  name: string;
  msg: string;
  timeStamp: number;
}

const Chat = () => {
  const [log] = useState(new SocketInterface(config));
  const [data, setData] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState('DISCONNECTED');

  //TODO : 실제 값 넣어줘야 함!
  const token = null;
  const key = 'common';

  //* save the data to local storage when receiving the data from web server.
  const saveToLocalStorage = async (key: string, data: ChatMessage) => {
    return new Promise((resolve: any) => {
      const existingData = localStorage.getItem(key);
      const dataArr = existingData ? JSON.parse(existingData) : [];
      dataArr.push(data);
      localStorage.setItem(key, JSON.stringify(dataArr));
      resolve();
    });
  };

  //* load the data from local storage when room is selected.
  const loadFromLocalStorage = async (key: string): Promise<ChatMessage[]> => {
    return new Promise((resolve: any) => {
      const data = localStorage.getItem(key);
      resolve(data ? JSON.parse(data) : []);
    });
  };

  //* get message usign websocket
  const onMessage = async (msg: any) => {
    const msgData: ChatMessage = JSON.parse(msg.data);
    setData(prevData => [...prevData, msgData]);

    const updatedData: ChatMessage[] = (await loadFromLocalStorage(key)) || [];
    await saveToLocalStorage(key, msgData);
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
    if (token) {
      log.connect();
      log.registerEvent('open', onConnectionOpened);
      log.registerEvent('close', onConnectionClosed);
      log.registerEvent('message', onMessage);
    }
  }, [token]);

  //* dummy data & localStorage
  const createAndSaveDummyMessage = async () => {
    const dummyMsg = {
      name: 'Dummy User',
      msg: 'This is a test message',
      timeStamp: Date.now(),
    };
    await saveToLocalStorage(key, dummyMsg);
    setData(prevData => [...prevData, dummyMsg]);
  };

  useEffect(() => {
    // 컴포넌트 마운트 시 로컬 스토리지에서 메시지 불러오기
    const loadMessages = async () => {
      const savedMessages = await loadFromLocalStorage(key);
      if (savedMessages) {
        setData(savedMessages);
      }
    };
    loadMessages();
  }, []);

  return (
    <section
      id="chat"
      className="sticky flex flex-col items-center space-x-4 top-4 h-1/2">
      <div className="px-20">
        <img src={LiveChat} className="w-7 h-7" />
      </div>
      <div className="overflow-y-scroll w-60 h-72 bg-custom-room">Room</div>
      <div className="overflow-y-scroll h-96 w-60 bg-custom-chat">Chatting</div>

      {/* 임시 메시지 생성 버튼 */}
      <button onClick={createAndSaveDummyMessage}>Create Dummy Message</button>

      {/* 메시지 표시 영역 */}
      <div /* ... */>
        {data.map((message, index) => (
          <div key={index}>
            <strong>{message.name}:</strong> {message.msg}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chat;

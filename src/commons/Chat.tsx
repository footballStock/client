import React from 'react';
import LiveChat from '../static/Livechat.png';

const Chat = () => {
  return (
    <section
      id="chat"
      className="sticky flex flex-col items-center space-x-4 top-4 h-1/2">
      <div className="px-20">
        <img src={LiveChat} className="w-7 h-7" />
      </div>
      <div className="overflow-y-scroll w-60 h-72 bg-custom-room">Room</div>
      <div className="overflow-y-scroll h-96 w-60 bg-custom-chat">Chatting</div>
    </section>
  );
};

export default Chat;

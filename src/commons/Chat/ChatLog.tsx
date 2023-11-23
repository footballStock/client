import React, {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';

import SocketInterface from './SocketInterface';

import {userState} from '../../states/recoil';
import {ChatMessage} from '../../states/types';

const ChatLog: React.FC<{
  socket: SocketInterface | null;
  log: ChatMessage[];
}> = ({socket, log}) => {
  const user = useRecoilValue(userState);
  const [comment, setComment] = useState('');

  const handlePostComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    socket?.send(JSON.stringify({user: user, message: comment}));
    setComment('');
  };

  return (
    <div className="overflow-y-scroll h-96 w-60 bg-custom-chat">
      <div>Chatting</div>
      <div>
        <form onSubmit={handlePostComment}>
          <input
            type="text"
            name="text"
            required
            className=" bg-red-950"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <input type="submit" value={comment} />
        </form>
      </div>
    </div>
  );
};

export default ChatLog;

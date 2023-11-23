import React from 'react';
import SocketInterface from './SocketInterface';

const ChatRoom: React.FC<{
  setSocket: React.Dispatch<React.SetStateAction<SocketInterface | null>>;
}> = ({setSocket}) => {
  const rooms = [
    {name: '1'},
    // {name: '2'},
    // {name: '3'},
    // {name: '4'},
    // {name: '5'},
  ];

  const handleChangeRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = event.currentTarget;
    setSocket(new SocketInterface(name));
  };

  return (
    <div className="overflow-y-scroll w-60 h-72 bg-custom-room">
      {rooms.map((room, index) => (
        <div key={index}>
          <button onClick={handleChangeRoom} name={room.name}>
            {room.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ChatRoom;

import React, {useState} from 'react';
import {PlayerData, PlayerDict} from '../states/types';

const Profile = ({playerData}: {playerData: PlayerData}) => {
  return (
    <div className="flex flex-row border-gray-200 border w-56 rounded-md">
      <img
        src={process.env.REACT_APP_BASEURL + playerData.photo}
        alt={playerData.name}
        className="w-10 h-10 rounded-full m-2"
      />
      <div className="flex flex-col justify-center">
        <div className="text-sm">{playerData.name}</div>
        <div className="flex flex-row items-center gap-x-2">
          <img
            src={'https://cdn-icons-png.flaticon.com/512/2173/2173404.png'}
            alt="uniform"
            className="w-3 h-3"
          />
          <div className="text-gray-400 text-xs">{playerData.number}</div>
        </div>
      </div>
    </div>
  );
};

const ProfileGrid = ({
  playerList,
  position,
}: {
  playerList: PlayerData[];
  position: string;
}) => {
  return (
    <div>
      <div className="font-semibold text-lg mb-3">{position}</div>
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        {playerList.map((item, index) => (
          <Profile key={index} playerData={item} />
        ))}
      </div>
    </div>
  );
};

const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Attacker'];

const Squad = ({playerDict}: {playerDict: PlayerDict}) => {
  return (
    <div className="flex flex-col m-1 gap-y-10">
      {Object.entries(playerDict).map(([position, playerList]) => (
        <ProfileGrid playerList={playerList} position={position} />
      ))}
    </div>
  );
};
export default Squad;

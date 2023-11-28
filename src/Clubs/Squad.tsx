import React, {useState} from 'react';
import {PlayerData, PlayerDict} from '../states/types';

const Profile = ({playerData}: {playerData: PlayerData}) => {
  return (
    <div className="flex-auto">
      <img
        src={process.env.REACT_APP_BASEURL + playerData.photo}
        alt={playerData.name}
        className="w-44"
      />
      {playerData.name}
      {playerData.number}
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
      {position}
      <div className="flex flex-wrap gap-x-10">
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
    <div>
      {Object.entries(playerDict).map(([position, playerList]) => (
        <ProfileGrid playerList={playerList} position={position} />
      ))}
    </div>
  );
};
export default Squad;

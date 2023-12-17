import React from 'react';
import {useRecoilValue} from 'recoil';
import {useNavigate} from 'react-router-dom';

import {teamsImageState} from '../states/recoil';
import {findCode} from '../utils/util';

const Sidebar = () => {
  const teamsImage = useRecoilValue(teamsImageState);
  const navigate = useNavigate();

  const handlePostClick = (code: string) => {
    navigate(`/clubs/${code}`);
  };

  return (
    <div id="sidebar">
      <div id="sidebar-name">Clubs</div>
      <ul className="flex flex-col">
        {teamsImage.map((team, index) => (
          <button
            key={index}
            onClick={() => handlePostClick(findCode(team.name))}
            className="sidebar-menu">
            <img
              src={team.src}
              alt={team.alt}
              className="object-contain ml-5 w-7 h-7"
            />
            <div className="px-3 sidebar-team">{team.name}</div>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

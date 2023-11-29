import React from 'react';
import {useRecoilValue} from 'recoil';
import {teamsImageState} from '../states/recoil';
import {useNavigate} from 'react-router-dom';
import {findCode} from '../commons/util';

const Sidebar = () => {
  const teamsImage = useRecoilValue(teamsImageState);
  const navigate = useNavigate();

  const handlePostClick = (code: string) => {
    navigate(`/clubs/${code}`);
  };

  return (
    <div className="sticky top-4 w-80">
      <div id="sidebar-name">Teams</div>
      <ul className="flex flex-col">
        {teamsImage.map((team, index) => (
          <button
            key={index}
            onClick={() => handlePostClick(findCode(team.name))}
            className="flex flex-row items-center mb-4 ml-8 text-xs">
            <img
              src={team.src}
              alt={team.alt}
              className="w-7 h-7 object-contain"
            />
            <div className="pl-3 text-lg font-sans">{team.name}</div>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import {useRecoilValue} from 'recoil';
import {teamsImageState} from '../states/recoil';

const Sidebar = () => {
  const teamsImage = useRecoilValue(teamsImageState);
  return (
    <section id="sidebar">
      <div id="sidebar-name">Teams</div>
      <ul className="flex flex-col">
        {teamsImage.map((team, index) => (
          <li
            key={index}
            className="sidebar-menu">
            <img src={team.src} alt={team.alt} className="ml-5 w-7 h-7" />
            <button className="px-3">{team.name}</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;

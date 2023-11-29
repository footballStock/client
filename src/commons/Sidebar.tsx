import React from 'react';
import {useRecoilValue} from 'recoil';
import {teamsImageState} from '../states/recoil';

const Item = ({team}: {team: any}) => {
  return (
    <li className="flex flex-row items-center mb-4 ml-8 text-xs">
      <img src={team.src} alt={team.alt} className="w-7 h-7" />
      <button className="px-1">{team.name}</button>
    </li>
  );
};

const Sidebar = () => {
  const teamsImage = useRecoilValue(teamsImageState);
  return (
    <section className="sticky top-4 h-1/2">
      <div className="px-20 mb-8 text-lg font-bold text-left">Teams</div>
      <ul className="flex flex-col">
        {teamsImage.map((team, index) => (
          <Item key={index} team={team} />
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;

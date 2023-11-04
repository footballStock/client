import React from 'react';

type Team = {
  src: string;
  alt: string;
  name: string;
};

const Sidebar: React.FC<{teams: Team[]}> = ({teams}) => {
  return (
    <section>
      <div className="px-20 py-8 text-lg font-bold text-left">Teams</div>
      <ul className="flex flex-col">
        {teams.map((team, index) => (
          <li
            key={index}
            className="flex flex-row items-center mb-4 ml-4 text-xs">
            <img src={team.src} alt={team.alt} className="w-7 h-7" />
            <div>{team.name}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;

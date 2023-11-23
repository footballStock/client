import React from 'react';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import {ClubImage, Image} from '../states/types';
import {leagues} from '../states/constants';

const ClubLists: React.FC<{
  league: Image;
  clubsImage: ClubImage[];
}> = ({league, clubsImage}) => {
  const colors = [
    'shadow-red',
    'shadow-orange',
    'shadow-yellow',
    'shadow-green',
    'shadow-blue',
    'shadow-indigo',
    'shadow-violet',
    'shadow-black',
  ];

  // Function to get color based on league name
  const getColorForLeague = (leagueName: string) => {
    const index = leagues.findIndex(l => l === leagueName);
    return index !== -1 ? colors[index] : 'default-color'; // Fallback color
  };

  // Get the color for the current league
  const color = getColorForLeague(league.name);

  return (
    <div>
      <section>
        <img src={league.src} alt={league.alt} className="w-44" />
      </section>
      <section className="flex flex-wrap gap-2.5 py-4">
        {clubsImage.map((club, index) => (
          <button
            key={index}
            className={` flex flex-col items-start justify-center h-32 p-4 bg-white border-2 border-gray-300 rounded-lg w-44 ${color}`}>
            <img src={club.src} alt={club.alt} className="w-8 mb-2" />
            <div className="flex items-center justify-between w-full">
              <span className="font-semibold">{club.name}</span>
              <span>
                <ArrowRightAltIcon />
              </span>
            </div>
          </button>
        ))}
      </section>
    </div>
  );
};

export default ClubLists;

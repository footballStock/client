import React from 'react';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import {ClubImage, Image} from '../states/types';
import {leagues} from '../states/constants';
import {useNavigate} from 'react-router-dom';
import {findCode} from '../utils/util';

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
  const navigate = useNavigate();

  const handlePostClick = (code: string) => {
    navigate(`/clubs/${code}`);
  };

  return (
    <div>
      <section className="flex flex-wrap gap-1.5 py-4">
        {clubsImage.map((club, index) => (
          <button
            key={index}
            onClick={() => handlePostClick(findCode(club.name))}
            className={`relative flex flex-col items-start justify-center h-32 p-4 bg-white border-2 border-gray-300 rounded-lg w-44 ${color} hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out`}>
            <img
              src={league.src}
              alt={league.name}
              className="absolute top-1 right-1 w-8 h-8 object-contain"
            />
            <img
              src={club.src}
              alt={club.alt}
              className="w-8 mb-2 object-contain"
            />
            <div className="flex items-center justify-between w-full">
              <span className="font-detail-title font-bold text-left">
                {club.name}
              </span>
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

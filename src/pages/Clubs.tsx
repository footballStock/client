import React, {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';

import ClubLists from '../Clubs/ClubLists';
import {ClubImage, Image} from '../states/types';
import {awsState, bucketState, teamsImageState} from '../states/recoil';
import {clubs} from '../states/constants';

const Clubs = () => {
  const [leaguesImage, setLeaguesImage] = useState<Image[]>([]);
  const [clubsImage, setClubsImage] = useState<ClubImage[]>([]);
  const teamsImage = useRecoilValue(teamsImageState);

  const aws = useRecoilValue(awsState);
  const bucket = useRecoilValue(bucketState);

  useEffect(() => {
    const folderName = 'leagues/';
    aws.downloadFiles(bucket, folderName).then(images => {
      const leaguesImage: Image[] = images.map((image, i) => {
        const name = image.Key.replace('.png', '').replace(folderName, '');
        return {src: image.Image, alt: name, name: name};
      });

      setLeaguesImage(leaguesImage);
    });
  }, []);

  useEffect(() => {
    const findLeagueByTeamName = (name: string) => {
      for (const club of Object.keys(clubs)) {
        if (club === name) {
          return clubs[club].league;
        }
      }

      return '';
    };

    const clubsImageData = teamsImage.map(image => {
      const league = findLeagueByTeamName(image.name);
      return {...image, league: league};
    });

    setClubsImage(clubsImageData);
  }, [teamsImage]);

  return (
    <div className="flex flex-col flex-wrap justify-center">
      {leaguesImage.map((league, idx) => (
        <div key={idx} className="">
          <ClubLists
            league={league}
            clubsImage={clubsImage.filter(club => club.league === league.name)}
          />
        </div>
      ))}
    </div>
  );
};

export default Clubs;

import React, {useEffect} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';

import ClubLists from '../Clubs/ClubLists';
import {ClubImage, Image} from '../states/types';
import {
  awsState,
  bucketState,
  clubsImageState,
  leaguesImageState,
} from '../states/recoil';
import {clubs} from '../states/constants';

const Clubs = () => {
  const [clubsImage, setClubsImage] = useRecoilState(clubsImageState);
  const [leaguesImage, setLeaguesImage] = useRecoilState(leaguesImageState);

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
      for (const club of clubs) {
        const leagueName = Object.keys(club)[0];
        const teamNames = club[leagueName];

        if (teamNames.includes(name)) {
          return leagueName;
        }
      }

      return '';
    };

    const folderName = 'clubs/';
    aws.downloadFiles(bucket, folderName).then(images => {
      const clubsImage: ClubImage[] = images.map((image, i) => {
        const name = image.Key.replace('.png', '').replace(folderName, '');
        const league = findLeagueByTeamName(name);
        return {src: image.Image, alt: name, name: name, league: league};
      });

      setClubsImage(clubsImage);
    });
  }, []);

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

import React, {useEffect} from 'react';

import AFC_Ajax from '../static/clubs/AFC_Ajax.png';
import Bali_United from '../static/clubs/Bali_United.png';
import Borussia_Dortmund from '../static/clubs/Borussia_Dortmund.png';
import Celtic_FC from '../static/clubs/Celtic_FC.png';
import FC_Porto from '../static/clubs/FC_Porto.png';
import Juventus_FC from '../static/clubs/Juventus_FC.png';
import Manchester_United_FC from '../static/clubs/Manchester_United_FC.png';
import Olympique_Lyonnais from '../static/clubs/Olympique_Lyonnais.png';
import SC_Braga from '../static/clubs/SC_Braga.png';
import SL_Benfica from '../static/clubs/SL_Benfica.png';
import Sporting_Clube_de_Portugal from '../static/clubs/Sporting_Clube_de_Portugal.png';
import SS_Lazio from '../static/clubs/SS_Lazio.png';

import Bundesliga from '../static/leagues/Bundesliga.png';
import Cinch_premiership from '../static/leagues/Cinch_premiership.png';
import Eredivisie from '../static/leagues/Eredivisie.png';
import Liga_1 from '../static/leagues/Liga_1.png';
import Liga_Portugal from '../static/leagues/Liga_Portugal.png';
import Ligue_1 from '../static/leagues/Ligue_1.png';
import Premier_League from '../static/leagues/Premier_League.png';
import Serie_A from '../static/leagues/Serie_A.png';

import {Image} from '../states/types';

import ClubLists from '../Clubs/ClubLists';

import {ClubImage} from '../states/types';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {
  awsState,
  bucketState,
  clubsImageState,
  leaguesImageState,
} from '../states/recoil';

const Clubs = () => {
  const setClubsImage = useSetRecoilState(clubsImageState);
  const setLeaguesImage = useSetRecoilState(leaguesImageState);

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
    const folderName = 'clubs/';
    aws.downloadFiles(bucket, folderName).then(images => {
      const leaguesImage: ClubImage[] = images.map((image, i) => {
        const name = image.Key.replace('.png', '').replace(folderName, '');
        //TODO League
        return {src: image.Image, alt: name, name: name, league: ''};
      });

      setClubsImage(leaguesImage);
    });
  });

  const clubsImage: ClubImage[] = [
    {
      src: AFC_Ajax,
      alt: 'AFC Ajax NV',
      name: 'AFC Ajax NV',
      league: 'Eredivisie',
    },
    {
      src: Bali_United,
      alt: 'Bali United FC',
      name: 'Bali United FC',
      league: 'Liga 1 Indonesia',
    },
    {
      src: Borussia_Dortmund,
      alt: 'Borussia Dortmund',
      name: 'Borussia Dortmund',
      league: 'Bundesliga',
    },
    {
      src: Celtic_FC,
      alt: 'Celtic',
      name: 'Celtic',
      league: 'Scottish Premiership',
    },
    {src: FC_Porto, alt: 'FC Porto', name: 'FC Porto', league: 'Serie A'},
    {
      src: Juventus_FC,
      alt: 'Juventus',
      name: 'Juventus',
      league: 'Primeira Liga',
    },
    {
      src: Manchester_United_FC,
      alt: 'Man. United',
      name: 'Man. United',
      league: 'Premier League',
    },
    {
      src: Olympique_Lyonnais,
      alt: 'Olympique Lyonnais',
      name: 'Olympique Lyonnais',
      league: 'Ligue 1',
    },
    {
      src: SC_Braga,
      alt: 'Sporting Clube de Brage',
      name: 'Sporting Clube de Brage',
      league: 'Primeira Liga',
    },
    {
      src: Sporting_Clube_de_Portugal,
      alt: 'Sporting Clube de Portugal',
      name: 'Sporting Clube de Portugal',
      league: 'Primeira Liga',
    },
    {
      src: SL_Benfica,
      alt: 'Sport Lisboa a Benfica',
      name: 'Sport Lisboa a Benfica',
      league: 'Primeira Liga',
    },
    {src: SS_Lazio, alt: 'SS Lazio', name: 'SS Lazio', league: 'Serie A'},
  ];

  const leaguesImage: Image[] = [
    {src: Premier_League, alt: 'Premier League', name: 'Premier League'},
    {src: Serie_A, alt: 'Serie A', name: 'Serie A'},
    {src: Eredivisie, alt: 'Eredivisie', name: 'Eredivisie'},
    {src: Bundesliga, alt: 'Bundesliga', name: 'Bundesliga'},
    {
      src: Cinch_premiership,
      alt: 'Scottish Premiership',
      name: 'Scottish Premiership',
    },
    {src: Liga_1, alt: 'Liga 1 Indonesia', name: 'Liga 1 Indonesia'},
    {src: Liga_Portugal, alt: 'Primeira Liga', name: 'Primeira Liga'},
    {src: Ligue_1, alt: 'Ligue 1', name: 'Ligue 1'},
  ];

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col flex-wrap">
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

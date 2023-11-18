import React from 'react';

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

const Clubs = () => {
  const clubsImage: Image[] = [
    {src: AFC_Ajax, alt: 'AFC Ajax NV', name: 'AFC Ajax NV'},
    {src: Bali_United, alt: 'Bali United FC', name: 'Bali United FC'},
    {
      src: Borussia_Dortmund,
      alt: 'Borussia Dortmund',
      name: 'Borussia Dortmund',
    },
    {src: Celtic_FC, alt: 'Celtic', name: 'Celtic'},
    {src: FC_Porto, alt: 'FC Porto', name: 'FC Porto'},
    {src: Juventus_FC, alt: 'Juventus', name: 'Juventus'},
    {src: Manchester_United_FC, alt: 'Man. United', name: 'Man. United'},
    {
      src: Olympique_Lyonnais,
      alt: 'Olympique Lyonnais',
      name: 'Olympique Lyonnais',
    },
    {
      src: SC_Braga,
      alt: 'Sporting Clube de Brage',
      name: 'Sporting Clube de Brage',
    },
    {
      src: Sporting_Clube_de_Portugal,
      alt: 'Sporting Clube de Portugal',
      name: 'Sporting Clube de Portugal',
    },
    {
      src: SL_Benfica,
      alt: 'Sport Lisboa a Benfica',
      name: 'Sport Lisboa a Benfica',
    },
    {src: SS_Lazio, alt: 'SS Lazio', name: 'SS Lazio'},
  ];

  const leaguesImage: Image[] = [
    {src: Bundesliga, alt: 'Bundesliga', name: 'Bundesliga'},
    {
      src: Cinch_premiership,
      alt: 'Scottish Premiership',
      name: 'Scottish Premiership',
    },
    {src: Eredivisie, alt: 'Eredivisie', name: 'Eredivisie'},
    {src: Liga_1, alt: 'Liga 1 Indonesia', name: 'Liga 1 Indonesia'},
    {src: Liga_Portugal, alt: 'Primeira Liga', name: 'Primeira Liga'},
    {src: Ligue_1, alt: 'Ligue 1', name: 'Ligue 1'},
    {src: Premier_League, alt: 'Premier League', name: 'Premier League'},
    {src: Serie_A, alt: 'Serie A', name: 'Serie A'},
  ];

  return <></>;
};

export default Clubs;

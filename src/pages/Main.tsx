import React, {useEffect, useState} from 'react';

import Sidebar from '../commons/Sidebar';
import MainOverview from '../MainOverview/MainOverview';
import Chat from '../commons/Chat';

import {StockOverview, TeamImage} from '../states/types';

import axios from 'axios';

import AJAX from '../static/AJAX.png';
import BOLA from '../static/BOLA.png';
import BVB from '../static/BVB.png';
import CCP from '../static/CCP.png';
import FCP from '../static/FCP.png';
import JUVE from '../static/JUVE.png';
import MANU from '../static/MANU.png';
import OLG from '../static/OLG.png';
import SCB from '../static/SCB.png';
import SCP from '../static/SCP.png';
import SLBEN from '../static/SLBEN.png';
import SSLMI from '../static/SSL.MI.png';

const Main = () => {
  const [teamsData, setTeamsData] = useState('');
  const teamsImage: TeamImage[] = [
    {src: AJAX, alt: 'AFC Ajax NV', name: 'AFC Ajax NV'},
    {src: BOLA, alt: 'Bali United FC', name: 'Bali United FC'},
    {src: BVB, alt: 'Borussia Dortmund', name: 'Borussia Dortmund'},
    {src: CCP, alt: 'Celtic', name: 'Celtic'},
    {src: FCP, alt: 'FC Porto', name: 'FC Porto'},
    {src: JUVE, alt: 'Juventus', name: 'Juventus'},
    {src: MANU, alt: 'Man. United', name: 'Man. United'},
    {src: OLG, alt: 'Olympique Lyonnais', name: 'Olympique Lyonnais'},
    {src: SCB, alt: 'Sporting Clube de Brage', name: 'Sporting Clube de Brage'},
    {
      src: SCP,
      alt: 'Sporting Clube de Portugal',
      name: 'Sporting Clube de Portugal',
    },
    {src: SLBEN, alt: 'Sport Lisboa a Benfica', name: 'Sport Lisboa a Benfica'},
    {src: SSLMI, alt: 'SS Lazio', name: 'SS Lazio'},
  ];

  const teamsStockOverview: StockOverview[] = [
    {
      number: '1',
      team_name: 'Man. United',
      team_image: {src: '', alt: '', name: ''},
      Price: {price: '0.11', price_unit: 'USD'},
      currency: '100',
      change: '1.92',
      change_percentage: '3.51',
      market_cap: '0.10',
      volume: 10,
    },
  ];

  const getTeamData = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/stock_overview/',
    });
    return response.data;
  };

  useEffect(() => {
    getTeamData().then(data => {
      setTeamsData(data);
    });
  }, [setTeamsData]);

  return (
    <React.Fragment>
      <main className="flex justify-between px-12 py-6">
        <Sidebar teams={teamsImage} />
        <MainOverview
          teamsImage={teamsImage}
          teamsStockOverview={teamsStockOverview}
        />
        <Chat />
      </main>
    </React.Fragment>
  );
};

export default Main;

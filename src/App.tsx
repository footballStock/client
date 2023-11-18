import React, {useEffect} from 'react';
import Header from './commons/Header';
import Sidebar from './commons/Sidebar';
import Main from './pages/Posts';
import AppRouter from './AppRouter';

import AJAX from './static/teams/AJAX.png';
import BOLA from './static/teams/BOLA.png';
import BVB from './static/teams/BVB.png';
import CCP from './static/teams/CCP.png';
import FCP from './static/teams/FCP.png';
import JUVE from './static/teams/JUVE.png';
import MANU from './static/teams/MANU.png';
import OLG from './static/teams/OLG.png';
import SCB from './static/teams/SCB.png';
import SCP from './static/teams/SCP.png';
import SLBEN from './static/teams/SLBEN.png';
import SSLMI from './static/teams/SSL.MI.png';
import Chat from './commons/Chat';
import {Image} from './states/types';
import {useSetRecoilState} from 'recoil';
import {teamsImageState} from './states/recoil';

const App = (): JSX.Element => {
  //TODO : 이후 서버 측 stack_overview db 완성 후 name 수정 필요
  const teamsImage: Image[] = [
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

  const setTeamsImage = useSetRecoilState(teamsImageState);

  useEffect(() => {
    setTeamsImage(teamsImage);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main className="flex justify-between px-12 py-6">
        <Sidebar />
        <AppRouter />
        <Chat />
      </main>
    </React.Fragment>
  );
};

export default App;

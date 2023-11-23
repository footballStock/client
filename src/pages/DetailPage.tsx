import React from 'react';
import {useParams} from 'react-router-dom';
import InfoTab from './InfoTab';
import TradingViewWidget from './TradingViewWidget';

const getClubImg = (clubId: string) => {
  return {
    src: 'https://github.com/footballStock/client/blob/main/src/static/subClubs/manchester_united.png?raw=true',
  }; // 나중에 구현 해야됨, 일단 깃허브 서버에서 가져옴.
};

const getFinancialOverview = (clubID: string) => {
  return {
    price: 19.09,
    change24h: 1.54, // 얘네 tradingview에서 보이긴 함. 여기서 데이터 받아와야되나
    volume: 560656,
    marketCap: 3147000000,
  };
};

const clubImg = getClubImg('MANU'); // 삭제할것
const financialOverview = getFinancialOverview('MANU'); //삭제할것

const DetailPage = () => {
  const {clubId} = useParams();

  // MEMO: can use the clubId to fetch data or perform other actions
  // For example)
  // const clubData = fetchClubData(clubId);

  return (
    <div>
      <div className="flex">
        <div className="flex-none">
          <img src={clubImg.src} alt="" className="w-24 h-24 mb-4" />
        </div>
        <div className="flex-grow bg-red-100">
          financial overview (양쪽 제외한 넓이 차지)
        </div>
        <div className="flex-none bg-blue-100">
          next match (넓이 일정하게 고정)
        </div>
      </div>
      <div className="h-96">
        <TradingViewWidget />
      </div>
      <InfoTab />
    </div>
  );
};

export default DetailPage;

import React, {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';

import {useParams} from 'react-router-dom';
import {getData} from '../utils/api';
import InfoTab from '../ClubDetail/InfoTab';
import TradingViewWidget from './TradingViewWidget';
import ComingSoon from './ComingSoon';
import SideView from '../ClubDetail/SideView';
import {clubs} from '../states/constants';
import {Financials, Image} from '../states/types';
import {teamsImageState} from '../states/recoil';

const DetailPage = () => {
  const {clubCode} = useParams();
  const [clubData, setClubData] = useState();
  const [financials, setFinancials] = useState<Financials>();
  const [symbol, setSymbol] = useState<string | null>();
  const [logo, setLogo] = useState<Image | null>();
  const teamsImage = useRecoilValue(teamsImageState);
  // MEMO: can use the clubId to fetch data or perform other actions
  // For example)
  // const clubData = fetchClubData(clubId);
  const getPostList = async () => {
    return getData(`/teams/?code=${clubCode}`).then(result => {
      return result;
    });
  };

  const findClubByCode = (code: string) => {
    for (const clubName in clubs) {
      if (clubs[clubName].code === code) {
        return {name: clubName, ...clubs[clubName]};
      }
    }
    return null;
  };

  useEffect(() => {
    getPostList().then((data: any) => {
      setClubData(data);
    });
    if (clubCode) {
      const curTeam = findClubByCode(clubCode);
      if (curTeam) {
        setFinancials(curTeam.financial);
        setSymbol(curTeam.ticker);
      }
    }
  }, [clubCode, teamsImage]);

  useEffect(() => {
    if (clubData) {
      const imageInfo = teamsImage.find(
        image => image.name === (clubData as any).team.name,
      ) || {src: '', alt: '', name: ''};
      setLogo(imageInfo);
    }
  }, [teamsImage, clubData]);

  return (
    <div>
      <div className="flex">
        <div className="flex flex-row self-center flex-grow">
          {logo && (
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain w-40 h-40 mb-4"
            />
          )}
          <div className="flex flex-col justify-center pl-6">
            <div className="text-xl font-medium">
              {clubData && (clubData as any).league.name}
            </div>
            <div className="flex flex-col mt-4">
              <div className="text-3xl font-semibold">
                {clubData && (clubData as any).team.name}
              </div>
              <div className="flex flex-row">
                founded at
                <div className="pl-1 font-medium">
                  {clubData && (clubData as any).team.founded}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none">
          {clubData ? <SideView fullData={clubData} /> : null}
        </div>
      </div>
      <div className="h-96">
        {symbol &&
          (!symbol.includes('EURONEXT') ? (
            <TradingViewWidget symbol={symbol} />
          ) : (
            <ComingSoon />
          ))}
      </div>
      <div className="flex flex-row">
        <div className="flex-auto">
          {clubData && financials ? (
            <InfoTab fullData={clubData} financials={financials} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

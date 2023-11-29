import React, {useEffect, useMemo, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {Column} from 'react-table';

import TableSheet from './TableSheet';

import {FootballTeamStockInfo, StockOverview, Image} from '../states/types';
import {teamsImageState} from '../states/recoil';
import AD from '../static/others/AD.png';
import {getData} from '../commons/api';

const MainOverview = () => {
  const teamsImage = useRecoilValue(teamsImageState);
  const [teamsStockOverview, setTeamsStockOverview] = useState<StockOverview[]>(
    [],
  );

  const getTeamData = async (): Promise<FootballTeamStockInfo[]> => {
    return getData('/stock_overview/').then(response => {
      return response;
    });
  };

  //TODO : useEffect [] 지양 -> update 필요
  useEffect(() => {
    const handleDataProcessing = (data: FootballTeamStockInfo[]) => {
      const formattedData = data.map((item, index) => {
        // teamsImage 배열에서 해당 팀 이름과 일치하는 이미지 정보를 찾는다.
        const imageInfo = teamsImage.find(
          image => image.name === item.team_name,
        ) || {src: '', alt: '', name: ''};

        return {
          number: (index + 1).toString(),
          team_name: item.team_name,
          team_image: imageInfo,
          Price: {
            price: item.price,
            price_unit: item.price_unit,
          },
          currency: item.currency,
          change: item.change,
          change_percentage: item.change_percentage,
          market_cap: item.market_cap,
          volume: item.volume,
        };
      });

      setTeamsStockOverview(formattedData);
    };

    //TODO : 서버 측 stack_overviwe db 완성 후 test
    getTeamData().then(data => {
      handleDataProcessing(data);
    });
  }, []);

  const columns: Column<StockOverview>[] = useMemo(
    () => [
      {
        accessor: 'number',
        Header: '#',
      },
      {
        accessor: 'team_image',
        Header: 'Name',
        Cell: ({value}) => (
          <div className="flex items-center">
            <img
              src={value.src}
              alt={value.alt}
              className="w-7 h-7 object-contain mr-2"
            />
            <button className="px-1">{value.name}</button>
          </div>
        ),
      },
      {
        accessor: 'Price',
        Header: 'Price',
        Cell: ({value}) => (
          <div>
            <span>{value.price} </span>
            <span className="text-gray-400">{value.price_unit}</span>
          </div>
        ),
      },
      {
        accessor: 'change_percentage',
        Header: '24h(%)',
        Cell: ({value}) => {
          const isNegative = value.startsWith('-');
          return (
            <span className={isNegative ? 'text-red-500' : 'text-blue-500'}>
              {value}
            </span>
          );
        },
      },
      {
        accessor: 'market_cap',
        Header: 'Market Cap',
      },
      {
        accessor: 'volume',
        Header: 'Volume',
      },
    ],
    [],
  );

  const mergeTeamData = (teams: Image[], stockData: StockOverview[]) => {
    return stockData.map(stock => {
      const teamImage = teams.find(team => team.name === stock.team_name);
      return {
        ...stock,
        team_image: teamImage
          ? {...teamImage}
          : {src: '', alt: '', name: stock.team_name},
      };
    });
  };
  const mergedData = mergeTeamData(teamsImage, teamsStockOverview);
  const data = useMemo(() => mergedData, [mergedData]);

  return (
    <section>
      <div>
        <img src={AD} alt="advertise" className=" w-[60rem] h-[24rem]"></img>
        <TableSheet columns={columns} data={data} />
      </div>
    </section>
  );
};

export default MainOverview;

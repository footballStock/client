import React, {useEffect, useMemo, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {teamsImageState} from '../states/recoil';
import {FootballTeamStockInfo, Image, StockOverview} from '../states/types';
import {getData} from '../utils/api';
import {useNavigate} from 'react-router-dom';
import {Column} from 'react-table';
import {findCode} from '../utils/util';
import TableSheet from '../commons/TableSheet';

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

  const navigate = useNavigate();

  const handlePostClick = (code: string) => {
    navigate(`/clubs/${code}`);
  };

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
          <div
            className="flex items-center"
            onClick={() => handlePostClick(findCode(value.name))}>
            <img
              src={value.src}
              alt={value.alt}
              className="object-contain mr-2 w-7 h-7"
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
            <span className="text-gray-400 text-[10px]">
              {value.price_unit}
            </span>
          </div>
        ),
      },
      {
        accessor: 'change_percentage',
        Header: '24h(%)',
        Cell: ({value}) => {
          const isNegative = value.startsWith('-');
          return (
            <p className={isNegative ? 'text-red-500' : 'text-blue-500'}>
              {value}
            </p>
          );
        },
      },
      {
        accessor: 'market_cap',
        Header: 'Market Cap',
        Cell: ({value}) => {
          return <p>{value}</p>;
        },
      },
      {
        accessor: 'volume',
        Header: 'Volume',
        Cell: ({value}) => {
          return <p>{value}</p>;
        },
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
        <img
          src="https://images.squarespace-cdn.com/content/v1/5ced6b7a1046fc00011611d7/1570873153520-JVMFAKFINYKM2TWNJGJU/Ad-gif-1.gif"
          alt="advertise"
          id="ad"
          className=""></img>
        <TableSheet columns={columns} data={data} />
      </div>
    </section>
  );
};

export default MainOverview;

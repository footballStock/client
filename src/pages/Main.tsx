import React, {useMemo} from 'react';
import Sidebar from '../components/Sidebar';
import LiveChat from '../static/Livechat.png';
import AD from '../static/AD.png';

import {Column, useTable} from 'react-table';
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

type TeamImage = {
  src: string;
  alt: string;
  name: string;
};

type PriceData = {
  price: string;
  currency: string;
};

type TeamStock = {
  Name: string;
  Number: string;
  Price: PriceData;
  '24h': string;
  'Market Cap': string;
  Volume: string;
};

const Main = () => {
  const teams: TeamImage[] = [
    {src: AJAX, alt: 'AFC Ajax NV', name: 'AFC Ajax NV'},
    {src: BOLA, alt: 'Bali United FC', name: 'Bali United FC'},
    {src: BVB, alt: 'Borussia Dortmund', name: 'Borussia Dortmund'},
    {src: CCP, alt: 'Celtic', name: 'Celtic'},
    {src: FCP, alt: 'FC Porto', name: 'FC Porto'},
    {src: JUVE, alt: 'Juventus', name: 'Juventus'},
    {src: MANU, alt: 'Manchaster United', name: 'Manchaster United'},
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

  const teamStockData: TeamStock[] = [
    {
      Number: '1',
      Name: 'AFC Ajax NV',
      Price: {price: '19.41', currency: 'USD'},
      '24h': '-1.41%',
      'Market Cap': '3.16B',
      Volume: '955.722',
    },
    {
      Number: '1',
      Name: 'Manchaster United',
      Price: {price: '19.41', currency: 'USD'},
      '24h': '1.41%',
      'Market Cap': '3.16B',
      Volume: '955.722',
    },
  ];

  const columns: Column<{
    Number: string;
    Name: TeamImage;
    Price: PriceData;
    '24h': string;
    'Market Cap': string;
    Volume: string;
  }>[] = useMemo(
    () => [
      {
        accessor: 'Number',
        Header: '#',
      },
      {
        accessor: 'Name',
        Header: 'Name',
        Cell: ({value}) => (
          <div className="flex items-center">
            <img src={value.src} alt={value.alt} className="w-7 h-7" />
            <span>{value.name}</span>
          </div>
        ),
      },
      {
        accessor: 'Price',
        Header: 'Price',
        Cell: ({value}) => (
          <div>
            <span>{value.price} </span>
            <span className="text-gray-400">{value.currency}</span>
          </div>
        ),
      },
      {
        accessor: '24h',
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
        accessor: 'Market Cap',
        Header: 'Market Cap',
      },
      {
        accessor: 'Volume',
        Header: 'Volume',
      },
    ],
    [],
  );

  const mergeTeamData = (teams: TeamImage[], stockData: TeamStock[]) => {
    return stockData.map(stock => {
      const teamImage = teams.find(team => team.name === stock.Name);
      return {
        ...stock,
        Name: teamImage ? {...teamImage} : {src: '', alt: '', name: stock.Name}, // Provide a default image object if not found
      };
    });
  };
  const mergedData = mergeTeamData(teams, teamStockData);
  const data = useMemo(() => mergedData, [mergedData]);
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({columns, data});

  return (
    <React.Fragment>
      <main className="flex justify-between px-12 py-6">
        <Sidebar teams={teams} />
        <section className="px-4 py-8">
          <div>
            <img src={AD}></img>
            <table {...getTableProps()} className="min-w-full leading-normal">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    className="text-left">
                    {headerGroup.headers.map(column => (
                      <th
                        {...column.getHeaderProps()}
                        className="px-5 py-3 text-sm font-semibold tracking-wider text-left bg-gray-100 border-b-2 text-gray-950">
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="text-gray-950">
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="border-b border-gray-200">
                      {row.cells.map(cell => (
                        <td
                          {...cell.getCellProps()}
                          className="px-5 py-3 text-sm">
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
        <section id="chat" className="flex flex-col items-center space-x-4">
          <div className="px-20 py-8 ">
            <img src={LiveChat} className="w-7 h-7" />
          </div>
          <div className="w-60 h-72 bg-custom-room">Room</div>
          <div className="h-96 w-60 bg-custom-chat">Chatting</div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Main;

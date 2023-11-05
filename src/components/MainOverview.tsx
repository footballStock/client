import React from 'react';
import {Column, useTable} from 'react-table';

import AD from '../static/AD.png';
import {PriceData, TeamImage} from 'src/states/types';

const MainOverview: React.FC<{
  columns: Column<{
    Number: string;
    Name: TeamImage;
    Price: PriceData;
    '24h': string;
    'Market Cap': string;
    Volume: string;
  }>[];
  data: {
    Number: string;
    Name: TeamImage;
    Price: PriceData;
    '24h': string;
    'Market Cap': string;
    Volume: string;
  }[];
}> = ({columns, data}) => {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({columns, data});

  return (
    <section>
      <div>
        <img src={AD} alt="advertise" className=" w-[60rem] h-[24rem]"></img>
        <table {...getTableProps()} className="min-w-full leading-normal">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="text-left">
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
                <tr {...row.getRowProps()} className="border-b border-gray-200">
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="px-5 py-3 text-sm">
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
  );
};

export default MainOverview;

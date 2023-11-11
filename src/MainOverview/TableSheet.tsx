import React, {useMemo} from 'react';
import {Column, useTable} from 'react-table';
import {StockOverview, TeamImage} from 'src/states/types';

const TableSheet: React.FC<{
  teamsImage: TeamImage[];
  teamsStockOverview: StockOverview[];
}> = ({teamsImage, teamsStockOverview}): JSX.Element => {
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
            <img src={value.src} alt={value.alt} className="w-7 h-7" />
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

  const mergeTeamData = (teams: TeamImage[], stockData: StockOverview[]) => {
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

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({columns, data});

  return (
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
  );
};

export default TableSheet;

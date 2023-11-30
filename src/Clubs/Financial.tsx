import React, {useMemo} from 'react';
import {FinancialData} from 'src/states/types';
import ResponseBar from './ResponseBar';
import {Column} from 'react-table';

const Financial = ({financialData}: {financialData: FinancialData}) => {
  interface DataObject {
    country: string;
    [key: string]: string | number;
  }

  function createDataArray(
    keys: string[],
    periods: string[],
    financialData: FinancialData,
  ): DataObject[] {
    return periods.map((period, index) => {
      const dataObject: DataObject = {country: period};

      keys.forEach(key => {
        dataObject[key] = financialData[key as keyof FinancialData][index];
        dataObject[`${key}Color`] =
          key === 'sales' || key === 'totalAsset' || key === 'CFO'
            ? 'hsl(92, 70%, 50%)'
            : 'hsl(290, 70%, 50%)';
        if (key === 'CFI') dataObject[`${key}Color`] = 'hsl(357, 70%, 50%)';
      });

      return dataObject;
    });
  }

  const periods = ['Sep 22', 'Dec 22', 'Mar 23', 'Jun 23'];

  const key1 = ['sales', 'netProfit'];
  const key2 = ['totalAsset', 'totalDebt'];
  const key3 = ['CFO', 'CFI', 'CFF'];
  const data1 = createDataArray(key1, periods, financialData);
  const data2 = createDataArray(key2, periods, financialData);
  const data3 = createDataArray(key3, periods, financialData);

  const columns: Column<any>[] = useMemo(
    () => [
      {
        accessor: 'number',
        Header: '#',
      },
      {
        accessor: 'team_image',
        Header: '2023년 06월 30일',
      },
      {
        accessor: 'Price',
        Header: '2023년 03월 31일',
      },
      {
        accessor: 'change_percentage',
        Header: '2022년 12월 31일',
      },
      {
        accessor: 'market_cap',
        Header: '2022년 09월 30일',
      },
    ],
    [],
  );

  //   const mergeTeamData = (teams: Image[], stockData: StockOverview[]) => {
  //     return stockData.map(stock => {
  //       const teamImage = teams.find(team => team.name === stock.team_name);
  //       return {
  //         ...stock,
  //         team_image: teamImage
  //           ? {...teamImage}
  //           : {src: '', alt: '', name: stock.team_name},
  //       };
  //     });
  //   };

  //   const mergedData = mergeTeamData(teamsImage, teamsStockOverview);
  //   const data = useMemo(() => mergedData, [mergedData]);

  return (
    <>
      <ResponseBar data={data1} keys={key1} />
      <ResponseBar data={data2} keys={key2} />
      <ResponseBar data={data3} keys={key3} />
    </>
  );
};

export default Financial;

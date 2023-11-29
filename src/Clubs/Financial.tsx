import React from 'react';
import {FinancialData} from 'src/states/types';
import ResponseBar from './ResponseBar';

const Financial = ({financialData}: {financialData: FinancialData}) => {
  const data1 = [
    {
      country: 'Sep 22',
      sales: financialData.sales[0],
      salesColor: 'hsl(92, 70%, 50%)',
      netProfit: financialData.netProfit[0],
      netProfitColor: 'hsl(290, 70%, 50%)',
    },
    {
      country: 'Dec 22',
      sales: financialData.sales[1],
      salesColor: 'hsl(92, 70%, 50%)',
      netProfit: financialData.netProfit[1],
      netProfitColor: 'hsl(290, 70%, 50%)',
    },
    {
      country: 'Mar 23',
      sales: financialData.sales[2],
      salesColor: 'hsl(92, 70%, 50%)',
      netProfit: financialData.netProfit[2],
      netProfitColor: 'hsl(290, 70%, 50%)',
    },
    {
      country: 'Jun 23',
      sales: financialData.sales[3],
      salesColor: 'hsl(92, 70%, 50%)',
      netProfit: financialData.netProfit[3],
      netProfitColor: 'hsl(290, 70%, 50%)',
    },
  ];

  const key1 = ['sales', 'netProfit'];

  const data2 = [
    {
      country: 'Sep 22',
      totalAsset: financialData.totalAsset[0],
      totalAssetColor: 'hsl(92, 70%, 50%)',
      totalDebt: financialData.totalDebt[0],
      totalDebtColor: 'hsl(290, 70%, 50%)',
    },
    {
      country: 'Dec 22',
      totalAsset: financialData.totalAsset[1],
      totalAssetColor: 'hsl(92, 70%, 50%)',
      totalDebt: financialData.totalDebt[1],
      totalDebtColor: 'hsl(290, 70%, 50%)',
    },
    {
      country: 'Mar 23',
      totalAsset: financialData.totalAsset[2],
      totalAssetColor: 'hsl(92, 70%, 50%)',
      totalDebt: financialData.totalDebt[2],
      totalDebtColor: 'hsl(290, 70%, 50%)',
    },
    {
      country: 'Jun 23',
      totalAsset: financialData.totalAsset[3],
      totalAssetColor: 'hsl(92, 70%, 50%)',
      totalDebt: financialData.totalDebt[3],
      totalDebtColor: 'hsl(290, 70%, 50%)',
    },
  ];

  const key2 = ['totalAsset', 'totalDebt'];

  const data3 = [
    {
      country: 'Sep 22',
      CFO: financialData.CFO[0],
      CFOColor: 'hsl(92, 70%, 50%)',
      CFI: financialData.CFI[0],
      CFIColor: 'hsl(290, 70%, 50%)',
    },
    {
      country: 'Dec 22',
      CFO: financialData.CFO[1],
      CFOColor: 'hsl(92, 70%, 50%)',
      CFI: financialData.CFI[1],
      CFIColor: 'hsl(290, 70%, 50%)',
    },
    {
      country: 'Mar 23',
      CFO: financialData.CFO[2],
      CFOColor: 'hsl(92, 70%, 50%)',
      CFI: financialData.CFI[2],
      CFIColor: 'hsl(290, 70%, 50%)',
    },
    {
      country: 'Jun 23',
      CFO: financialData.CFO[3],
      CFOColor: 'hsl(92, 70%, 50%)',
      CFI: financialData.CFI[3],
      CFIColor: 'hsl(290, 70%, 50%)',
    },
  ];

  const key3 = ['CFO', 'CFI'];

  return (
    <>
      <ResponseBar data={data1} keys={key1} />
      <ResponseBar data={data2} keys={key2} />
      <ResponseBar data={data3} keys={key3} />
    </>
  );
};

export default Financial;

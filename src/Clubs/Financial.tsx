import React from 'react';

import {Financials} from '../states/types';
import ResponseBar from './ResponseBar';
import DisplayPanel from './DisplayPanel';
import QuarterlyFiguresTable from './QuarterlyFiguresTable';

const Financial = ({financials}: {financials: Financials}) => {
  type barData = {
    country: string;
    [key: string]: string | number;
  };

  const createDataArray = (
    keys: string[],
    periods: string[],
    datas: [number[], number[]],
  ): barData[] => {
    return periods.map((period, index) => {
      const dataObject: barData = {country: period};

      keys.forEach((key, keyIndex) => {
        dataObject[key] = datas[keyIndex][index];
        dataObject[`${key}Color`] =
          key === 'totalSales' || key === 'totalAsset' || key === 'cash'
            ? 'hsl(92, 70%, 50%)'
            : 'hsl(290, 70%, 50%)';
      });

      return dataObject;
    });
  };

  const periods = ['Sep 22', 'Dec 22', 'Mar 23', 'Jun 23'];
  const key1 = ['totalSales', 'netProfit'];
  const key2 = ['totalAsset', 'totalDebt'];
  const key3 = ['cash', 'netChangeInCash'];

  const data1 = createDataArray(key1, periods, [
    financials.incomeStatement.totalSales,
    financials.incomeStatement.netProfit,
  ]);
  const data2 = createDataArray(key2, periods, [
    financials.balanceSheet.totalAsset,
    financials.balanceSheet.totalDebt,
  ]);
  const data3 = createDataArray(key3, periods, [
    financials.cashFlowStatement.cash,
    financials.cashFlowStatement.netChangeInCash,
  ]);

  return (
    <>
      <div>
        <div>
          <ResponseBar data={data1} keys={key1} />
          <DisplayPanel
            datas={[
              financials.incomeStatement.grossProfitMargin,
              financials.incomeStatement.operatingProfitMargin,
              financials.incomeStatement.netProfitMargin,
              financials.incomeStatement.returnOnInvestment,
            ]}
            names={[
              'grossProfitMargin',
              'operatingProfitMargin',
              'netProfitMargin',
              'returnOnInvestment',
            ]}
            periods={periods}
          />
        </div>
        <QuarterlyFiguresTable
          datas={[
            financials.incomeStatement.totalSales,
            financials.incomeStatement.totalProfit,
            financials.incomeStatement.operatingProfit,
            financials.incomeStatement.netProfit,
          ]}
          names={['totalSales', 'totalProfit', 'operatingProfit', 'netProfit']}
          periods={periods}
        />
      </div>
      <div>
        <ResponseBar data={data2} keys={key2} />
        <DisplayPanel
          datas={[
            financials.balanceSheet.quickRatio,
            financials.balanceSheet.currentRatio,
            financials.balanceSheet.longTermDebtRatio,
            financials.balanceSheet.totalDebtRatio,
          ]}
          names={[
            'quickRatio',
            'currentRatio',
            'longTermDebtRatio',
            'totalDebtRatio',
          ]}
          periods={periods}
        />
        <QuarterlyFiguresTable
          datas={[
            financials.balanceSheet.totalAsset,
            financials.balanceSheet.totalDebt,
            financials.balanceSheet.totalCapital,
          ]}
          names={['totalAsset', 'totalDebt', 'totalCapital']}
          periods={periods}
        />
      </div>
      <div>
        <ResponseBar data={data3} keys={key3} />
        <DisplayPanel
          datas={[
            financials.cashFlowStatement.cashFlowPerShare,
            financials.cashFlowStatement.EarningsPerShare,
            financials.cashFlowStatement.operatingCashFlow,
          ]}
          names={['cashFlowPerShare', 'EarningsPerShare', 'operatingCashFlow']}
          periods={periods}
        />
        <QuarterlyFiguresTable
          datas={[
            financials.cashFlowStatement.cashFromOperatingActivities,
            financials.cashFlowStatement.cashFlowFromInvestingActivities,
            financials.cashFlowStatement.cashFromFinancialActivities,
            financials.cashFlowStatement.netChangeInCash,
          ]}
          names={[
            'cashFromOperatingActivities',
            'cashFlowFromInvestingActivities',
            'cashFromFinancialActivities',
            'netChangeInCash',
          ]}
          periods={periods}
        />
      </div>
    </>
  );
};

export default Financial;

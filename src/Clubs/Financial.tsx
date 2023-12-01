import React from 'react';

import {Financials} from '../states/types';
import ResponseBar from './ResponseBar';
import DisplayPanel from './DisplayPanel';
import QuarterlyFiguresTable from './QuarterlyFiguresTable';

const Title = ({title}: {title: any}) => {
  return <div className="m-auto text-lg font-bold">{title}</div>;
};

const Financial = ({financials}: {financials: Financials}) => {
  type barData = {
    country: string;
    [key: string]: string | number;
  };

  const createDataArray = (
    keys: string[],
    dates: string[],
    datas: [number[], number[]],
  ): barData[] => {
    return dates.map((period, index) => {
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

  // const dates = ['Jun 22', 'Sep 22', 'Dec 22', 'Mar 23'];
  const dates = [
    'Mar 31, 2023',
    'Dec 31, 2022',
    'Sep 30, 2022',
    'Jun 30, 2022',
  ];
  const key1 = ['totalSales', 'netProfit'];
  const key2 = ['totalAsset', 'totalDebt'];
  const key3 = ['cash', 'netChangeInCash'];

  const data1 = createDataArray(key1, dates, [
    financials.incomeStatement.totalSales,
    financials.incomeStatement.netProfit,
  ]);
  const data2 = createDataArray(key2, dates, [
    financials.balanceSheet.totalAsset,
    financials.balanceSheet.totalDebt,
  ]);
  const data3 = createDataArray(key3, dates, [
    financials.cashFlowStatement.cash,
    financials.cashFlowStatement.netChangeInCash,
  ]);

  //TODO : 이름 수정!
  const titles = ['CCP 손익 계산서', 'CCP 대차 대조표', 'CCP 현금 흐름표'];

  const incomePanelNames = [
    'grossProfitMargin',
    'operatingProfitMargin',
    'netProfitMargin',
    'returnOnInvestment',
  ];

  const incomeFigureNames = [
    'totalSales',
    'totalProfit',
    'operatingProfit',
    'netProfit',
  ];

  const balancePanelNames = [
    'quickRatio',
    'currentRatio',
    'longTermDebtRatio',
    'totalDebtRatio',
  ];

  const cashFlowPanelNames = [
    'cashFlowPerShare',
    'EarningsPerShare',
    'operatingCashFlow',
  ];

  const cashFlowFigureNames = [
    'cashFromOperatingActivities',
    'cashFlowFromInvestingActivities',
    'cashFromFinancialActivities',
    'netChangeInCash',
  ];

  const balanceFigureNames = ['totalAsset', 'totalDebt', 'totalCapital'];

  return (
    <div>
      <div className="flex flex-col mt-5 mb-5 border border-b-black">
        <Title title={titles[0]} />
        <div className="flex flex-row">
          <ResponseBar data={data1} keys={key1} />
          <DisplayPanel
            datas={[
              financials.incomeStatement.grossProfitMargin,
              financials.incomeStatement.operatingProfitMargin,
              financials.incomeStatement.netProfitMargin,
              financials.incomeStatement.returnOnInvestment,
            ]}
            names={incomePanelNames}
            times={['TTM', 'TTM', 'TTM', 'TTM']}
          />
        </div>
        <QuarterlyFiguresTable
          datas={[
            financials.incomeStatement.totalSales,
            financials.incomeStatement.totalProfit,
            financials.incomeStatement.operatingProfit,
            financials.incomeStatement.netProfit,
          ]}
          names={incomeFigureNames}
          dates={dates}
        />
      </div>
      <div className="flex flex-col mt-5 mb-5 border border-b-black">
        <Title title={titles[1]} />
        <div className="flex flex-row">
          <ResponseBar data={data2} keys={key2} />
          <DisplayPanel
            datas={[
              financials.balanceSheet.quickRatio,
              financials.balanceSheet.currentRatio,
              financials.balanceSheet.longTermDebtRatio,
              financials.balanceSheet.totalDebtRatio,
            ]}
            names={balancePanelNames}
            times={['MRQ', 'MRQ', 'MRQ', 'MRQ']}
          />
        </div>
        <QuarterlyFiguresTable
          datas={[
            financials.balanceSheet.totalAsset,
            financials.balanceSheet.totalDebt,
            financials.balanceSheet.totalCapital,
          ]}
          names={balanceFigureNames}
          dates={dates}
        />
      </div>
      <div className="flex flex-col mt-5 mb-5 border border-b-black">
        <Title title={titles[2]} />
        <div className="flex flex-row">
          <ResponseBar data={data3} keys={key3} />
          <DisplayPanel
            datas={[
              financials.cashFlowStatement.cashFlowPerShare,
              financials.cashFlowStatement.EarningsPerShare,
              financials.cashFlowStatement.operatingCashFlow,
            ]}
            names={cashFlowPanelNames}
            times={['TTM', 'TTM', '']}
          />
        </div>
        <QuarterlyFiguresTable
          datas={[
            financials.cashFlowStatement.cashFromOperatingActivities,
            financials.cashFlowStatement.cashFlowFromInvestingActivities,
            financials.cashFlowStatement.cashFromFinancialActivities,
            financials.cashFlowStatement.netChangeInCash,
          ]}
          names={cashFlowFigureNames}
          dates={dates}
        />
      </div>
    </div>
  );
};

export default Financial;

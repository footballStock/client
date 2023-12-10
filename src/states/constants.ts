import {Club, ClubFinancials} from './types';

const financialData: ClubFinancials = {
  AJA: {
    incomeStatement: {
      totalSales: [59880000, 0, 38270000, 38270000], // 총매출
      totalProfit: [54660000, 0, 33860000, 33860000], //? 총 이익
      operatingProfit: [0, -3990000, -22200000, -22200000], //? 영업 이익
      netProfit: [38020000, 0, -18530000, -18530000], // 순이익
      grossProfitMargin: 90.18, //? 매출총이익률
      operatingProfitMargin: -26.07, //? 영업이익률
      netProfitMargin: 19.85, //? 순이익률
      returnOnInvestment: -10.9, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 0.71, //? 당좌비율
      currentRatio: 1.05, //? 유동비율
      longTermDebtRatio: 0, //? 장기부채비율
      totalDebtRatio: 44.34, //? 총부채비율

      totalAsset: [607940000, 0, 548020000, 548020000], // 총자산
      totalDebt: [334270000, 0, 311410000, 311410000], // 총부채
      totalCapital: [0, 0, 236610000, 236610000], //? 총자본
    },
    cashFlowStatement: {
      cash: [10000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: -0.45, //? 현금흐름표
      EarningsPerShare: 10.71, //? 주당수익
      operatingCashFlow: -9.15, //? 영업현금흐름
      cashFromOperatingActivities: [8100000, 0, -12240000, -12240000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        4130000, 4130000, -1880000, -1880000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [0, 0, -1070000, -1070000], // 재무활동현금
      netChangeInCash: [0, 0, -15200000, -15200000], //? 현금순변동
    },
  },

  SAM: {
    incomeStatement: {
      totalSales: [94041160000, 83017520000, 57897450000, 98450220000], // 총매출
      totalProfit: [84522290000, 74972580000, 45621910000, 85942260000], //? 총 이익
      operatingProfit: [1978710000, 3616960000, -42454560000, -12028310000], //? 영업 이익
      netProfit: [-13572860000, 36652360000, -23033200000, -11544510000], // 순이익
      grossProfitMargin: 88.12, //? 매출총이익률
      operatingProfitMargin: -16.51, //? 영업이익률
      netProfitMargin: -3.45, //? 순이익률
      returnOnInvestment: -5.03, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 10.59, //? 당좌비율
      currentRatio: 12.7, //? 유동비율
      longTermDebtRatio: 0, //? 장기부채비율
      totalDebtRatio: 1.82, //? 총부채비율
      totalAsset: [773407970000, 810582030000, 785650230000, 771424440000], // 총자산
      totalDebt: [59083190000, 55154230000, 54919140000, 53125300000], // 총부채
      totalCapital: [714324790000, 755427800000, 730731090000, 718299130000], //? 총자본
    },
    cashFlowStatement: {
      cash: [10000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: 4.5, //? 현금흐름표
      EarningsPerShare: 55.57, //? 주당수익
      operatingCashFlow: 70.31, //? 영업현금흐름
      cashFromOperatingActivities: [7703880000, -7039480000, -3543390000, 29885890000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -88869500000, 13902800000, -3395950000, -27607170000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [ -10725250000, 639720000, -1441200000, -1277560000,], // 재무활동현금
      netChangeInCash: [-61890860000, 7503040000, -38944080000, 1001160000], //? 현금순변동
    },
  },
  DOR: {
    incomeStatement: {
      totalSales: [117510000, 102460000, 105020000, 167330000], // 총매출
      totalProfit: [112000000, 96180000, 98700000, 175260000 ], //? 총 이익
      operatingProfit: [2850000, -19430000 , -13980000, 56400000], //? 영업 이익
      netProfit: [2390000, -15530000, -15110000, 52370000], // 순이익
      grossProfitMargin: 94.61, //? 매출총이익률
      operatingProfitMargin: 4.87, //? 영업이익률
      netProfitMargin: 4.6, //? 순이익률
      returnOnInvestment: 5.89, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 0.43, //? 당좌비율
      currentRatio: 0.52, //? 유동비율
      longTermDebtRatio: 3.24, //? 장기부채비율
      totalDebtRatio: 8.79, //? 총부채비율
      totalAsset: [522420000 , 523700000, 511840000, 639670000], // 총자산
      totalDebt: [201730000, 218530000, 229130000, 304600000], // 총부채
      totalCapital: [320690000, 305160000, 282700000, 335070000], //? 총자본
    },
    cashFlowStatement: {
      cash: [10000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: 0.43, //? 현금흐름표
      EarningsPerShare: 4.61, //? 주당수익
      operatingCashFlow: 12.43, //? 영업현금흐름
      cashFromOperatingActivities: [-6030000, 25490000, -2940000, 30470000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -4630000, -18670000, -13830000, -18300000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [4110000, -3960000, 17390000, -5150000], // 재무활동현금
      netChangeInCash: [-6540000 , 2850000, 612000, 7020000], //? 현금순변동
    },
  },
  CEL: {
    incomeStatement: {
      totalSales: [38270000, 38270000, 21650000, 21650000], // 총매출
      totalProfit: [14070000, 14070000, -1860000, -1860000], //? 총 이익
      operatingProfit: [16060000, 16060000, -9900000, -9900000], //? 영업 이익
      netProfit: [14040000,14040000, 2620000, 26620000], // 순이익
      grossProfitMargin: 20.37, //? 매출총이익률
      operatingProfitMargin: 13.21, //? 영업이익률
      netProfitMargin: 27.81, //? 순이익률
      returnOnInvestment: 13.82, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 1.13, //? 당좌비율
      currentRatio: 1.32, //? 유동비율
      longTermDebtRatio: 4.7, //? 장기부채비율
      totalDebtRatio: 5.67, //? 총부채비율
      totalAsset: [187530000, 187530000, 220290000, 220290000], // 총자산
      totalDebt: [84590000, 84590000, 112100000, 112100000], // 총부채
      totalCapital: [102940000, 102940000, 108190000, 108190000], //? 총자본
    },
    cashFlowStatement: {
      cash: [1000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: 0.46, //? 현금흐름표
      EarningsPerShare: 1.27, //? 주당수익
      operatingCashFlow: 8.03, //? 영업현금흐름
      cashFromOperatingActivities: [143720000, 14370000, 7380000, 7380000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -482000 ,  -482000, -654000, -654000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-719000, -719000, -654000, -654000], // 재무활동현금
      netChangeInCash: [14140000, 14140000, 6070000, 6070000], //? 현금순변동
    },
  },
  POR: {
    incomeStatement: {
      totalSales: [26620000, 0, 51290000, 0], // 총매출
      totalProfit: [24950000, 0, 48710000, 0], //? 총 이익
      operatingProfit: [-21880000, 0, -953000, -953000], //? 영업 이익
      netProfit: [15550000, 0, -4950000, -4950000], // 순이익
      grossProfitMargin: 94.55, //? 매출총이익률
      operatingProfitMargin: -29.05, //? 영업이익률
      netProfitMargin: 13.61, //? 순이익률
      returnOnInvestment: 0, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 0.29, //? 당좌비율
      currentRatio: 0.36, //? 유동비율
      longTermDebtRatio: 0, //? 장기부채비율
      totalDebtRatio: -140.41, //? 총부채비율
      totalAsset: [418450000, 418450000, 359340000, 359340000], // 총자산
      totalDebt: [530120000, 530120000, 0, 0], // 총부채
      totalCapital: [-11670000, -116670000, -122030000, -122030000], //? 총자본
    },
    cashFlowStatement: {
      cash: [10000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: -2.2, //? 현금흐름표
      EarningsPerShare: 6.93, //? 주당수익
      operatingCashFlow: 0, //? 영업현금흐름
      cashFromOperatingActivities: [-263600000, 0, 1660000, 0], // 영업활동현금
      cashFlowFromInvestingActivities: [
        21920000, 0, 0, 29370000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [4210000, 0, 0, 0], // 재무활동현금
      netChangeInCash: [-230000, 0, 0, 4920000], //? 현금순변동
    },
  },
  BRA: {
    incomeStatement: {
      totalSales: [11660000, 11440000, 12940000, 13600000], // 총매출
      totalProfit: [11380000, 11130000, 1790000, 1030000], //? 총 이익
      operatingProfit: [7260000, 23740000, -23650000, -17970000], //? 영업 이익
      netProfit: [6170000, 22010000, -1930000, 0], // 순이익
      grossProfitMargin: 0, //? 매출총이익률
      operatingProfitMargin: -132.09, //? 영업이익률
      netProfitMargin: 22.86, //? 순이익률
      returnOnInvestment: 0, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 0, //? 당좌비율
      currentRatio: 0, //? 유동비율
      longTermDebtRatio: 0, //? 장기부채비율
      totalDebtRatio: 0, //? 총부채비율
      totalAsset: [71520000, 99430000, 93770000, 91460000], // 총자산
      totalDebt: [52430000, 58320000, 545900000, 49170000], // 총부채
      totalCapital: [19090000, 41110000, 39180000, 0], //? 총자본
    },
    cashFlowStatement: {
      cash: [10000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: -13.23, //? 현금흐름표
      EarningsPerShare: 11.34, //? 주당수익
      operatingCashFlow: 0, //? 영업현금흐름
      cashFromOperatingActivities: [-14040000, -1650000, -137600000,0], // 영업활동현금
      cashFlowFromInvestingActivities: [
        3650000, 23240000, 7150000, 0,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [10210000, -5560000, -351000, 0], // 재무활동현금
      netChangeInCash: [-180000, 16030000, -6970000, -3210000], //? 현금순변동
    },
  },
  SPO: {
    incomeStatement: {
      totalSales: [36760000, 36760000, 22210000, 22210000], // 총매출
      totalProfit: [35540000, 35540000, 21080000, 21080000], //? 총 이익
      operatingProfit: [-7030000, -7030000, -15280000,-15280000], //? 영업 이익
      netProfit: [23740000,23740000, 0, 0], // 순이익
      grossProfitMargin: 96.01, //? 매출총이익률
      operatingProfitMargin: -37.82, //? 영업이익률
      netProfitMargin: 21.37, //? 순이익률
      returnOnInvestment: 0, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 0.17, //? 당좌비율
      currentRatio: 0.47, //? 유동비율
      longTermDebtRatio: 879.13, //? 장기부채비율
      totalDebtRatio: 1653.26, //? 총부채비율
      totalAsset: [343490000, 343490000, 0, 0], // 총자산
      totalDebt: [312320000, 312320000, 0, 0], // 총부채
      totalCapital: [31170000, 31170000, 0, 0], //? 총자본
    },
    cashFlowStatement: {
      cash: [10000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: -0.28, //? 현금흐름표
      EarningsPerShare: 0.78, //? 주당수익
      operatingCashFlow: 0, //? 영업현금흐름
      cashFromOperatingActivities: [-947000, -947000, 0, 0], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -7360000, -7360000, -0, -0,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-3020000, -3020000, 0, 0], // 재무활동현금
      netChangeInCash: [3390000, 3390000, 0, 0], //? 현금순변동
    },
  },
  BEN: {
    incomeStatement: {
      totalSales: [0, 0, 42130000, 42130000], // 총매출
      totalProfit: [0, 36880000, 19960000, 19960000], //? 총 이익
      operatingProfit: [-7040000, 0, -26360000, -26360000], //? 영업 이익
      netProfit: [0, -6670000, 8780000, 8780000], // 순이익
      grossProfitMargin: 58.07, //? 매출총이익률
      operatingProfitMargin: -34.12, //? 영업이익률
      netProfitMargin: 2.15, //? 순이익률
      returnOnInvestment: -17.8, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 0.51, //? 당좌비율
      currentRatio: 0.74, //? 유동비율
      longTermDebtRatio: 127.05, //? 장기부채비율
      totalDebtRatio: 149.68, //? 총부채비율
      totalAsset: [494580000, 494580000, 557830000, 557830000], // 총자산
      totalDebt: [0, 398900000, 444620000, 444620000], // 총부채
      totalCapital: [95680000, 95680000, 113220000, 113220000], //? 총자본
    },
    cashFlowStatement: {
      cash: [10000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: -1.98, //? 현금흐름표
      EarningsPerShare: 8.51, //? 주당수익
      operatingCashFlow: -7.28, //? 영업현금흐름
      cashFromOperatingActivities: [-9270000, -9270000, -13470000, -13470000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -4650000, -4650000, 34500000, 34500000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [0, 3440000, -8280000, -8280000], // 재무활동현금
      netChangeInCash: [-10480000, -10480000, 12750000, 12750000], //? 현금순변동
    },
  },
  MUN: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [105930000, 149600000, 143150000, 132400000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: 84.39, //? 매출총이익률
      operatingProfitMargin: -4.41, //? 영업이익률
      netProfitMargin: -4.42, //? 순이익률
      returnOnInvestment: -2.99, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 0.29, //? 당좌비율
      currentRatio: 0.37, //? 유동비율
      longTermDebtRatio: 488.06, //? 장기부채비율
      totalDebtRatio: 598.53, //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [101230000, 109750000, 104510000, 103950000], //? 총자본
    },
    cashFlowStatement: {
      cash: [10000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: 0.59, //? 현금흐름표
      EarningsPerShare: 3.98, //? 주당수익
      operatingCashFlow: 20.74, //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [-96950000, 6770000, 42690000, 2290000], //? 현금순변동
    },
  },

  LYO: {
    incomeStatement: {
      totalSales: [45520000, 45520000, 54050000, 54050000], // 총매출
      totalProfit: [1890000, 1890000, -11040000, -11040000], //? 총 이익
      operatingProfit: [-41490000, -41490000, -35330000, -35330000], //? 영업 이익
      netProfit: [-30100000, -30100000, -18810000, -18810000], // 순이익
      grossProfitMargin: -9.19, //? 매출총이익률
      operatingProfitMargin: -77.16, //? 영업이익률
      netProfitMargin: -49.12, //? 순이익률
      returnOnInvestment: -23.47, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 0.15, //? 당좌비율
      currentRatio: 0.48, //? 유동비율
      longTermDebtRatio: 152.24, //? 장기부채비율
      totalDebtRatio: 502.8, //? 총부채비율
      totalAsset: [686430000, 686430000, 741540000, 741540000], // 총자산
      totalDebt: [582910000, 582970000, 636170000, 636170000], // 총부채
      totalCapital: [103460000, 103460000, 105370000, 105370000], //? 총자본
    },
    cashFlowStatement: {
      cash: [10000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: -0.67, //? 현금흐름표
      EarningsPerShare: 1.17, //? 주당수익
      operatingCashFlow: -8.91, //? 영업현금흐름
      cashFromOperatingActivities: [-25530000, -25530000, -31060000, -31060000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -10850000, -10850000, 36900000, 36900000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [31760000, 31760000, 2460000, 24600000], // 재무활동현금
      netChangeInCash: [8300000, 8300000, -4620000, -4620000], //? 현금순변동
    },
  },
  LAZ: {
    incomeStatement: {
      totalSales: [31930000, 31930000, 41230000, 41230000], // 총매출
      totalProfit: [30290000, 30290000, 27620000, 27620000], //? 총 이익
      operatingProfit: [-9740000, -9740000, -3650000, -3650000], //? 영업 이익
      netProfit: [-10740000, -10740000, -4030000, -4030000], // 순이익
      grossProfitMargin: 79.15, //? 매출총이익률
      operatingProfitMargin: -18.3, //? 영업이익률
      netProfitMargin: -20.19, //? 순이익률
      returnOnInvestment: 0, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 0.11, //? 당좌비율
      currentRatio: 0.37, //? 유동비율
      longTermDebtRatio: 0, //? 장기부채비율
      totalDebtRatio: -159.51, //? 총부채비율
      totalAsset: [288710000, 288710000, 265770000, 265770000 ], // 총자산
      totalDebt: [318710000, 318710000, 303810000, 303810000], // 총부채
      totalCapital: [-30010000, -30010000, -38040000, -38040000], //? 총자본
    },
    cashFlowStatement: {
      cash: [10000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: 0.39, //? 현금흐름표
      EarningsPerShare: 2.16, //? 주당수익
      operatingCashFlow: 4.44, //? 영업현금흐름
      cashFromOperatingActivities: [5760000, 5760000, 7330000, 7330000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -8850000, -8850000, -3510000, -3510000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [1250000, 1250000, -2630000, -2630000], // 재무활동현금
      netChangeInCash: [-5720000, -5720000, 5070000, 5070000,], //? 현금순변동
    },
  },
  JUV: {
    incomeStatement: {
      totalSales: [273690000, 112600000, 112600000, 88390000], // 총매출
      totalProfit: [254010000, 102490000, 102490000, 72370000], //? 총 이익
      operatingProfit: [-20320000, -35290000, -35290000, -68990000], //? 영업 이익
      netProfit: [-29480000, -47100000, -47100000, -75130000], // 순이익
      grossProfitMargin: 89.6, //? 매출총이익률
      operatingProfitMargin: -39.25, //? 영업이익률
      netProfitMargin: -47.3, //? 순이익률
      returnOnInvestment: 0, //? 투자수익률
    },
    balanceSheet: {
      quickRatio: 0.13, //? 당좌비율
      currentRatio: 0.22, //? 유동비율
      longTermDebtRatio: 0, //? 장기부채비율
      totalDebtRatio: -130307, //? 총부채비율
      totalAsset: [942510000, 833970000, 833970000, 734990000], // 총자산
      totalDebt: [807290000, 791870000, 791870000, 766110000], // 총부채
      totalCapital: [135220000, 42100000, 42100000, -31120000], //? 총자본
    },
    cashFlowStatement: {
      cash: [10000, 10000, 10000, 10000], //? 현금
      cashFlowPerShare: -0.04, //? 현금흐름표
      EarningsPerShare: 0.17, //? 주당수익
      operatingCashFlow: -8.67, //? 영업현금흐름
      cashFromOperatingActivities: [-55660000, -6700000, 6700000, -48300000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -117540000, -4980000, -4980000, -15830000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-146110000, 100000, 100000, 24210000], // 재무활동현금
      netChangeInCash: [-27090000, 27300000, 2730000, -39920000], //? 현금순변동
    },
  },
};

// function convertToMillions(financials: ClubFinancials): ClubFinancials {
//   const converted: ClubFinancials = {};

//   for (const company in financials) {
//     converted[company] = {
//       sales: financials[company].sales.map(value => value / 1e6),
//       netProfit: financials[company].netProfit.map(value => value / 1e6),
//       totalAsset: financials[company].totalAsset.map(value => value / 1e6),
//       totalDebt: financials[company].totalDebt.map(value => value / 1e6),
//       CFO: financials[company].CFO.map(value => value / 1e6),
//       CFI: financials[company].CFI.map(value => value / 1e6),
//       CFF: financials[company].CFF.map(value => value / 1e6),
//     };
//   }

//   return converted;
// }

// const clubsFinancials: ClubFinancials = convertToMillions(rawClubFinancials);

export const clubs: Club = {
  Ajax: {
    league: 'Eredivisie',
    ticker: 'EURONEXT:AJAX',
    code: 'AJA',
    financial: financialData['AJA'],
  },
  'Bali United': {
    league: 'Liga 1 Indonesia',
    ticker: 'IDX:BOLA',
    code: 'SAM',
    financial: financialData['SAM'],
  },
  'Borussia Dortmund': {
    league: 'Bundesliga',
    ticker: 'XETR:BVB',
    code: 'DOR',
    financial: financialData['DOR'],
  },
  Celtic: {
    league: 'Scottish Premiership',
    ticker: 'LSE:CCP',
    code: 'CEL',
    financial: financialData['CEL'],
  },
  'FC Porto': {
    league: 'Primeira Liga',
    ticker: 'PORTOUSDT',
    code: 'POR',
    financial: financialData['POR'],
  },
  'SC Braga': {
    league: 'Primeira Liga',
    ticker: 'EURONEXT:SCB',
    code: 'BRA',
    financial: financialData['BRA'],
  },
  'Sporting CP': {
    league: 'Primeira Liga',
    ticker: 'EURONEXT:SCP',
    code: 'SPO',
    financial: financialData['SPO'],
  },
  Benfica: {
    league: 'Primeira Liga',
    ticker: 'EURONEXT:SLBEN',
    code: 'BEN',
    financial: financialData['BEN'],
  },
  'Manchester United': {
    league: 'Premier League',
    ticker: 'NYSE:MANU',
    code: 'MUN',
    financial: financialData['MUN'],
  },
  Lyon: {
    league: 'Ligue 1',
    ticker: 'EURONEXT:OLG',
    code: 'LYO',
    financial: financialData['LYO'],
  },
  Lazio: {
    league: 'Serie A',
    ticker: 'LAZIOUSDT',
    code: 'LAZ',
    financial: financialData['LAZ'],
  },
  Juventus: {
    league: 'Serie A',
    ticker: 'MIL:JUVE',
    code: 'JUV',
    financial: financialData['JUV'],
  },
};

export const leagues: string[] = Object.keys(clubs).map(name => name);

//TODO : Benfica,

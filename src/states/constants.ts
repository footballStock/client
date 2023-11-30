import {Club, ClubFinancials} from './types';

const financialData: ClubFinancials = {
  AJA: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율

      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
    },
  },

  SAM: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
    },
  },
  DOR: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
    },
  },
  CEL: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
    },
  },
  POR: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
    },
  },
  BRA: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
    },
  },
  SPO: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
    },
  },
  BEN: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
    },
  },
  MUN: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
    },
  },

  LYO: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
    },
  },
  LAZ: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
    },
  },
  JUV: {
    incomeStatement: {
      totalSales: [143650000, 167370000, 170050000, 167330000], // 총매출
      totalProfit: [100000, 100000, 100000, 100000], //? 총 이익
      operatingProfit: [100000, 100000, 100000, 100000], //? 영업 이익
      netProfit: [-26620000, 6310000, -5550000, -2920000], // 순이익
      grossProfitMargin: [100000, 100000, 100000, 100000], //? 매출총이익률
      operatingProfitMargin: [100000, 100000, 100000, 100000], //? 영업이익률
      netProfitMargin: [100000, 100000, 100000, 100000], //? 순이익률
      returnOnInvestment: [100000, 100000, 100000, 100000], //? 투자수익률
    },
    balanceSheet: {
      quickRatio: [100000, 100000, 100000, 100000], //? 당좌비율
      currentRatio: [100000, 100000, 100000, 100000], //? 유동비율
      longTermDebtRatio: [100000, 100000, 100000, 100000], //? 장기부채비율
      totalDebtRatio: [100000, 100000, 100000, 100000], //? 총부채비율
      totalAsset: [1421030000, 1426960000, 1374140000, 1317940000], // 총자산
      totalDebt: [1319800000, 1317210000, 1269630000, 1213990000], // 총부채
      totalCapital: [100000, 100000, 100000, 100000], //? 총자본
    },
    cashFlowStatement: {
      cash: [100000, 100000, 100000, 100000], //? 현금
      cashFlowPerShare: [100000, 100000, 100000, 100000], //? 현금흐름표
      EarningsPerShare: [100000, 100000, 100000, 100000], //? 주당수익
      operatingCashFlow: [100000, 100000, 100000, 100000], //? 영업현금흐름
      cashFromOperatingActivities: [-6040000, -61510000, 54060000, 109260000], // 영업활동현금
      cashFlowFromInvestingActivities: [
        -92760000, -30500000, -11440000, -5460000,
      ], // 투자활동현금흐름
      cashFromFinancialActivities: [-878000, 99430000, -153000, -100350000], // 재무활동현금
      netChangeInCash: [100000, 100000, 100000, 100000], //? 현금순변동
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

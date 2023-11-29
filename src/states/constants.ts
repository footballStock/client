import {Club, ClubFinancials, FinancialData} from './types';

const rawClubFinancials: ClubFinancials = {
  MUN: {
    sales: [143650000, 167370000, 170050000, 167330000],
    netProfit: [-26620000, 6310000, -5550000, -2920000],
    totalAsset: [1421030000, 1426960000, 1374140000, 1317940000],
    totalDebt: [1319800000, 1317210000, 1269630000, 1213990000],
    CFO: [-6040000, -61510000, 54060000, 109260000], // Cash Flow from Operations
    CFI: [-92760000, -30500000, -11440000, -5460000], // Cash Flow from Investing
    CFF: [-878000, 99430000, -153000, -100350000], // Cash Flow from Financing
  },

  AJA: {
    sales: [59880000, 0, 38270000, 38270000],
    netProfit: [38020000, 0, -18530000, -18530000],
    totalAsset: [607940000, 0, 548020000, 548020000],
    totalDebt: [334270000, 0, 311410000, 311410000],
    CFO: [8100000, 0, -12240000, -12240000],
    CFI: [4130000, 4130000, -1880000, -1880000],
    CFF: [0, 0, -1070000, -1070000],
  },

  CEL: {
    sales: [38270000, 38270000, 21650000, 21650000],
    netProfit: [14040000, 14040000, 2620000, 2620000],
    totalAsset: [187530000, 187530000, 220290000, 220290000],
    totalDebt: [84590000, 84590000, 112100000, 112100000],
    CFO: [14370000, 14370000, 7380000, 7380000],
    CFI: [482000, 482000, -654000, -654000],
    CFF: [-719000, -719000, -654000, -654000],
  },

  BRA: {
    sales: [11660000, 11440000, 12940000, 13600000],
    netProfit: [6170000, 22010000, -1930000, 0],
    totalAsset: [71520000, 99430000, 93770000, 91460000],
    totalDebt: [52430000, 58320000, 54590000, 49170000],
    CFO: [-14040000, -1650000, -13760000, 0],
    CFI: [3650000, 23240000, 7150000, 0],
    CFF: [10210000, -5560000, -351000, 0],
  },

  DOR: {
    sales: [117510000, 102460000, 105020000, 184570000],
    netProfit: [1230000, -20540000, -10420000, 56400000],
    totalAsset: [522420000, 52370000, 511840000, 639670000],
    totalDebt: [201730000, 218530000, 229130000, 304600000],
    CFO: [-6030000, 25490000, -2940000, 30470000],
    CFI: [-4630000, -18670000, -13830000, -18300000],
    CFF: [4110000, -3960000, 17380000, -5150000],
  },

  BEN: {
    sales: [0, 0, 42130000, 42130000],
    netProfit: [0, -6670000, 8780000, 8780000],
    totalAsset: [494580000, 494580000, 557830000, 557830000],
    totalDebt: [39890000, 39890000, 444620000, 444620000],
    CFO: [-9270000, -9270000, -13470000, -13470000],
    CFI: [-4650000, -4650000, 34500000, 34500000],
    CFF: [0, 3440000, -8280000, -8280000],
  },

  LYO: {
    sales: [45520000, 45520000, 54050000, 54050000],
    netProfit: [-30100000, -30100000, -18810000, -18810000],
    totalAsset: [686430000, 686430000, 741540000, 741540000],
    totalDebt: [582970000, 582970000, 636170000, 636170000],
    CFO: [-25530000, -25530000, -31060000, -31060000],
    CFI: [-10850000, -10850000, 36900000, 36900000],
    CFF: [31760000, 31760000, 2460000, 2460000],
  },

  POR: {
    sales: [26620000, 0, 51290000, 51290000],
    netProfit: [15550000, 0, -4950000, -4950000],
    totalAsset: [418450000, 418450000, 359340000, 359340000],
    totalDebt: [530120000, 530120000, 530120000, 530120000],
    CFO: [-26360000, 0, 1660000, 0],
    CFI: [21920000, 0, 0, 29370000],
    CFF: [4210000, 0, 0, 0],
  },

  SPO: {
    sales: [36760000, 36760000, 22210000, 22210000],
    netProfit: [23740000, 23740000, 0, 0],
    totalAsset: [343490000, 343490000, 0, 0],
    totalDebt: [312320000, 312320000, 0, 0],
    CFO: [-947000, -947000, 0, 0],
    CFI: [7360000, 7360000, 0, 0],
    CFF: [-3020000, -3020000, 0, 0],
  },

  LAZ: {
    sales: [31930000, 31930000, 39780000, 39780000],
    netProfit: [-10740000, -10740000, -4030000, -4030000],
    totalAsset: [288710000, 288710000, 265770000, 265770000],
    totalDebt: [318710000, 318710000, 303810000, 303810000],
    CFO: [5760000, 5760000, 7330000, 7330000],
    CFI: [-8850000, -8850000, -4200000, -4200000],
    CFF: [-2630000, -2630000, 1940000, 1940000],
  },

  JUV: {
    sales: [273690000, 112600000, 112600000, 88390000],
    netProfit: [-29480000, -47100000, -47100000, -75130000],
    totalAsset: [942510000, 833970000, 833970000, 734990000],
    totalDebt: [807290000, 791870000, 791870000, 766110000],
    CFO: [-55660000, 6700000, 6700000, -48300000],
    CFI: [-117540000, -4980000, -4980000, -15830000],
    CFF: [146110000, 1000000, 1000000, 24210000],
  },

  SAM: {
    sales: [94041160000, 83017520000, 57897450000, 98450220000],
    netProfit: [-13572860000, 36652360000, -23033200000, -11544510000],
    totalAsset: [773407970000, 810582030000, 785650230000, 771424440000],
    totalDebt: [59083190000, 55154230000, 54919140000, 53125300000],
    CFO: [7703880000, -7039480000, -3543390000, 29885890000],
    CFI: [-88869500000, 13902800000, -33959500000, -27607140000],
    CFF: [-10725250000, 639720000, -1441200000, -1277560000],
  },
};

function convertToMillions(financials: ClubFinancials): ClubFinancials {
  const converted: ClubFinancials = {};

  for (const company in financials) {
    converted[company] = {
      sales: financials[company].sales.map(value => value / 1e6),
      netProfit: financials[company].netProfit.map(value => value / 1e6),
      totalAsset: financials[company].totalAsset.map(value => value / 1e6),
      totalDebt: financials[company].totalDebt.map(value => value / 1e6),
      CFO: financials[company].CFO.map(value => value / 1e6),
      CFI: financials[company].CFI.map(value => value / 1e6),
      CFF: financials[company].CFF.map(value => value / 1e6),
    };
  }

  return converted;
}

const clubsFinancials: ClubFinancials = convertToMillions(rawClubFinancials);

export const clubs: Club = {
  Ajax: {
    league: 'Eredivisie',
    ticker: 'EURONEXT:AJAX',
    code: 'AJA',
    financial: clubsFinancials['AJA'],
  },
  'Bali United': {
    league: 'Liga 1 Indonesia',
    ticker: 'IDX:BOLA',
    code: 'SAM',
    financial: clubsFinancials['SAM'],
  },
  'Borussia Dortmund': {
    league: 'Bundesliga',
    ticker: 'XETR:BVB',
    code: 'DOR',
    financial: clubsFinancials['DOR'],
  },
  Celtic: {
    league: 'Scottish Premiership',
    ticker: 'LSE:CCP',
    code: 'CEL',
    financial: clubsFinancials['CEL'],
  },
  'FC Porto': {
    league: 'Primeira Liga',
    ticker: 'PORTOUSDT',
    code: 'POR',
    financial: clubsFinancials['POR'],
  },
  'SC Braga': {
    league: 'Primeira Liga',
    ticker: 'EURONEXT:SCB',
    code: 'BRA',
    financial: clubsFinancials['BRA'],
  },
  'Sporting CP': {
    league: 'Primeira Liga',
    ticker: 'EURONEXT:SCP',
    code: 'SPO',
    financial: clubsFinancials['SPO'],
  },
  Benfica: {
    league: 'Primeira Liga',
    ticker: 'EURONEXT:SLBEN',
    code: 'BEN',
    financial: clubsFinancials['BEN'],
  },
  'Manchester United': {
    league: 'Premier League',
    ticker: 'NYSE:MANU',
    code: 'MUN',
    financial: clubsFinancials['MUN'],
  },
  Lyon: {
    league: 'Ligue 1',
    ticker: 'EURONEXT:OLG',
    code: 'LYO',
    financial: clubsFinancials['LYO'],
  },
  Lazio: {
    league: 'Serie A',
    ticker: 'LAZIOUSDT',
    code: 'LAZ',
    financial: clubsFinancials['LAZ'],
  },
  Juventus: {
    league: 'Serie A',
    ticker: 'MIL:JUVE',
    code: 'JUV',
    financial: clubsFinancials['JUV'],
  },
};

export const leagues: string[] = Object.keys(clubs).map(name => name);

//TODO : Benfica,

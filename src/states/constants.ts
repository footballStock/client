import {League} from './types';

export const clubs: League[] = [
  {Eredivisie: ['AFC Ajax NV']},
  {'Liga 1 Indonesia': ['Bali United FC']},
  {Bundesliga: ['Borussia Dortmund']},
  {'Scottish Premiership': ['Celtic FC']},
  {
    'Primeira Liga': [
      'Juventus FC',
      'Sporting Clube de Braga',
      'Sporting Clube de Portugal',
      'Sport Lisboa a Benfica',
    ],
  },
  {'Premier League': ['Manchester United FC']},
  {'Ligue 1': ['Olympique Lyonnais']},
  {'Serie A': ['FC Porto', 'SS Lazio']},
];

export const leagues: string[] = clubs.map(club => Object.keys(club)[0]);

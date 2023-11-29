import {League} from './types';

export const clubs: any = {
  Eredivisie: [{team: 'Ajax', ticker: '', code: 'AJA'}],
  'Liga 1 Indonesia': [{team: 'Bali United', ticker: '', code: 'SAM'}],
  Bundesliga: [{team: 'Borussia Dortmund', ticker: '', code: 'DOR'}],
  'Scottish Premiership': [{team: 'Celtic', ticker: '', code: 'CEL'}],
  'Primeira Liga': [
    {team: 'FC Porto', ticker: '', code: 'POR'},
    {team: 'SC Braga', ticker: '', code: 'BRA'},
    {team: 'Sporting CP', ticker: '', code: 'SPO'},
    {team: 'Benfica', ticker: '', code: 'BEN'},
  ],
  'Premier League': [{team: 'Manchester United', ticker: '', code: 'MUN'}],
  'Ligue 1': [{team: 'Lyon', ticker: '', code: 'LYO'}],
  'Serie A': [
    {team: 'Lazio', ticker: '', code: 'LAZ'},
    {team: 'Juventus', ticker: '', code: 'JUV'},
  ],
};

export const leagues: string[] = Object.keys(clubs).map(name => name);

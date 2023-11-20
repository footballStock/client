export type FootballTeamStockInfo = {
  team_name: string;
  price: string;
  price_unit: string;
  currency: string;
  change: string;
  change_percentage: string;
  market_cap: string;
  volume: number;
};

export type Image = {
  src: string;
  alt: string;
  name: string;
};

export type PriceData = {
  price: string;
  price_unit: string;
};

export type StockOverview = {
  number: string;
  team_name: string;
  team_image: Image;
  Price: PriceData;
  currency: string;
  change: string;
  change_percentage: string;
  market_cap: string;
  volume: number;
};

export type Postdata = {
  id : number;
  author:string;
  authorImage:string;
  title: string;
  content : string;
  image : string;
  created: number;
  time: string;  
  good : number;
  bad : number;
};

export type Accountdata = {
  src: string;
  account_name: string;
};

export type ButtonProps = {
  emoji: string;
  count: number | string;
};

//TODO : uid 부분 서버 작업 후 수정 필요!
export type User = {
  profile: {src: string; alt: string};
  nickname: string;
  uid: number; // token?
};

export type ClubImage = {
  src: string;
  alt: string;
  name: string;
  league: string;
};

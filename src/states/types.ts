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

export type TeamImage = {
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
  team_image: TeamImage;
  Price: PriceData;
  currency: string;
  change: string;
  change_percentage: string;
  market_cap: string;
  volume: number;
};

export type Postdata = {
  src: string;
  alt: string;
  name: string;
  account_img: string;
  account_name: string;
  created_at: number;
  time: string;
  title: string;
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

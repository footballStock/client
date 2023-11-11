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
  time: string;
  title: string;
}

export type Accountdata = {
  src: string;
  account_name: string;
}

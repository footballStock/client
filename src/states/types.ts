export type TeamImage = {
  src: string;
  alt: string;
  name: string;
};

export type PriceData = {
  price: string;
  currency: string;
};

export type TeamStock = {
  Name: string;
  Number: string;
  Price: PriceData;
  '24h': string;
  'Market Cap': string;
  Volume: string;
};

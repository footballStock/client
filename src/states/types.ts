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
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  author_profile: string;
  created_at: string;
  time: string;
  likes_count: number;
  dislikes_count: number;
  like: boolean;
  dislike: boolean;
};

export type Accountdata = {
  src: string;
  account_name: string;
};

export type ButtonProps = {
  emoji: string;
  count: number | string;
};

export type User = {
  profile: {src: string; alt: string};
  nickname: string;
};

export type ClubImage = {
  src: string;
  alt: string;
  name: string;
  league: string;
};

export type AWSConfig = {
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
  region: string;
};

export type Team = {
  team: string;
  ticker: string;
  code: string;
};

export type League = {
  [key: string]: Team[];
};

export type ChatMessage = {
  user: User;
  message: string;
  timeStamp: number;
};

// Club 관련 데이터들
export type SeasonData = {
  team: string;
  season_year: number;
  matches_played: number;
  wins: number;
  draws: number;
  loses: number;
  goals_for: number;
  goals_against: number;
  goal_difference: number;
  points: number;
};

export type PlayerData = {
  id: number;
  photo: string;
  name: string;
  number: number;
  nationality: string;
  position: string;
  detailed_position: string;
  api_id: number;
  team: number;
};

export type PlayerDict = {
  Attacker: PlayerData[];
  Defender: PlayerData[];
  Goalkeeper: PlayerData[];
  Midfielder: PlayerData[];
};

export type NewsData = {
  id: number;
  title: string;
  url: string;
  published_date: string;
  thumbnail: string;
  author: string;
  team: number;
};

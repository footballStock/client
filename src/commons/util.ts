import {clubs} from '../states/constants';
import {Team} from '../states/types';

export const getTimeAgo = (timestamp: string) => {
  const now = new Date();
  const postDate = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  let timeAgo = '';

  const OneMinute = 60;
  const OneHour = 3600;
  const OneDay = 86400;
  const OneMonth = 2592000;
  const OneYear = 31536000;

  if (diffInSeconds < OneMinute) {
    timeAgo = `${diffInSeconds} sec ago`;
  } else if (diffInSeconds < OneHour) {
    timeAgo = `${Math.floor(diffInSeconds / OneMinute)} min ago`;
  } else if (diffInSeconds < OneDay) {
    timeAgo = `${Math.floor(diffInSeconds / OneHour)} hours ago`;
  } else if (diffInSeconds < OneMonth) {
    timeAgo = `${Math.floor(diffInSeconds / OneDay)} days ago`;
  } else if (diffInSeconds < OneYear) {
    timeAgo = `${Math.floor(diffInSeconds / OneMonth)} months ago`;
  } else {
    timeAgo = `${Math.floor(diffInSeconds / OneYear)} years ago`;
  }

  return timeAgo;
};

export const findCode = (name: string) => {
  for (const league of Object.keys(clubs)) {
    const team = clubs[league].filter((item: Team) => item.team == name);
    console.log(team);
    if (team.length > 0) {
      return team[0].code;
    }
  }

  return '';
};

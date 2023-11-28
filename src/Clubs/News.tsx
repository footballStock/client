import React, {useState} from 'react';
import {getTimeAgo} from '../commons/util';
import {NewsData} from '../states/types';

const Item = ({newsData}: {newsData: NewsData}) => {
  return (
    <a href={newsData.url} className="flex flex-col justify-center w-56 h-48">
      <img src={newsData.thumbnail} alt={newsData.title} className="w-52" />
      <div className="font-semibold whitespace-normal overflow-hidden text-ellipsis">
        {newsData.title}
      </div>
      <div>
        <div>{newsData.author}</div>
        <div>{getTimeAgo(newsData.published_date)}</div>
      </div>
    </a>
  );
};

const News = ({newsList}: {newsList: NewsData[]}) => {
  return (
    <div className="flex flex-wrap">
      {newsList.map((item, index) => (
        <Item newsData={item} key={index} />
      ))}
    </div>
  );
};

export default News;

import React, {useState} from 'react';
import {getTimeAgo} from '../commons/util';
import {NewsData} from '../states/types';

const Item = ({newsData}: {newsData: NewsData}) => {
  return (
    <div className="flex-auto">
      <a href={newsData.url}>
        <img src={newsData.thumbnail} alt={newsData.title} className="w-44" />
        {newsData.title}
        {newsData.author}
        {getTimeAgo(newsData.published_date)}
      </a>
    </div>
  );
};

const News = ({newsList}: {newsList: NewsData[]}) => {
  return (
    <div>
      {newsList.map((item, index) => (
        <Item newsData={item} key={index} />
      ))}
    </div>
  );
};

export default News;

import React, {useState} from 'react';
import {getTimeAgo} from '../commons/util';
import {NewsData} from '../states/types';

const Item = ({newsData}: {newsData: NewsData}) => {
  return (
    <a href={newsData.url} className="flex flex-col justify-center w-56 h-52">
      <img
        src={newsData.thumbnail}
        alt={newsData.title}
        className="w-full h-32 object-cover"
      />
      <div className="font-semibold whitespace-normal overflow-clip text-ellipsis line-clamp-2">
        {newsData.title}
      </div>
      <div className="flex flex-row justify-between mt-2">
        <div className="text-xs w-36 whitespace-nowrap overflow-clip text-ellipsis">
          {newsData.author}
        </div>
        <div className="text-xs text-gray-500">
          {getTimeAgo(newsData.published_date)}
        </div>
      </div>
    </a>
  );
};

const News = ({newsList}: {newsList: NewsData[]}) => {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-10">
      {newsList.map((item, index) => (
        <Item newsData={item} key={index} />
      ))}
    </div>
  );
};

export default News;

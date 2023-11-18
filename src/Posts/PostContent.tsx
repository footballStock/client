import React, {useEffect, useState} from 'react';

import Post_image_test3 from '../static/others/Post_image_test3.png';
import Account_img3 from '../static/others/account_img3.png';

import {Postdata, ButtonProps} from '../states/types';

const Button: React.FC<ButtonProps> = ({emoji, count}) => {
  return (
    <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="text-xl">{emoji}</span>
      <span className="ml-2 font-bold">{count}</span>
    </button>
  );
};

// const PostContent: React.FC<{postdatas: Postdata[]}> = ({postdatas}) =>
const PostContent: React.FC = () => {
  const initialPostdata = [
    {
      id : 1,
      author : 'bigfanofyou123',
      authorImage : Account_img3,
      title: '[Manchester City] are Premier League champions for the third st..',
      content : 'adjfladfjdalfjkladfjlka;dfjl;adfjkdlf;laf;kadfj;lajflkajlfkajfdieiafieafjiaefjiaefiaefaeffeaefaefaefeaf',
      image : Post_image_test3,
      created: 1668338400000,
      time: '',
      good : 234,
      bad : 12,
    },
  ];

  const [postdatas, setPostdatas] = useState(initialPostdata);

  useEffect(() => {
    setPostdatas(updatePostTimes(initialPostdata));
  }, []);

  const updatePostTimes = (posts: Postdata[]): Postdata[] => {
    return posts.map(post => ({
      ...post,
      time: getTimeAgo(post.created),
    }));
  };

  const getTimeAgo = (timestamp: number) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const diffInSeconds = Math.floor(
      (now.getTime() - postDate.getTime()) / 1000,
    );

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

  return (
    <section className="w-1/2">
      <div className="flex justify-start ">
        {postdatas.map((postdata, index) => (
          <div key={index}>
            <div className="flex ml-5">
              <img
                src={postdata.authorImage}
                alt="accountimage"
                className="w-[2.5rem] h-[2.5rem]"
              />
              <div className="ml-2">
                <h5 className="text-sm">{postdata.author}</h5>
                <h5 className="text-sm">{postdata.time}</h5>
              </div>
            </div>

            <div className="flex my-5 ml-5">
              <h1 className="font-bold break-words text-1xl md:text-2xl lg:text-4xl">
                {postdata.title}
              </h1>
            </div>

            <div className="flex items-center justify-center my-10">
              <img
                src={postdata.image}
                alt="accountimage"
                className="w-[40rem] h-[40rem]"
              />
            </div>

            <div className="flex space-x-4">
              <Button emoji="👍" count={postdata.good} />
              <Button emoji="👎" count={postdata.bad} />
              <div className="flex justify-end w-full">
                <Button emoji="🚩" count="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostContent;

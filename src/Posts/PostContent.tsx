import React, {useEffect, useState} from 'react';

import Post_image_test3 from '../static/Post_image_test3.png';
import Account_img3 from '../static/account_img3.png';

import {Postdata, ButtonProps} from 'src/states/types';

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
      src: Post_image_test3,
      alt: 'Post image test',
      name: 'Post image test',
      account_img: Account_img3,
      account_name: 'GodGodGod',
      created_at: 1699850927000,
      title:
        '[Premier League] Erling Haaland is named Premier League Player of the Season for 2022/23.',
      time: '',
    },
  ];

  const [postdatas, setPostdatas] = useState(initialPostdata);

  useEffect(() => {
    setPostdatas(updatePostTimes(initialPostdata));
  }, []);

  const updatePostTimes = (posts: Postdata[]): Postdata[] => {
    return posts.map(post => ({
      ...post,
      time: getTimeAgo(post.created_at),
    }));
  };

  const getTimeAgo = (timestamp: number) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const diffInSeconds = Math.floor(
      (now.getTime() - postDate.getTime()) / 1000,
    );

    let timeAgo = '';

    if (diffInSeconds < 60) {
      timeAgo = `${diffInSeconds} sec ago`;
    } else if (diffInSeconds < 3600) {
      timeAgo = `${Math.floor(diffInSeconds / 60)} min ago`;
    } else if (diffInSeconds < 86400) {
      timeAgo = `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else if (diffInSeconds < 2592000) {
      timeAgo = `${Math.floor(diffInSeconds / 86400)} days ago`;
    } else if (diffInSeconds < 31536000) {
      timeAgo = `${Math.floor(diffInSeconds / 2592000)} months ago`;
    } else {
      timeAgo = `${Math.floor(diffInSeconds / 31536000)} years ago`;
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
                src={postdata.account_img}
                alt="accountimage"
                className="w-[2.5rem] h-[2.5rem]"
              />
              <div className="ml-2">
                <h5 className="text-sm">{postdata.account_name}</h5>
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
                src={postdata.src}
                alt="accountimage"
                className="w-[40rem] h-[40rem]"
              />
            </div>

            <div className="flex space-x-4">
              <Button emoji="👍" count={123} />
              <Button emoji="👎" count={21} />
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

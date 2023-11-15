import React from 'react';

import Post_image_test1 from '../static/Post_image_test1.png';
import Post_image_test2 from '../static/Post_image_test2.png';
import Post_image_test3 from '../static/Post_image_test3.png';
import Account_img1 from '../static/account_img1.png';
import Account_img2 from '../static/account_img2.png';
import Account_img3 from '../static/account_img3.png';

import {Postdata} from 'src/states/types';

const TopPosts: React.FC<{}> = ({}) => {
  const postdatas: Postdata[] = [
    {
      src: Post_image_test1,
      alt: 'Post image test',
      name: 'Post image test',
      account_img: Account_img1,
      account_name: 'bigfanofyou123',
      created_at: 1668338400000,
      title:
        '[Manchester City] are Premier League champions for the third st..',
      time: '3 hours. ago',
    },
    {
      src: Post_image_test2,
      alt: 'Post image test',
      name: 'Post image test',
      account_img: Account_img2,
      account_name: 'Hellokidding',
      created_at: 1668338400000,
      title: 'Premier League table after Matchweek 20',
      time: '3 hours. ago',
    },
    {
      src: Post_image_test3,
      alt: 'Post image test',
      name: 'Post image test',
      account_img: Account_img3,
      account_name: 'GodGodGod',
      created_at: 1668338400000,
      title: '[Premier League] Erling Haaland scores the most goals (35) ever.',
      time: '3 hours. ago',
    },
  ];

  return (
    <section>
      <div>
        <section>
          <div className="flex items-center">
            {postdatas.map((postdata, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}>
                <div className="ml-3">
                  <img
                    src={postdata.src}
                    alt="postimage"
                    className="w-[14rem] h-[12rem]"
                  />
                  <div className="flex items-center my-2">
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
                  <h5 className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[10rem]">
                    {postdata.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default TopPosts;

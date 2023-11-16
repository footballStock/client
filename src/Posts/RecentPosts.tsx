import React, {useEffect, useState} from 'react';
import {Postdata} from 'src/states/types';

import Post_image_test1 from '../static/Post_image_test1.png';
import Post_image_test2 from '../static/Post_image_test2.png';
import Account_img1 from '../static/account_img1.png';
import Account_img2 from '../static/account_img2.png';

const RecentPosts: React.FC<{}> = ({}) => {
  const initialPostdata = [
    {
      id : 1,
      author : 'bigfanofyou123',
      author_image : Account_img1,
      title: '[Manchester City] are Premier League champions for the third st..',
      content : 'adjfladfjdalfjkladfjlka;dfjl;adfjkdlf;laf;kadfj;lajflkajlfkajfdieiafieafjiaefjiaefiaefaeffeaefaefaefeaf',
      image : Post_image_test1,
      created_at: 1668338400000,
      time: ''
    },
    {
      id : 2,
      author : 'Hellokidding',
      author_image : Account_img2,
      title: 'Premier League table after Matchweek 20',
      content : 'eochapu usengen WBG eochapu usengen WBG eochapu usengen WBG eochapu usengen WBG eochapu usengen WBG',
      image : Post_image_test2,
      created_at: 1668342500000,
      time: ''
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
    <section>
      <div>
        <div className="my-3">
          <section>
            <div className="flex items-center">
              {postdatas.map((postdata, index) => (
                <div key={index} className="flex ml-5">
                  <div>
                    <div className="flex items-center my-2">
                      <img
                        src={postdata.author_image}
                        alt="accountimage"
                        className="w-[2.5rem] h-[2.5rem]"
                      />
                      <div className="ml-2">
                        <h5 className="text-sm">{postdata.author}</h5>
                        <h5 className="text-sm">{postdata.time}</h5>
                      </div>
                    </div>
                    <h5 className="text-sm overflow-hidden overflow-ellipsis max-w-[13rem]">
                      {postdata.title}
                    </h5>
                  </div>
                  <img
                    src={postdata.image}
                    alt="postimage"
                    className="w-[8rem] h-[9rem]"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;

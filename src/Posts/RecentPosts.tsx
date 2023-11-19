import React, {useEffect, useState} from 'react';
import {Postdata} from 'src/states/types';
import { useNavigate } from 'react-router-dom';

import Post_image_test1 from '../static/others/Post_image_test1.png';
import Post_image_test2 from '../static/others/Post_image_test2.png';
import Account_img1 from '../static/others/account_img1.png';
import Account_img2 from '../static/others/account_img2.png';

const RecentPosts: React.FC<{}> = ({}) => {
  const initialPostdata = [
    {
      id : 1,
      author : 'bigfanofyou123',
      authorImage : Account_img1,
      title: '[Manchester City] are Premier League champions for the third st..',
      content : 'adjfladfjdalfjkladfjlka;dfjl;adfjkdlf;laf;kadfj;lajflkajlfkajfdieiafieafjiaefjiaefiaefaeffeaefaefaefeaf',
      image : Post_image_test1,
      created: 1668338400000,
      time: '',
      good : 45,
      bad : 123,
    },
    {
      id : 2,
      author : 'Hellokidding',
      authorImage : Account_img2,
      title: 'Premier League table after Matchweek 20',
      content : 'eochapu usengen WBG eochapu usengen WBG eochapu usengen WBG eochapu usengen WBG eochapu usengen WBG',
      image : Post_image_test2,
      created: 1668342500000,
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

  const navigate = useNavigate();

  const handlePostClick = (id: number) => {
    navigate(`/posts/${id}`); 
  }

  return (
    <section>
      <div>
        <div className="my-3">
          <section>
            <div className="flex items-center">
              {postdatas.map((postdata, index) => (
                <div key={index} onClick={() => handlePostClick(postdata.id)} className="flex ml-5">
                  <div>
                    <div className="flex items-center my-2">
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

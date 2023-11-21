import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Post_image_test1 from '../static/others/Post_image_test1.png';
import Post_image_test2 from '../static/others/Post_image_test2.png';
import Post_image_test3 from '../static/others/Post_image_test3.png';
import Account_img1 from '../static/others/account_img1.png';
import Account_img2 from '../static/others/account_img2.png';
import Account_img3 from '../static/others/account_img3.png';

import {Postdata, ButtonProps} from '../states/types';
import ReportPost from './ReportPost';
import { getData } from '../commons/api';

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

  const [postdata, setPostdata] = useState<Postdata | null>(null);
  const { id } = useParams<string>();

  const getPostList = async () => {
    
    return getData('/posts/').then(result => {return result});

  };

  // const initialPostdata = [
  //   {
  //     id : 1,
  //     author : 'bigfanofyou123',
  //     authorImage : Account_img1,
  //     title: '[Manchester City] are Premier League champions for the third st..',
  //     content : 'adjfladfjdalfjkladfjlka;dfjl;adfjkdlf;laf;kadfj;lajflkajlfkajfdieiafieafjiaefjiaefiaefaeffeaefaefaefeaf',
  //     image : Post_image_test1,
  //     created: 1668338400000,
  //     time: '',
  //     good : 45,
  //     bad : 123,
  //   },
  //   {
  //     id : 2,
  //     author : 'Hellokidding',
  //     authorImage : Account_img2,
  //     title: 'Premier League table after Matchweek 20',
  //     content : 'eochapu usengen WBG eochapu usengen WBG eochapu usengen WBG eochapu usengen WBG eochapu usengen WBG',
  //     image : Post_image_test2,
  //     created: 1668342500000,
  //     time: '',
  //     good : 234,
  //     bad : 12,
  //   },
  //   {
  //     id : 3,
  //     author : 'GodGodGod',
  //     authorImage : Account_img3,
  //     title: '[Premier League] Erling Haaland scores the most goals (35) ever',
  //     content : 'afiefe efe feWQEROQ Qfeojfoejtotoe eoteotjwpe jepwq n WBG eochapu usengen WBG',
  //     image : Post_image_test3,
  //     created: 1458342500000,
  //     time: '',
  //     good : 634,
  //     bad : 1,
  //   },
  // ];

  useEffect(() => {
    
    getPostList().then(data => {

      const postId = parseInt(id!); 
      const postData = data.find( (post: Postdata) => post.id === postId);

      if (postData) {
        setPostdata({
          ...postData,
          time: getTimeAgo(postData.created)
        });
      } else {
        setPostdata(null); 
      }

    })

    
  }, [id]);

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

  if (!postdata) {
    return <div>포스트를 찾을 수 없습니다.</div>; // 추후 변경
  }

  return (
    <section className="w-1/2">
    <div className="flex justify-start">

      <div>
        <div className="flex ml-5">
          <img src={postdata.authorImage} alt="accountimage" className="w-[2.5rem] h-[2.5rem]" />
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
          <img src={postdata.image} alt="postimage" className="w-[40rem] h-[40rem]" />
        </div>

        <div className="flex my-5 ml-5">
          <h1 className="font-semibold text-lg md:text-xl lg:text-2xl leading-normal">
            {postdata.content}
          </h1>
        </div>

        <div className="flex space-x-4">
          <Button emoji="👍" count={postdata.good} />
          <Button emoji="👎" count={postdata.bad} />
          <div className="flex justify-end w-full">
            <ReportPost></ReportPost>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default PostContent;

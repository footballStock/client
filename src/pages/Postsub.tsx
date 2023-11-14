import React, { useState, useEffect } from 'react';

import Sidebar from '../commons/Sidebar';
import Chat from '../commons/Chat';
import PostPage from '../PostPage/PostPage';

import {TeamImage, Postdata} from '../states/types';

import AJAX from '../static/AJAX.png';
import BOLA from '../static/BOLA.png';
import BVB from '../static/BVB.png';
import CCP from '../static/CCP.png';
import FCP from '../static/FCP.png';
import JUVE from '../static/JUVE.png';
import MANU from '../static/MANU.png';
import OLG from '../static/OLG.png';
import SCB from '../static/SCB.png';
import SCP from '../static/SCP.png';
import SLBEN from '../static/SLBEN.png';
import SSLMI from '../static/SSL.MI.png';
import Post_image_test3 from '../static/Post_image_test3.png';
import Account_img3 from '../static/account_img3.png'

const Main = () => {

  const teamsImage: TeamImage[] = [
    {src: AJAX, alt: 'AFC Ajax NV', name: 'AFC Ajax NV'},
    {src: BOLA, alt: 'Bali United FC', name: 'Bali United FC'},
    {src: BVB, alt: 'Borussia Dortmund', name: 'Borussia Dortmund'},
    {src: CCP, alt: 'Celtic', name: 'Celtic'},
    {src: FCP, alt: 'FC Porto', name: 'FC Porto'},
    {src: JUVE, alt: 'Juventus', name: 'Juventus'},
    {src: MANU, alt: 'Man. United', name: 'Man. United'},
    {src: OLG, alt: 'Olympique Lyonnais', name: 'Olympique Lyonnais'},
    {src: SCB, alt: 'Sporting Clube de Brage', name: 'Sporting Clube de Brage'},
    {
      src: SCP,
      alt: 'Sporting Clube de Portugal',
      name: 'Sporting Clube de Portugal',
    },
    {src: SLBEN, alt: 'Sport Lisboa a Benfica', name: 'Sport Lisboa a Benfica'},
    {src: SSLMI, alt: 'SS Lazio', name: 'SS Lazio'},
  ];

  const initialPostdata = [
    {
      src: Post_image_test3,
      alt: 'Post image test',
      name: 'Post image test',
      account_img: Account_img3,
      account_name: "GodGodGod",
      created_at: 1699850927000,
      title: "[Premier League] Erling Haaland is named Premier League Player of the Season for 2022/23.",
      time: "" 
    }
  ];

  const [postdata, setPostdata] = useState(initialPostdata);

  useEffect(() => {
    setPostdata(updatePostTimes(initialPostdata));
  }, []);

  const updatePostTimes = (posts: Postdata[]) : Postdata[] => {
    return posts.map(post => ({
      ...post,
      time: getTimeAgo(post.created_at)
    }));
  };

  const getTimeAgo = (timestamp: number) => {
    const now = new Date();
    const postDate = new Date(timestamp); 
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

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
    <React.Fragment>
      <main className="flex justify-between px-12 py-6">
        <Sidebar teams={teamsImage} />
        <PostPage postdatas={postdata}/>
        <Chat />
      </main>
    </React.Fragment>
  );
};

export default Main;

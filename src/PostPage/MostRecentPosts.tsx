import React from 'react';
import Post2 from './Post2';
import {Postdata} from 'src/states/types';

import Post_image_test1 from '../static/Post_image_test1.png';
import Post_image_test2 from '../static/Post_image_test2.png';
import Account_img1 from '../static/account_img1.png'
import Account_img2 from '../static/account_img2.png'

const MostRecentPosts: React.FC<{
}> = ({}) => {

  const postdata: Postdata[] = [
    {
      src: Post_image_test1, alt: 'Post image test', name: 'Post image test',
      account_img : Account_img1, account_name : "bigfanofyou123", created_at : 1668338400000,
      title : "[Manchester City] are Premier League champions for the third st..",
      time : "3 hours. ago",
    },
    {
      src: Post_image_test2, alt: 'Post image test', name: 'Post image test',
      account_img : Account_img2, account_name : "Hellokidding", created_at : 1668338400000,
      title : "Premier League table after Matchweek 20",
      time : "3 hours. ago"
    }
  ]


  return (
    <section>
      <div>
        <div className='my-3'>
        <Post2 postdatas = {postdata} />
        </div>
        <div className='my-3'>
        <Post2 postdatas = {postdata} />
        </div>
        <div className='my-3'>
        <Post2 postdatas = {postdata} />
        </div>
        <div className='my-3'>
        <Post2 postdatas = {postdata} />
        </div>
        <div className='my-3'>
        <Post2 postdatas = {postdata} />
        </div>
      </div>
    </section>
  );
};

export default MostRecentPosts;
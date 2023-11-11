import React from 'react';
import POST2 from './POST2';
import {Postdata} from 'src/states/types';

import Post_image_test1 from '../static/Post_image_test1.png';
import Post_image_test2 from '../static/Post_image_test2.png';
import Post_image_test3 from '../static/Post_image_test3.png';
import Account_img1 from '../static/account_img1.png'
import Account_img2 from '../static/account_img2.png'
import Account_img3 from '../static/account_img3.png'

const Most_Recent_Posts: React.FC<{
}> = ({}) => {

  const postdata: Postdata[] = [
    {
      src: Post_image_test1, alt: 'Post image test', name: 'Post image test',
      account_img : Account_img1, account_name : "bigfanofyou123", time : "3 hours. ago",
      title : "[Manchester City] are Premier League champions for the third st.."
    },
    {
      src: Post_image_test2, alt: 'Post image test', name: 'Post image test',
      account_img : Account_img2, account_name : "Hellokidding", time : "7 hours. ago ",
      title : "Premier League table after Matchweek 20"
    }
  ]


  return (
    <section>
      <div>
        <div className='my-3'>
        <POST2 postdatas = {postdata} />
        </div>
        <div className='my-3'>
        <POST2 postdatas = {postdata} />
        </div>
        <div className='my-3'>
        <POST2 postdatas = {postdata} />
        </div>
        <div className='my-3'>
        <POST2 postdatas = {postdata} />
        </div>
        <div className='my-3'>
        <POST2 postdatas = {postdata} />
        </div>
      </div>
    </section>
  );
};

export default Most_Recent_Posts;
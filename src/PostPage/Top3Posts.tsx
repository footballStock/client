import React from 'react';
import POST1 from './Post1';
import {Postdata} from 'src/states/types';

import Post_image_test1 from '../static/Post_image_test1.png';
import Post_image_test2 from '../static/Post_image_test2.png';
import Post_image_test3 from '../static/Post_image_test3.png';
import Account_img1 from '../static/account_img1.png'
import Account_img2 from '../static/account_img2.png'
import Account_img3 from '../static/account_img3.png'


const Top3Posts: React.FC<{
}> = ({}) => {

  const postdata: Postdata[] = [
    {
      src: Post_image_test1, alt: 'Post image test', name: 'Post image test',
      account_img : Account_img1, account_name : "bigfanofyou123", created_at : 1668338400000,
      title : "[Manchester City] are Premier League champions for the third st..", time : "3 hours. ago"
    },
    {
      src: Post_image_test2, alt: 'Post image test', name: 'Post image test',
      account_img : Account_img2, account_name : "Hellokidding", created_at : 1668338400000,
      title : "Premier League table after Matchweek 20", time : "3 hours. ago"
    },
    {
      src: Post_image_test3, alt: 'Post image test', name: 'Post image test',
      account_img : Account_img3, account_name : "GodGodGod", created_at : 1668338400000,
      title : "[Premier League] Erling Haaland scores the most goals (35) ever." , time : "3 hours. ago"
    },
  ]

  return (
    <section>
      <div>
        <POST1 postdatas = {postdata} />
      </div>
    </section>
  );
};

export default Top3Posts;
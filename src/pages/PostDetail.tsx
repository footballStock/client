import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import {Postdata, ButtonProps} from '../states/types';
import ReportPost from '../Posts/ReportPost';
import {getData} from '../commons/api';
import {getTimeAgo} from '../commons/util';

const Button: React.FC<ButtonProps> = ({emoji, count}) => {
  return (
    <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="text-xl">{emoji}</span>
      <span className="ml-2 font-bold">{count}</span>
    </button>
  );
};

// const PostDetail: React.FC<{postdatas: Postdata[]}> = ({postdatas}) =>
const PostDetail: React.FC = () => {
  const [postdata, setPostdata] = useState<Postdata | null>(null);
  const {id} = useParams<string>();
  const getPostList = async () => {
    return getData('/posts/').then(result => {
      return result;
    });
  };

  useEffect(() => {
    getPostList().then(data => {
      const postId = parseInt(id!);
      const postData = data.find((post: Postdata) => post.id === postId);

      if (postData) {
        setPostdata({
          ...postData,
          time: getTimeAgo(postData.created_at),
        });
      } else {
        setPostdata(null);
      }
    });
  }, [id]);

  if (!postdata) {
    return <div>포스트를 찾을 수 없습니다.</div>; // 추후 변경
  }

  return (
    <section className="flex justify-center">
      <div className="flex justify-center">
        <div>
          <div className="flex ml-2 mt-3">
            <img
              src={process.env.REACT_APP_BASEURL + postdata.author_profile}
              alt="accountimage"
              className="detail-profile-image"
            />
            <div className="ml-3">
              <h5 className="detail-author">{postdata.author}</h5>
              <h5 className="detail-time">{postdata.time}</h5>
            </div>
          </div>

          <div className="flex my-2 ml-5 border-b border-b-gray-150">
            <h1 className="detail-title">
              {postdata.title}
            </h1>
          </div>

          <div className="flex items-center justify-center my-4">
            <img
              src={process.env.REACT_APP_BASEURL + postdata.image}
              alt="postimage"
              className="detail-img"
            />
          </div>

          <div className="flex my-5 ml-5">
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl leading-normal">
              {postdata.content}
            </h1>
          </div>

          <div className="flex space-x-4">
            <Button emoji="👍" count={postdata.likes_count} />
            <Button emoji="👎" count={postdata.dislikes_count} />
            <div className="flex justify-end w-full">
              <ReportPost></ReportPost>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;

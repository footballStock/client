import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import {Postdata, ButtonProps} from '../states/types';
import ReportPost from '../Posts/ReportPost';
import {getData} from '../commons/api';
import {getTimeAgo} from '../commons/util';
import {useRecoilValue} from 'recoil';
import {tokenState, userState} from '../states/recoil';
import Swal from 'sweetalert2';

const Button: React.FC<ButtonProps> = ({onClick, emoji, count, pushed}) => {
  return (
    <button
      onClick={onClick}
      className={
        'flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full shadow hover:bg-gray-100' +
        (pushed
          ? 'outline-none ring-2 ring-offset-2 ring-indigo-500 bg-indigo-500 text-white'
          : 'bg-white ')
      }>
      <span className="text-xl">{emoji}</span>
      <span className="ml-2 font-bold">{count}</span>
    </button>
  );
};

// const PostDetail: React.FC<{postdatas: Postdata[]}> = ({postdatas}) =>
const PostDetail: React.FC = () => {
  const [postdata, setPostdata] = useState<Postdata | null>(null);
  const {id} = useParams<string>();
  const token = useRecoilValue(tokenState);
  const user = useRecoilValue(userState);

  const getPostList = async () => {
    if (token) {
      return getData(`/posts/${id}/`, token).then(result => {
        return result;
      });
    } else {
      return getData(`/posts/${id}/`).then(result => {
        return result;
      });
    }
  };

  const alertLogin = () => {
    Swal.fire({
      title: 'Please log in first',
      html: 'You need login to like or dislike this post.',
    });
  };

  const likePost = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASEURL + `/api/posts/${id}/like/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = response.data;
      setPostdata({
        ...data,
        time: getTimeAgo(data.created_at),
      });
    } catch (error) {
      return null;
    }
  };

  const dislikePost = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASEURL + `/api/posts/${id}/dislike/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = response.data;
      setPostdata({
        ...data,
        time: getTimeAgo(data.created_at),
      });
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    getPostList().then(data => {
      if (data) {
        setPostdata({
          ...data,
          time: getTimeAgo(data.created_at),
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

          <div className="flex my-4 ml-5 border-b border-b-gray-150">
            <h1 className="detail-title">{postdata.title}</h1>
          </div>

          <div className="flex items-center justify-center my-3">
            <img
              src={process.env.REACT_APP_BASEURL + postdata.image}
              alt="postimage"
              className="detail-img"
            />
          </div>

          <div className="flex justify-center my-5 ml-5 border-b border-b-gray-150">
            <h1 className="detail-text">{postdata.content}</h1>
          </div>

          <div className="flex space-x-4">
            <Button
              onClick={() => (user ? likePost() : alertLogin())}
              emoji="👍"
              count={postdata.likes_count}
              pushed={postdata.like}
            />
            <Button
              onClick={() => (user ? dislikePost() : alertLogin())}
              emoji="👎"
              count={postdata.dislikes_count}
              pushed={postdata.dislike}
            />
            <div className="flex justify-end w-full">
              <ReportPost />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;

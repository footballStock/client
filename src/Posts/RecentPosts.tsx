import React, {useEffect, useState} from 'react';
import {Postdata} from 'src/states/types';
import {useNavigate} from 'react-router-dom';
import {getData} from '../commons/api';

import Post_image_test1 from '../static/others/Post_image_test1.png';
import Post_image_test2 from '../static/others/Post_image_test2.png';
import Account_img1 from '../static/others/account_img1.png';
import Account_img2 from '../static/others/account_img2.png';
import {getTimeAgo} from '../commons/util';

const RecentPosts: React.FC<{}> = ({}) => {
  const [postdatas, setPostdatas] = useState<Postdata[] | null>();

  const getPostList = async () => {
    return getData('/posts/').then(result => {
      console.log(result);
      return result;
    });
  };

  useEffect(() => {
    getPostList().then((data: Postdata[]) => {
      setPostdatas(updatePostTimes(data));
    });
  }, []);

  const updatePostTimes = (posts: Postdata[]): Postdata[] => {
    return posts.map(post => ({
      ...post,
      time: getTimeAgo(post.created_at),
    }));
  };

  const navigate = useNavigate();

  const handlePostClick = (id: number) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="justify-center">
      <h1 className="my-5 text-sm font-bold justify-start">Recent</h1>
      <div className="my-3 items-center justify-center grid gap-4 grid-cols-2">
        {postdatas?.map((postdata, index) => (
          <div
            key={index}
            onClick={() => handlePostClick(postdata.id)}
            className="flex ml-5">
            <div>
              <div className="flex items-center my-2">
                <img
                  src={process.env.REACT_APP_BASEURL + postdata.author_profile}
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
              src={process.env.REACT_APP_BASEURL + postdata.image}
              alt="postimage"
              className="w-[8rem] h-[9rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;

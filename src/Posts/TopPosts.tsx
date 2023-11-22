import React, {useEffect, useState} from 'react';
import {Postdata} from 'src/states/types';
import {useNavigate} from 'react-router-dom';
import {getData} from '../commons/api';

import Post_image_test1 from '../static/others/Post_image_test1.png';
import Post_image_test2 from '../static/others/Post_image_test2.png';
import Post_image_test3 from '../static/others/Post_image_test3.png';
import Account_img1 from '../static/others/account_img1.png';
import Account_img2 from '../static/others/account_img2.png';
import Account_img3 from '../static/others/account_img3.png';
import {getTimeAgo} from '../commons/util';

const TopPosts: React.FC<{}> = ({}) => {
  const [postdatas, setPostdatas] = useState<Postdata[] | null>();

  const getPostList = async () => {
    return getData('/posts/top3/').then(result => result);
  };

  useEffect(() => {
    getPostList().then((data: Postdata[]) => {
      const updatedData = updatePostTimes(data);
      setPostdatas(updatedData);
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
      <div className="flex items-center justify-start mb-4">
        <h1 className="text-xl font-bold">Top3 Posts</h1>
      </div>
      <div className="flex items-center justify-center">
        {postdatas?.map((postdata, index) => (
          <div
            key={index}
            onClick={() => handlePostClick(postdata.id)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '16px',
            }}>
            <div className="ml-3">
              <img
                src={process.env.REACT_APP_BASEURL + postdata.image}
                alt="postimage"
                className="w-[14rem] h-[12rem]"
              />
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
              <h5 className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[10rem]">
                {postdata.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPosts;

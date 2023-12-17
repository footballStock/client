import React, {useEffect, useState} from 'react';
import {Postdata} from 'src/states/types';
import {useNavigate} from 'react-router-dom';
import {getData} from '../utils/api';
import {getTimeAgo} from '../utils/util';
import CreatePost from './CreatePost';

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
      <div id="top3-posts">
        <h1 id="top3-post-name">Top3 Posts</h1>
        <CreatePost />
      </div>

      <div id="top3-contents">
        {postdatas?.map((postdata, index) => (
          <div
            key={index}
            onClick={() => handlePostClick(postdata.id)}
            className="top3-button">
            <div className="">
              <img
                src={process.env.REACT_APP_BASEURL + postdata.image}
                alt="postimage"
                className="top3-image"
              />

              <div className="top3-account">
                <img
                  src={process.env.REACT_APP_BASEURL + postdata.author_profile}
                  alt="accountimage"
                  className="top3-profile-image"
                />

                <div className="ml-2">
                  <h5 className="top3-author">{postdata.author}</h5>
                  <h5 className="top3-time">{postdata.time}</h5>
                </div>
              </div>

              <h5 className="top3-content">{postdata.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPosts;

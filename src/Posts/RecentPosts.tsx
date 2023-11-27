import React, {useEffect, useState} from 'react';
import {Postdata} from 'src/states/types';
import {useNavigate} from 'react-router-dom';
import {getData} from '../commons/api';
import {getTimeAgo} from '../commons/util';

const POSTS_PER_PAGE = 10;

const RecentPosts: React.FC<{}> = ({}) => {
  const [postdatas, setPostdatas] = useState<Postdata[] | null>();
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

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

  const currentPosts = postdatas
    ? postdatas.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
      )
    : [];

    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    // 페이지 네비게이션 컨트롤을 렌더링하는 함수
    const renderPageNumbers = () => {
      const totalPages = Math.ceil((postdatas?.length || 0) / POSTS_PER_PAGE);
      return Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => handlePageChange(i + 1)}
          disabled={currentPage === i + 1}
          className={`mx-1 px-3 py-1 border rounded-md focus:outline-none focus:border-custom-green mb-4 mt-2 transition duration-100
                      ${currentPage === i + 1
                        ? 'bg-custom-green text-white'
                        : 'bg-white hover:bg-gray-300 hover:text-white'}`}
        >
          {i + 1}
        </button>
      ));
    };


  return (
    <div className="justify-center mt-10">
      <h1 id='recent-name'>Recent</h1>
      <div id="recent-grid">
        {currentPosts.map((postdata, index) => (
          <div
            key={index}
            onClick={() => handlePostClick(postdata.id)}
            className="recent-button">
            
            <div>
              <div className="flex items-center my-2">
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
              <div className="ml-2 w-[17rem]">
                <h5 className="recent-title">
                  {postdata.title}
                </h5>
                <p className="recent-content line-clamp-3">
                  {postdata.content}
                </p>
              </div>
            </div>

            <img
              src={process.env.REACT_APP_BASEURL + postdata.image}
              alt="postimage"
              className="recent-image"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default RecentPosts;

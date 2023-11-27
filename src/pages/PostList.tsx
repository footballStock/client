import React from 'react';

import TopPosts from '../Posts/TopPosts';
import MostRecentPosts from '../Posts/RecentPosts';

const PostList = () => {
  return (
    <div id='post'>
      <TopPosts />
      <MostRecentPosts />
    </div>
  );
};

export default PostList;

import React from 'react';

import TopPosts from './TopPosts';
import MostRecentPosts from './RecentPosts';
import CreatePost from './CreatePost';

import {Accountdata} from '../states/types';

const PostList: React.FC<{myaccounts: Accountdata[]}> = ({myaccounts}) => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Top3 Posts</h1>
        <CreatePost myaccounts={myaccounts}></CreatePost>
      </div>
      <TopPosts></TopPosts>
      <h1 className="my-5 text-sm font-bold">Recent</h1>
      <MostRecentPosts></MostRecentPosts>
    </section>
  );
};

export default PostList;

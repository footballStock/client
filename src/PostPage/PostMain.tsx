import React from 'react';
import Top3_Posts from './Top3Posts';
import Most_Recent_Posts from './MostRecentPosts';
import POSTING from './POSTING';
import {Accountdata} from 'src/states/types';

const PostMain: React.FC<{myaccounts: Accountdata[]}> = ({myaccounts}) => {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Top3 Posts</h1>
        <POSTING myaccounts={myaccounts}></POSTING>
      </div>
      <Top3_Posts></Top3_Posts>
      <h1 className="text-sm font-bold my-5">Recent</h1>
      <Most_Recent_Posts></Most_Recent_Posts>
    </section>
  );
};

export default PostMain;

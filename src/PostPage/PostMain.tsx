import React from 'react';
import Top3Posts from './Top3Posts';
import MostRecentPosts from './MostRecentPosts'
import Posting from './Posting'
import {Accountdata} from 'src/states/types';

const PostMain: React.FC<{myaccounts: Accountdata[]}> = ({myaccounts}) => {
  return (
    <section>
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Top3 Posts</h1>
            <Posting myaccounts={myaccounts} ></Posting>
        </div>
        <Top3Posts></Top3Posts>
        <h1 className="text-sm font-bold my-5">Recent</h1>
        <MostRecentPosts></MostRecentPosts>
    </section>
  );
};

export default PostMain;

import React from 'react';
import Top3_Posts from './Top3_Posts';
import Most_Recent_Posts from './Most_Recent_Posts'

const PostMain: React.FC<{
}> = ({}) => {
  return (
    <section>
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Top3 Posts</h1>
            <button className="w-24 h-8 ml-100 bg-white text-green-500 font-bold rounded-xl border-green-500 border-2">
            POST
            </button>
        </div>
        <Top3_Posts></Top3_Posts>
        <h1 className="text-sm font-bold my-5">Recent</h1>
        <Most_Recent_Posts></Most_Recent_Posts>
    </section>
  );
};

export default PostMain;

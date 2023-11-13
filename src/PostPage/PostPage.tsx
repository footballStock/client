import React from 'react';
import {Postdata,ButtonProps} from 'src/states/types';


const Button: React.FC<ButtonProps> = ({ emoji, count }) => {
    return (
      <button
        className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="text-xl">{emoji}</span>
        <span className="ml-2 font-bold">{count}</span>
      </button>
    );
};

const PostPAGE: React.FC<{postdatas: Postdata[];}> = ({postdatas}) => {
    return (
    <section className="w-1/2">
        <div className=" flex justify-start"> 
            {postdatas.map((postdata, index) => (
            <div key={index} >
                
                <div className="flex ml-5">
                    <img src={postdata.account_img} alt="accountimage" className="w-[2.5rem] h-[2.5rem]" />
                    <div className="ml-2"> 
                        <h5 className="text-sm">{postdata.account_name}</h5>
                        <h5 className="text-sm">{postdata.time}</h5>
                    </div>
                </div>

                <div className = "flex ml-5 my-5" >
                    <h1 className="text-1xl md:text-2xl lg:text-4xl font-bold break-words">
                        {postdata.title}
                    </h1>
                </div>
                
                <div className='my-10 flex items-center justify-center'>
                <img src={postdata.src} alt="accountimage" className="w-[40rem] h-[40rem]" />
                </div>

                <div className="flex space-x-4">
                    <Button emoji="👍" count={123}  />
                    <Button emoji="👎" count={21}  />
                    <div className='flex justify-end w-full'>
                    <Button emoji="🚩" count="" />
                    </div>
                </div>

            </div>
            ))}
        </div>
    </section>
  );
};

export default PostPAGE;

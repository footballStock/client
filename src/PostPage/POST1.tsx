import React from 'react';
import {Postdata} from 'src/states/types';

const Post1: React.FC<{ postdatas: Postdata[] }> = ({postdatas}) => {
  return (
    <section>
      <div className="flex items-center">
        {postdatas.map((postdata, index) => (
         <div key={index} style={{ display: 'flex', justifyContent: 'space-between' ,gap:'16px'}}>
            <div className="ml-3"> 
                <img src={postdata.src} alt="postimage" className="w-[14rem] h-[12rem]" />
                <div className="my-2 flex items-center"> 
                    <img src={postdata.account_img} alt="accountimage" className="w-[2.5rem] h-[2.5rem]" />
                    <div className="ml-2"> 
                        <h5 className="text-sm">{postdata.account_name}</h5>
                        <h5 className="text-sm">{postdata.time}</h5>
                    </div>
                </div>
                <h5 className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[10rem]">{postdata.title}</h5>
            </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Post1;
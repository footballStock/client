import React from 'react';
import {Postdata} from 'src/states/types';

const POST2: React.FC<{ postdatas: Postdata[] }> = ({postdatas}) => {
  return (
    <section>
        <div className="flex items-center">
            {postdatas.map((postdata, index) => (
            <div key={index} className="flex ml-5">
                <div> 
                    <div className="my-2 flex items-center"> 
                        <img src={postdata.account_img} alt="accountimage" className="w-[2.5rem] h-[2.5rem]" />
                        <div className="ml-2"> 
                            <h5 className="text-sm">{postdata.account_name}</h5>
                            <h5 className="text-sm">{postdata.time}</h5>
                        </div>
                    </div>
                <h5 className="text-sm overflow-hidden overflow-ellipsis max-w-[13rem]">{postdata.title}</h5>
                </div>
                <img src={postdata.src} alt="postimage" className="w-[8rem] h-[9rem]" />
            </div>
            ))}
        </div>
    </section>
  );
};

export default POST2;
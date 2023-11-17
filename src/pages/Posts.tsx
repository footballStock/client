import React from 'react';

import PostList from '../Posts/PostList';
import {Accountdata} from '../states/types';
import MyAccount from '../static/others/myaccount.png';

const Posts = () => {
  const myAccount: Accountdata[] = [
    {
      src: MyAccount,
      account_name: 'upa1414',
    },
  ];

  return (
    <React.Fragment>
      <PostList myaccounts={myAccount} />
    </React.Fragment>
  );
};

export default Posts;

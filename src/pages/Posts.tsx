import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PostList from '../Posts/PostList';
import PostContent from '../Posts/PostContent'; // PostContent 컴포넌트 임포트
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
    <Routes>
      <Route index element={<PostList myaccounts={myAccount} />} />
      <Route path=":id" element={<PostContent />} />
    </Routes>
  );
};

export default Posts;

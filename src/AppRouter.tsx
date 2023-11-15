import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import Posts from './pages/Posts';
import Stocks from './pages/Stocks';
import Clubs from './pages/Clubs';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/clubs" element={<Clubs />} />
    </Routes>
  );
};

export default AppRouter;

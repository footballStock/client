import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import Posts from './pages/Posts';
import Clubs from './pages/Clubs';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/:clubId" element={<DetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;

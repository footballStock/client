import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {ReactQueryDevtools} from 'react-query/devtools';

import Main from './pages/Main';
import Clubs from './pages/Clubs';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';

import Layout from './Layout';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/posts/*" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/clubs/*" element={<Clubs />} />
          <Route path="/clubs/:clubId" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </React.Fragment>
  );
};

export default App;

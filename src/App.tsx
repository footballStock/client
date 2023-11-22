import React from 'react';
import Main from './pages/Main';

import {Routes, Route} from 'react-router-dom';
import Clubs from './pages/Clubs';
import Layout from './Layout';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/posts/*" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/clubs" element={<Clubs />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;

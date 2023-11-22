import React, {useEffect} from 'react';
import Main from './pages/Main';

import {Routes, Route} from 'react-router-dom';
import Clubs from './pages/Clubs';
import Layout from './Layout';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {awsState, bucketState, teamsImageState} from './states/recoil';
import {Image} from './states/types';

const App = (): JSX.Element => {
  const aws = useRecoilValue(awsState);
  const bucket = useRecoilValue(bucketState);
  const setTeamsImage = useSetRecoilState(teamsImageState);

  useEffect(() => {
    const folderName = 'teams/';
    aws.downloadFiles(bucket, folderName).then(images => {
      const teamsImage: Image[] = images.map((image, i) => {
        //* change the file name to team name(ex., teams/AJAX.png -> AJAX)
        const name = image.Key.replace('.png', '').replace(folderName, '');
        return {src: image.Image, alt: name, name: name};
      });

      setTeamsImage(teamsImage);
    });
  }, []);

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

import React, {useEffect} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {Outlet} from 'react-router-dom';

import Header from './commons/Header';
import Sidebar from './commons/Sidebar';
import Chat from './commons/Chat/Chat';
import {Image} from './states/types';
import {awsState, bucketState, teamsImageState} from './states/recoil';

const Layout = (): JSX.Element => {
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
      <Header />
      <main className="flex justify-between px-12 py-6">
        <Sidebar />
        <Outlet />
        <Chat />
      </main>
    </React.Fragment>
  );
};

export default Layout;
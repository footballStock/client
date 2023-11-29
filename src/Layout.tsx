import React, {useEffect} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {Outlet} from 'react-router-dom';

import Header from './commons/Header';
import Sidebar from './commons/Sidebar';
import Chat from './commons/Chat';
import {Image} from './states/types';
import {
  awsState,
  bucketState,
  teamsImageState,
  tokenState,
} from './states/recoil';

const Layout = (): JSX.Element => {
  const aws = useRecoilValue(awsState);
  const bucket = useRecoilValue(bucketState);
  const setToken = useSetRecoilState(tokenState);
  const setTeamsImage = useSetRecoilState(teamsImageState);

  useEffect(() => {
    const folderName = 'clubs/';
    aws.downloadFiles(bucket, folderName).then(images => {
      const teamsImage: Image[] = images.map((image, i) => {
        //* change the file name to team name(ex., teams/AJAX.png -> AJAX)
        const name = image.Key.replace('.png', '').replace(folderName, '');
        return {src: image.Image, alt: name, name: name};
      });

      setTeamsImage(teamsImage);
    });
  }, []);

  useEffect(() => {
    //* if page is refreshed, set the token using localStorage token that is stored at login
    const storageToken = localStorage.getItem('token') || '';
    setToken(storageToken);
  }, []);

  return (
    <div className="w-screen h-24">
      <Header />
      <main className="flex py-4">
        <div className="flex-none">
          <Sidebar />
        </div>
        <div className="grow mt-24">
          <Outlet />
        </div>
        <div className="flex-none">
          <Chat />
        </div>
      </main>
    </div>
  );
};

export default Layout;

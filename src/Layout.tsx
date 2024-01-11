import React, {useEffect} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {Outlet} from 'react-router-dom';

import Header from './commons/Header/Header';
import Sidebar from './commons/Sidebar';
import Chat from './commons/Chat';
import {Image} from './states/types';
import {
  awsState,
  bucketState,
  teamsImageState,
  tokenState,
  userState,
} from './states/recoil';
import {getData} from './utils/api';

1;

const Layout = (): JSX.Element => {
  const aws = useRecoilValue(awsState);
  const bucket = useRecoilValue(bucketState);
  const token = useRecoilValue(tokenState);
  const setUser = useSetRecoilState(userState);
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
    if (token) {
      const fetchData = async () => {
        try {
          const data = await getData('/login/', token);
          setUser(data);
        } catch (error: any) {
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
          }
        }
      };

      fetchData();
    }
  }, [token]);

  return (
    <div className="w-screen h-24">
      <Header />
      <main className="flex py-4">
        <aside className="flex-none">
          <Sidebar />
        </aside>
        <section className="mt-24 grow">
          <Outlet />
        </section>
        <aside className="flex-none">
          <Chat />
        </aside>
      </main>
    </div>
  );
};

export default Layout;

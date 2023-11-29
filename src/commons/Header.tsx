import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {Link} from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';

import {getData} from './api';
import Profile from './Profile';

import Trade2Goal from '../static/others/Trade2Goal.png';
import NavButton from '../components/NavButton';
import {tokenState, userState} from '../states/recoil';

const Header = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(token);

      // getData 함수 호출을 await 키워드와 함께 사용합니다.
      // 이를 위해 내부 함수를 async로 선언합니다.
      const fetchData = async () => {
        try {
          const data = await getData('/login/', token);
          setUser(data);
        } catch (error: any) {
          // 에러 메시지가 'Request failed with status code 401'인 경우에만 1을 출력합니다.
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
          }
        }
      };

      fetchData();
    }
  }, [token]);

  return (
    <header
      id="header"
      className="w-full h-24 border border-solid border-custom-gray">
      <nav id="navbar" className="flex justify-between px-12 py-6">
        <div className="flex items-center">
          <Link to="/">
            <div id="logo">
              <img src={Trade2Goal} alt="Trade2Goal" className="h-10" />
            </div>
          </Link>

          <div
            id="menu"
            className="flex items-center justify-between ml-4 text-lg">
            <NavButton>
              <Link to="/">Stocks</Link>
            </NavButton>
            <NavButton>
              <Link to="/posts">Posts</Link>
            </NavButton>
            <NavButton>
              <Link to="/clubs">Clubs</Link>
            </NavButton>
          </div>
        </div>
        <div id="header-buttons" className="flex items-center mr-4 space-x-4">
          {user ? (
            <Profile
              src={process.env.REACT_APP_BASEURL + user.profile.src}
              alt={user.profile.alt}
              nickname={user.nickname}
            />
          ) : (
            <>
              <Login />
              <SignUp />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

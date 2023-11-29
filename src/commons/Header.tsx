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

      getData('/login/', token).then(data => {
        setUser(data);
      });
    }
  }, []);

  return (
    <header id="header">
      <nav id="navbar">
        <div className="flex items-center">
          
          <Link to="/">
            <div id="logo">
              <img src={Trade2Goal} alt="Trade2Goal" className="h-10" />
            </div>
          </Link>

          <div
            id="menu">
            <NavButton>
              <Link to="/" >Stocks</Link>
            </NavButton>
            <NavButton>
              <Link to="/posts">Posts</Link>
            </NavButton>
            <NavButton>
              <Link to="/clubs">Clubs</Link>
            </NavButton>
          </div>

        </div>

        <div id="header-buttons">
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

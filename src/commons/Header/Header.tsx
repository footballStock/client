import React from 'react';
import {useRecoilValue} from 'recoil';
import {Link} from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import UserInfo from './UserInfo';

import {userState} from '../../states/recoil';

const Logo = () => {
  return (
    <div id="logo">
      <Link to="/">
        <img
          src="https://github.com/footballStock/client/assets/99087502/e29747ec-88f4-4f93-853d-e9b693219c08"
          alt="Trade2Goal"
          className="h-10"
        />
      </Link>
    </div>
  );
};

const NavMenuItem = ({to, children}: {to: any; children: any}) => {
  return (
    <button className="nav-main">
      <Link to={to}>{children}</Link>
    </button>
  );
};

const Header = () => {
  const user = useRecoilValue(userState);

  return (
    <header id="header">
      <nav id="navbar">
        <div className="flex items-center">
          <Logo />
          <div id="menu">
            <NavMenuItem to="/">Stocks</NavMenuItem>
            <NavMenuItem to="/posts">Posts</NavMenuItem>
            <NavMenuItem to="/clubs">Clubs</NavMenuItem>
          </div>
        </div>

        <div id="header-buttons">
          {user ? (
            <UserInfo
              component={
                <Profile
                  src={process.env.REACT_APP_BASEURL + user.profile.src}
                  alt={user.profile.alt}
                  nickname={user.nickname}
                />
              }
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

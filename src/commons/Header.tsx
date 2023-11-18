import React from 'react';
import {useRecoilValue} from 'recoil';
import {Link} from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';

import Trade2Goal from '../static/others/Trade2Goal.png';
import NavButton from '../components/NavButton';
import {userState} from '../states/recoil';

const Header = () => {
  const user = useRecoilValue(userState);

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
          {user.nickname ? (
            user.nickname
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

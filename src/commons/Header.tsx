import React from 'react';
import Trade2Goal from '../static/Trade2Goal.png';
import NavButton from '../components/NavButton';
import Login from './Login';
import SignUp from './SignUp';

const Header = () => {
  return (
    <header
      id="header"
      className="w-full h-24 border border-solid border-custom-gray">
      <nav id="navbar" className="flex justify-between px-12 py-6">
        <div className="flex items-center">
          <div id="logo">
            <img src={Trade2Goal} alt="Trade2Goal" className="h-10" />
          </div>

          <div
            id="menu"
            className="flex items-center justify-between ml-4 text-lg">
            <NavButton>Stocks</NavButton>
            <NavButton>Posts</NavButton>
            <NavButton>Clubs</NavButton>
          </div>
        </div>
        <div id="header-buttons" className="flex items-center mr-4 space-x-4">
          <Login />
          <SignUp />
        </div>
      </nav>
    </header>
  );
};

export default Header;

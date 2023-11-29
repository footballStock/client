import React from 'react';

const NavButton = (props: React.PropsWithChildren) => {
  return (
    <button className="nav-main">
      {props.children}
    </button>
  );
};

export default NavButton;

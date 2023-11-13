import React from 'react';

const NavButton = (props: React.PropsWithChildren) => {
  return (
    <button className="text-black text-xl font-normal font-['Itim'] ml-10">
      {props.children}
    </button>
  );
};

export default NavButton;

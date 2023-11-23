import React from 'react';

const Profile: React.FC<{src: string; alt: string; nickname: string}> = ({
  src,
  alt,
  nickname,
}): JSX.Element => {
  return (
    <div className="flex flex-row items-center">
      <img src={src} alt={alt} className="w-8" />
      <span className="px-2">{nickname}</span>
    </div>
  );
};

export default Profile;

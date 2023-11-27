import React from 'react';

const Profile: React.FC<{src: string; alt: string; nickname: string}> = ({
  src,
  alt,
  nickname,
}): JSX.Element => {
  return (
    <div className="flex flex-row items-center">
      <img src={src} alt={alt} className="w-8 rounded-full" />
      <span className="profile">{nickname}</span>
    </div>
  );
};

export default Profile;

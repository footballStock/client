import React, {useState} from 'react';
import ReactModal from 'react-modal';
import {useRecoilState, useRecoilValue} from 'recoil';
import axios from 'axios';
import Swal from 'sweetalert2';

import CloseIcon from '@mui/icons-material/Close';

import {tokenState, userState} from '../../states/recoil';

type UserInfoProps = {
  component: React.ReactElement;
};

const UserInfo: React.FC<UserInfoProps> = ({component}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [nickname, setNickname] = useState('');

  const token = useRecoilValue(tokenState);
  const [user, setUser] = useRecoilState(userState);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'unset';
    setImage(null);
    setNickname('');
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImage(file);
    }
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const alertPost = () => {
    if (!user) {
      Swal.fire({
        title: 'Nickname already used',
        html: 'Please input another nickname.',
      });
      return;
    }
  };

  const uploadPost = async () => {
    const formData = new FormData();

    if (image) {
      formData.append('image', image);
    }
    if (nickname) {
      formData.append('nickname', nickname);
    }
    try {
      await axios
        .patch(process.env.REACT_APP_BASEURL + '/api/user/', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => {
          setUser(res.data);
        });
      closeModal();
    } catch (error) {
      return null;
    }
  };

  return (
    <div>
      {user && (
        <>
          <button onClick={openModal}>{component}</button>
          {modalIsOpen && (
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              shouldCloseOnOverlayClick={false}
              ariaHideApp={false}
              onAfterOpen={() => (document.body.style.overflow = 'hidden')}
              contentLabel="Create Post"
              className="p-2.5 border border-solid border-gray-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold">User Info</h2>
                <button onClick={closeModal}>
                  <CloseIcon />
                </button>
              </div>
              <div className="flex justify-center p-4">
                <label htmlFor="image-upload" className="cursor-pointer">
                  <div className="relative w-16 h-16">
                    {image ? (
                      <img
                        src={URL.createObjectURL(image)}
                        alt="Uploaded"
                        className="object-cover w-full h-full rounded-full" // object-cover 사용
                      />
                    ) : (
                      <img
                        src={process.env.REACT_APP_BASEURL + user.profile.src}
                        alt={user.profile.alt}
                        className="object-cover w-full h-full rounded-full" // object-cover 사용
                      />
                    )}
                    <div className="absolute flex items-center justify-center w-5 h-5 border-2 border-white rounded-full -bottom-1 -right-1 bg-sky-500 round">
                      <img
                        className="flex object-contain w-2 h-2"
                        src={
                          'https://private-user-images.githubusercontent.com/64965613/286912867-49c6e8f9-3a7b-490a-a4d5-ea79b2448c97.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEzNDM2MDMsIm5iZiI6MTcwMTM0MzMwMywicGF0aCI6Ii82NDk2NTYxMy8yODY5MTI4NjctNDljNmU4ZjktM2E3Yi00OTBhLWE0ZDUtZWE3OWIyNDQ4Yzk3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTMwVDExMjE0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ2OTRkOTUxYzdjZjMzNWQwMTQ3NDlhYWI3NDljOTQ5NjhlNTc1ODJjZmE0ZTQ1YmFkNzYxNjQwNWIwZDczN2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.qcZb463pFJiwqYMC3G2hqhhGkTTipK9gSoabY-5pifA'
                        }
                        alt={'+'}
                      />
                    </div>
                  </div>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              <input
                type="nickname"
                name="nickname"
                placeholder="nickname"
                value={nickname}
                onChange={e => handleNicknameChange(e)}
                className="p-2 border-b-2 border-custom-gray"
              />
              <div className="flex justify-end p-4">
                <button
                  onClick={() => {
                    uploadPost();
                  }}
                  disabled={!image && !nickname.trim()}
                  className={`w-24 h-8 font-bold rounded-xl ${
                    !image && !nickname.trim()
                      ? 'bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed' // 비활성화 상태 스타일
                      : 'bg-white border-2 border-green-500 text-green-500' // 활성화 상태 스타일
                  }`}>
                  CHANGE
                </button>
              </div>
            </ReactModal>
          )}
        </>
      )}
    </div>
  );
};

export default UserInfo;

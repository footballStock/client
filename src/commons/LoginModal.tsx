import React, {useState} from 'react';
import ReactModal from 'react-modal';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import {auth} from './fire-base';

import GoogleLogin from '../static/GoogleLogin.png';

import CloseIcon from '@mui/icons-material/Close';
import {FirebaseError} from 'firebase/app';
import axios from 'axios';

const LoginModal: React.FC<{
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
}> = ({modalIsOpen, setModalIsOpen, name}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [current, setCurrent] = useState(name);

  const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setModalIsOpen(false);
  };

  const handleEmailAndPasswordSignUp = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if ((error as FirebaseError).code === 'auth/email-already-in-use') {
        alert('This email is already in use.');
      }
    }

    setEmail('');
    setPassword('');
  };

  const handlEmailAndPasswordLogin = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      //TODO
      // // UID 서버에 요청 보내기
      // // 서버에서 결과로 받은 Token 전역 state로 저장
      // const response = await axios({
      //   method: 'post',
      //   url: 'baseurl' + 'endpoint',
      //   data: {
      //     uid: result.user.uid,
      //   }
      // })
      // // setToken(response.data.uid)

      setModalIsOpen(false);
    } catch (error) {
      if ((error as FirebaseError).code === 'auth/invalid-login-credentials') {
        alert('Unregistered Email');
      }
    }

    setEmail('');
    setPassword('');
  };

  const handleSocialLogin = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const {name} = event.currentTarget;
    try {
      let provider = null;
      if (name === 'google') {
        provider = new GoogleAuthProvider();
      }

      if (provider) {
        await signInWithPopup(auth, provider);
        //TODO: CORS 이슈
        setModalIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCurrent = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = event.currentTarget;
    setCurrent(name);
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      contentLabel="loginModal"
      className="w-96 h-96 p-2.5 border border-solid border-gray-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white flex flex-col">
      <div className="flex justify-center py-4 text-xl font-bold leading-normal text-black font-inter">
        <button
          className={`px-8 ${
            current === 'Login'
              ? 'underline underline-offset-8'
              : 'text-custom-white-gray'
          }`}
          name={'Login'}
          onClick={handleChangeCurrent}>
          Log in
        </button>
        <button
          className={`px-8 ${
            current === 'Sign Up'
              ? 'underline underline-offset-8'
              : 'text-custom-white-gray'
          }`}
          name={'Sign Up'}
          onClick={handleChangeCurrent}>
          Sign Up
        </button>
        <button onClick={closeModal} data-testid="Close">
          <CloseIcon className="float-right " />
        </button>
      </div>
      <form
        onSubmit={
          current === 'Sign Up'
            ? handleEmailAndPasswordSignUp
            : handlEmailAndPasswordLogin
        }
        className="flex flex-col items-center justify-center px-4 py-2 w-88">
        <div className="w-full h-12">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full h-full p-2 border-b-2 border-custom-gray"
          />
        </div>
        <div className="w-full h-12 my-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full h-full p-2 border-b-2 border-custom-gray"
          />
        </div>
        <input
          type="submit"
          value={current}
          className="w-full p-2 font-bold leading-normal text-white bg-red-500 rounded font-inter"
          data-testid="login-btn"
        />
      </form>
      <div>
        <button
          name="google"
          data-testid="google-btn"
          onClick={handleSocialLogin}
          className="flex flex-col items-center justify-center px-4 py-2 w-88">
          <img
            src={GoogleLogin}
            alt="google log in"
            className="object-cover w-full"
          />
        </button>
      </div>
    </ReactModal>
  );
};

export default LoginModal;

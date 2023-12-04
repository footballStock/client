import React, {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import ReactModal from 'react-modal';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {FirebaseError} from 'firebase/app';

import {auth} from './fire-base';

import GoogleLogin from '../static/others/GoogleLogin.png';
import {tokenState} from '../states/recoil';

import CloseIcon from '@mui/icons-material/Close';

const LoginModal: React.FC<{
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
}> = ({modalIsOpen, setModalIsOpen, name}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [current, setCurrent] = useState(name);

  const setToken = useSetRecoilState(tokenState);

  const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    document.body.style.overflow = 'unset';
    setModalIsOpen(false);
  };

  const afterOpenModal = () => {
    document.body.style.overflow = 'hidden';
  };

  const onRequestCloseModal = () => {
    document.body.style.overflow = 'unset';
    setModalIsOpen(false);
  };

  const handleEmailAndPasswordSignUp = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!email.includes('@') || !email.includes('.')) {
      alert('Invalid e-mail format');
      setEmail('');
      setPassword('');
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        'The password must be at least 8 characters long and contain at least one number and one special character.',
      );
      setEmail('');
      setPassword('');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async () => {
          await signInWithEmailAndPassword(auth, email, password).then(
            response => {
              const token = (response as any)._tokenResponse.idToken;
              localStorage.setItem('token', token);
              setToken(token);
            },
          );

          onRequestCloseModal();
        },
      );
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
      await signInWithEmailAndPassword(auth, email, password).then(response => {
        const token = (response as any)._tokenResponse.idToken;
        localStorage.setItem('token', token);
        setToken(token);
      });

      onRequestCloseModal();
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
        await signInWithPopup(auth, provider).then(response => {
          const token = (response as any)._tokenResponse.idToken;
          localStorage.setItem('token', token);
          setToken(token);
        });
        //TODO: CORS 이슈
        onRequestCloseModal();
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
      onAfterOpen={afterOpenModal}
      onRequestClose={onRequestCloseModal}
      shouldCloseOnOverlayClick={false}
      ariaHideApp={false}
      contentLabel="loginModal"
      className="w-96 h-96 p-2.5 border border-solid border-gray-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white flex flex-col">
      <div className="flex justify-center py-4 text-xl font-bold leading-normal text-black font-inter">
        <button
          className={`px-8 ${
            current === 'Login'
              ? 'underline underline-offset-8'
              : 'text-custom-white-gray hover:text-gray-500'
          }`}
          name={'Login'}
          onClick={handleChangeCurrent}>
          Log in
        </button>
        <button
          className={`px-8 ${
            current === 'Sign Up'
              ? 'underline underline-offset-8'
              : 'text-custom-white-gray hover:text-gray-500'
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
          className="w-full p-2 font-bold leading-normal text-white bg-red-500 rounded cursor-pointer font-inter hover:bg-red-600 active:ring-2 active:ring-red-700"
          data-testid="login-btn"
        />
      </form>
      <div>
        <button
          name="google"
          data-testid="google-btn"
          onClick={handleSocialLogin}
          className="flex flex-col items-center justify-center px-4 py-2 w-88 hover:brightness-90">
          <img
            src="https://github.com/footballStock/client/assets/99087502/070ce079-5b56-4447-a75b-7bd6cb7e6910"
            alt="google log in"
            className="object-cover w-full"
          />
        </button>
      </div>
    </ReactModal>
  );
};

export default LoginModal;

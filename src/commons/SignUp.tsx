import React, {useState} from 'react';
import ReactModal from 'react-modal';

import {createUserWithEmailAndPassword} from 'firebase/auth';
import {FirebaseError} from 'firebase/app';

import CloseIcon from '@mui/icons-material/Close';

import {auth} from './fire-base';

const SignUp = (props: React.PropsWithChildren) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setModalIsOpen(false);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setModalIsOpen(false);
    } catch (error) {
      if ((error as FirebaseError).code === 'auth/email-already-in-use') {
        alert('This email is already in use.');
      }
    }

    setEmail('');
    setPassword('');
  };

  return (
    <button
      className="w-24 h-8 ml-10 border bg-custom-green rounded-xl border-custom-green"
      onClick={openModal}>
      <div className="text-base font-bold text-center text-white">Sign up</div>
      {modalIsOpen && (
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="SignUpModal"
          className=" w-96 h-96 p-2.5 border border-solid border-gray-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white flex flex-col">
          <div className="flex justify-center py-4 text-xl font-bold leading-normal text-black font-inter">
            <div className="px-8 text-custom-white-gray">Log in</div>
            <div className="px-8 underline underline-offset-8">Sign Up</div>
            <button onClick={closeModal} data-testid="Close">
              <CloseIcon className="float-right " />
            </button>
          </div>
          <form
            onSubmit={onSubmit}
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
              value="Sign Up"
              className="w-full p-2 font-bold leading-normal text-white bg-red-500 rounded font-inter"
              data-testid="signup-btn"
            />
          </form>
        </ReactModal>
      )}
    </button>
  );
};

export default SignUp;

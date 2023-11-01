import {createUserWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import {auth} from './fire-base';
import ReactModal from 'react-modal';

const SignUp = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    //TODO
    closeModal();
  };

  return (
    <React.Fragment>
      <button
        className="w-24 h-8 text-white bg-green-500 border-2 border-green-500 border-solid shadow-lg rounded-xl"
        onClick={openModal}>
        Sign Up
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="SignUpModal"
        className="w-96 h-96 p-2.5 border border-solid border-gray-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2>Sign Up</h2>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input type="submit" value="sign up" data-testid="signup-btn" />
        </form>
        <div>
          <button onClick={closeModal}>close</button>
        </div>
      </ReactModal>
    </React.Fragment>
  );
};

export default SignUp;

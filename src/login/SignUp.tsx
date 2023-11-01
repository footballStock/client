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
      <button onClick={openModal}>Sign Up</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="SignUpModal">
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

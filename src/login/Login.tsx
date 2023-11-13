import React, {useState} from 'react';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {auth} from './fire-base';
import ReactModal from 'react-modal';

const Login = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      //TODO
      closeModal();
    } catch (error) {
      //TODO
    }
  };

  const handleSocialSignIn = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const {name} = event.currentTarget;

    try {
      let provider = null;
      if (name === 'google') {
        provider = new GoogleAuthProvider();
      } else if (name === 'facebook') {
        provider = new FacebookAuthProvider();
      }

      if (provider) {
        await signInWithPopup(auth, provider);
        //TODO
        closeModal();
      }
    } catch (error) {
      //TODO
    }
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>login</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="loginModal">
        <h2>login</h2>
        <form onSubmit={handleSignIn}>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          {/* <button type="submit" data-testid="login-btn">
            login
          </button> */}
          <input type="submit" value="login" data-testid="login-btn" />
        </form>
        <div>
          <button
            name="google"
            data-testid="google-btn"
            onClick={handleSocialSignIn}>
            Sign in with Google
          </button>
        </div>
        <div>
          <button
            name="facebook"
            data-testid="facebook-btn"
            onClick={handleSocialSignIn}>
            Sign in with Facebook
          </button>
        </div>
        <div>
          <button onClick={closeModal}>close</button>
        </div>
      </ReactModal>
    </React.Fragment>
  );
};

export default Login;

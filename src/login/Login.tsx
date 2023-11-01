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
  const [modalIsOpen, setModalIsOpen] = useState(true);
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
      <button
        className="w-24 h-8 text-green-500 bg-white border-2 border-green-500 border-solid shadow-lg rounded-xl"
        onClick={openModal}>
        login
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="loginModal"
        className="w-96 h-96 p-2.5 border border-solid border-gray-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2>login</h2>
        <form onSubmit={handleSignIn}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
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

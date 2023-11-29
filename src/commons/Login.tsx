import React, {useState} from 'react';

import LoginModal from './LoginModal';

const Login = (props: React.PropsWithChildren) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <button
      id = 'button-login'
      className = "button-basic"
      onClick={openModal}>
      <div id= "button-login-text" className="button-basic-text">
        Log in
      </div>
      {modalIsOpen && (
        <LoginModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          name={'Login'}
        />
      )}
    </button>
  );
};

export default Login;

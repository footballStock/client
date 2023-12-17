import React, {useState} from 'react';

import LoginModal from './LoginModal';

const SignUp = (props: React.PropsWithChildren) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <button
      id = "button-signup"
      className="button-basic"
      onClick={openModal}>
      <div id = "button-singup-text" className="button-basic-text">Sign up</div>
      {modalIsOpen && (
        <LoginModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          name={'Sign Up'}
        />
      )}
    </button>
  );
};

export default SignUp;

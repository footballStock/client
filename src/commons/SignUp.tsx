import React, {useState} from 'react';

import LoginModal from './LoginModal';

const SignUp = (props: React.PropsWithChildren) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <button
      className="w-24 h-8 ml-10 border bg-custom-green rounded-xl border-custom-green"
      onClick={openModal}>
      <div className="text-base font-bold text-center text-white">Sign up</div>
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

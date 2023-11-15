import React, {useState} from 'react';

import LoginModal from './LoginModal';

const Login = (props: React.PropsWithChildren) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <button
      className="w-24 h-8 ml-10 bg-white border rounded-xl border-custom-green"
      onClick={openModal}>
      <div className="text-base font-bold text-center text-custom-green">
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

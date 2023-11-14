import React, {useState} from 'react';
import ReactModal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import {Accountdata} from 'src/states/types';

const Posting: React.FC<{myaccounts: Accountdata[]}> = ({myaccounts}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setModalIsOpen(false);
  };

  return (

    <button 
        className="w-24 h-8 ml-100 bg-white text-green-500 font-bold rounded-xl border-green-500 border-2"
        onClick={openModal}>    
        <div className="text-base font-bold text-center text-custom-green-500">
            POST
        </div>
        {modalIsOpen && (
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="PostingModal"
          className="w-2/5 h-2/3 p-2.5 border border-solid border-gray-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white flex flex-col">
          <div className="flex justify-center py-4 text-xl font-bold leading-normal text-black font-inter">
            
            <div className="flex items-center p-4 w-full">
              <button onClick={closeModal} className="mr-auto">
                <CloseIcon />
              </button>
              <button onClick={closeModal} className="ml-auto font-bold">
                Drafts
              </button>
            </div>
          </div>
            
            {myaccounts.map((account, index) => (
            <div key={index} className="flex items-center space-x-3 p-4">
              <img src={account.src} alt="account_image" className="h-10 w-10 rounded-full" />
              <span className="font-bold">{account.account_name}</span>
            </div>
            ))}

            <textarea
              className="w-full p-2 text-base border-none"
              placeholder="Something Happened? Write anything you want!"
              rows={10}
            ></textarea>
            
            <hr className="my-4" />
            <div className="flex justify-end p-4">
              
              <button className="w-24 h-8 ml-100 bg-white text-green-500 font-bold rounded-xl border-green-500 border-2">
                <div className="text-base font-bold text-center text-custom-green-500">
                  POST
                </div>
              </button>
            </div>
          
        </ReactModal>
      )}
    </button>
  );
};

export default Posting;
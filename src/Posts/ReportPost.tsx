import React, {useState} from 'react';
import ReactModal from 'react-modal';

import CloseIcon from '@mui/icons-material/Close';

const ReportPost = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setModalIsOpen(false);
  };

  return (
    
    <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={openModal}>
      <span className="text-xl">{"🚩"}</span>
      <div className="text-base font-bold text-center text-custom-green-500">
      </div>
      {modalIsOpen && (
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Report Post Modal"
          className="w-full max-w-lg p-5 border border-solid border-gray-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white flex flex-col overflow-hidden"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50">
        
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="text-2xl font-bold">Report Post</h2>
            <button onClick={closeModal}>
              <CloseIcon />
            </button>
          </div>
        
          <form className="flex flex-col pt-4 space-y-4">
            <label htmlFor="reportReason" className="font-semibold">Reason for Reporting:</label>
            <select id="reportReason" className="p-2 border border-gray-300 rounded outline-none focus:border-indigo-500">
              <option value="spam">Spam</option>
              <option value="abuse">Abuse</option>
              <option value="inappropriate">Inappropriate Content</option>
              {/* Other reasons */}
            </select>
        
            <label htmlFor="additionalDetails" className="font-semibold">Additional Details:</label>
            <textarea id="additionalDetails" className="p-2 border border-gray-300 rounded outline-none focus:border-indigo-500" rows={3}></textarea>
        
            <button type="submit" className="self-end mt-2 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Submit Report
            </button>
          </form>

        </ReactModal>
      )}
    </button>
  );
};

export default ReportPost;

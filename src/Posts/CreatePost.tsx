import React, {useState} from 'react';
import ReactModal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import {Accountdata} from '../states/types';
import ImageUpload from '../static/others/ImageUpload.png';

const CreatePost: React.FC<{myaccounts: Accountdata[]}> = ({myaccounts}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [imageName, setImageName] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setModalIsOpen(false);
    setImage(null); 
    setImageName("");
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImage(file);
      setImageName(file.name); 
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const isPostButtonDisabled = !image || !text.trim();

  return (
    <>
      <button onClick={openModal} className="w-24 h-8 font-bold text-green-500 bg-white border-2 border-green-500 ml-100 rounded-xl">
        POST
      </button>
      {modalIsOpen && (
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Create Post"
          className="w-2/5 h-2/3 p-2.5 border border-solid border-gray-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Create Post</h2>
            <button onClick={closeModal}>
              <CloseIcon />
            </button>
          </div>

          {/* Image upload */}
          <div className="p-4 flex justify-center">
            <label htmlFor="image-upload" className="cursor-pointer">
              <div className="w-1/3 h-36" style={{ minWidth: '200px' }}> {/* 최소 너비 설정 */}
                {image ? (
                  <img 
                    src={URL.createObjectURL(image)} 
                    alt="Uploaded" 
                    className="w-full h-full object-contain" // object-contain 사용
                  />
                ) : (
                  <img 
                    src={ImageUpload} 
                    alt="Upload placeholder" 
                    className="w-full h-full object-contain" // object-contain 사용
                  />
                )}
              </div>
            </label>
            <input
              id="image-upload"
              type="file"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          {imageName && (
            <p className="mt-2 text-sm text-gray-600 text-center">{imageName}</p> 
          )}

          {/* Post text */}
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="What's on your mind?"
            className="p-4 border-b w-full"
            rows={16}
          ></textarea>

          {/* Post button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => {/* POST the content */}} // 추후 변경
              disabled={isPostButtonDisabled}
              className={`w-24 h-8 font-bold rounded-xl ${
                isPostButtonDisabled
                  ? "bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed" // 비활성화 상태 스타일
                  : "bg-white border-2 border-green-500 text-green-500" // 활성화 상태 스타일
              }`}
            >
              POST
            </button>
          </div>
        </ReactModal>
      )}
    </>
  );
};

export default CreatePost;

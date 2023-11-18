import React, {useState} from 'react';
import ReactModal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import {Accountdata} from '../states/types';
import ImageUpload from '../static/others/ImageUpload.png';

const CreatePost: React.FC<{myaccounts: Accountdata[]}> = ({myaccounts}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [imageName, setImageName] = useState(""); // 업로드된 이미지 이름을 저장합니다

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setModalIsOpen(false);
    setImage(null); // 모달을 닫을 때 이미지 상태도 초기화합니다.
    setImageName(""); // 이미지 이름도 초기화합니다.
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImage(file);
      setImageName(file.name); // 업로드된 이미지의 이름을 설정합니다.
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
          {/* 모달 헤더 */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Create Post</h2>
            <button onClick={closeModal}>
              <CloseIcon />
            </button>
          </div>

          {/* 이미지 업로드 섹션 */}
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
            <p className="mt-2 text-sm text-gray-600 text-center">{imageName}</p> // 이미지 이름을 다음 줄에 표시
          )}

          {/* 포스트 텍스트 입력 필드 */}
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="What's on your mind?"
            className="p-4 border-b w-full"
            rows={16}
          ></textarea>

          {/* 포스트 버튼 */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => {/* POST the content */}}
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

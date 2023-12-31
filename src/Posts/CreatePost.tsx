import React, {useState, useEffect} from 'react';
import ReactModal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import ImageUpload from '../static/others/ImageUpload.png';
import {useRecoilState, useRecoilValue} from 'recoil';
import {tokenState, userState} from '../states/recoil';
import axios from 'axios';
import Swal from 'sweetalert2';

const CreatePost: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [imageName, setImageName] = useState('');

  const token = useRecoilValue(tokenState);
  const user = useRecoilValue(userState);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'unset';
    setImage(null);
    setImageName('');
    setText('');
    setTitle('');
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

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const alertPost = () => {
    if (!user) {
      Swal.fire({
        title: 'Please log in first',
        html: 'You need login to create a new post.',
      });
      return;
    }
  };

  const uploadPost = async (
    title: string,
    content: string,
    image: File | null,
  ) => {
    const formData = new FormData();
    formData.append('title', title);
    if (image) {
      formData.append('image', image);
    }
    formData.append('content', content);
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASEURL + '/api/posts/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      closeModal();
      return response.data; // 서버로부터 응답 데이터 반환
    } catch (error) {
      return null;
    }
  };

  const isPostButtonDisabled = !image || !text.trim() || !title.trim();

  return (
    <div>
      {user ? (
        <>
          <button onClick={openModal} id="button-post" className="button-basic">
            <div id="button-post-text" className="button-basic-text">
              POST
            </div>
          </button>
          {modalIsOpen && (
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              shouldCloseOnOverlayClick={false}
              ariaHideApp={false}
              onAfterOpen={() => (document.body.style.overflow = 'hidden')}
              contentLabel="Create Post"
              className="w-2/5 h-2/3 p-2.5 border border-solid border-gray-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold">Create Post</h2>
                <button onClick={closeModal}>
                  <CloseIcon />
                </button>
              </div>

              {/* Title input */}
              <div className="p-4">
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Enter your title here"
                  className="w-full p-2 border-b"
                />
              </div>

              {/* Image upload */}
              <div className="flex justify-center p-4">
                <label htmlFor="image-upload" className="cursor-pointer">
                  <div className="w-1/3 h-36" style={{minWidth: '200px'}}>
                    {' '}
                    {/* 최소 너비 설정 */}
                    {image ? (
                      <img
                        src={URL.createObjectURL(image)}
                        alt="Uploaded"
                        className="object-contain w-full h-full" // object-contain 사용
                      />
                    ) : (
                      <img
                        src="https://github.com/footballStock/client/assets/99087502/22d7ef79-baa8-48d5-8634-813532faefa3"
                        alt="Upload placeholder"
                        className="object-contain w-full h-full" // object-contain 사용
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
                <p className="mt-2 text-sm text-center text-gray-600">
                  {imageName}
                </p>
              )}

              {/* Post text */}
              <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="What's on your mind?"
                className="w-full p-4 border-b"
                rows={16}></textarea>

              {/* Post button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => {
                    uploadPost(title, text, image);
                  }} // 추후 변경
                  disabled={isPostButtonDisabled}
                  className={`w-24 h-8 font-bold rounded-xl ${
                    isPostButtonDisabled
                      ? 'bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed' // 비활성화 상태 스타일
                      : 'bg-white border-2 border-green-500 text-green-500' // 활성화 상태 스타일
                  }`}>
                  POST
                </button>
              </div>
            </ReactModal>
          )}
        </>
      ) : (
        <>
          {/* 로그인 상태가 아닐 때 */}
          <button
            id="button-post-disabled"
            className="button-basic"
            onClick={() => alertPost()}>
            POST
          </button>
        </>
      )}
    </div>
  );
};

export default CreatePost;

import AuthContext from '../context/AuthContext';
import Navbar from './Navbar';
import { useContext, useRef, useState } from 'react';

const DragAndDropImageUploader = () => {
  const [uploadedImg, setUploadedImg] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setUploadedImg(event.dataTransfer.files)
  };

  const {user} = useContext(AuthContext)

  if (!user) return <h1>Not logged in</h1>
  
  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <div className="absolute top-0">
        <Navbar />
      </div>

      <form action="">
        <div className="bg-secondary text-white text-center py-2 text-xl">
          <p>Upload image for face recognition</p>
        </div>
        <div className="bg-tertiary flex flex-col items-center w-fit p-5 drop-shadow-2xl">
          {!uploadedImg && (
            <div
              className="bg-red-500
              flex flex-col items-center justify-center 
              w-[360px] p-5 h-[360px]
              border-2 border-dashed border-secondary rounded-md"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <p>Drag and drop here</p>
              <p>or</p>
              <input type="file"
                multiple
                onChange={(event) => setUploadedImg(event.target.files)}
                hidden
                ref={inputRef} />
              <button
                className="px-8 py-2 bg-secondary shadow-sm text-white tracking-wide 
                rounded-full w-fit 
                hover:opacity-90
                transition-opacity ease-out"
                onClick={() => inputRef.current.click()}
              >
                Upload a file
              </button>
            </div>
          )}
          <button
            type="submit"
            className="mt-5 px-8 py-2 bg-secondary shadow-sm text-white tracking-wide 
            rounded-full w-fit 
            hover:opacity-90
            transition-colors ease-out"
          >
            Recognize
          </button>
        </div>
      </form>
    </div>
  );
};

export default DragAndDropImageUploader;

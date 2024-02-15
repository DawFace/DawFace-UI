import Navbar from './Navbar';
import { useRef, useState } from 'react';

const DragAndDropImageUploader = () => {
  const [uploadedImg, setUploadedImg] = useState(null);
  const [imgName, setImgName] = useState('No picture');
  const [dragText, setDragText] = useState('Drag and drop here');

  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragText('Release to Upload');
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragText('Drag and drop here');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files;
    setImgName(file[0].name);
    if (file) {
      setUploadedImg(URL.createObjectURL(file[0]));
    }
  };

  const handleUpload = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const handleUploadedFile = (event) => {
    const file = event.target.files;
    setImgName(file[0].name);
    if (file) {
      setUploadedImg(URL.createObjectURL(file[0]));
    }
  };

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
          {uploadedImg ? (
            <div
              className="
            flex flex-col items-center justify-center 
            w-[360px] h-[360px]
            border-2 border-dashed border-sky-500 rounded-md"
            >
              <img className="object-cover w-full h-full" src={uploadedImg} alt={imgName} />
            </div>
          ) : (
            <div
              className="bg-red-500
              flex flex-col items-center justify-center 
              w-[360px] p-5 h-[360px]
              border-2 border-dashed border-secondary rounded-md"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <p>{dragText}</p>
              <p>or</p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleUploadedFile}
                hidden
                ref={inputRef}
              />
              <button
                className="px-8 py-2 bg-secondary shadow-sm text-white tracking-wide 
                rounded-full w-fit 
                hover:opacity-90
                transition-opacity ease-out"
                onClick={handleUpload}
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

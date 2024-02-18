import { drawLandmarks, getDescriptor } from '../utils/face-api/utils.js';
import { useRef, useState } from 'react';

const DragAndDropImageUploader = () => {
  const [uploadedImg, setUploadedImg] = useState(null);
  const [imgName, setImgName] = useState('No picture');
  const [dragText, setDragText] = useState('Drag and drop here');
  const [dragDropBackground, setDragDropBackground] = useState(null);

  const inputRef = useRef();
  const pictureRef = useRef();
  const canvasRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragText('Release to Upload');
    setDragDropBackground('bg-white/5')
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragText('Drag and drop here');
    setDragDropBackground(null)
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

  const launchRecognition = async (event) => {
    event.preventDefault();
    if (uploadedImg) {
      const picture = pictureRef.current;
      const canvas = canvasRef.current;

      const descriptor = await getDescriptor(picture);

      drawLandmarks(picture, canvas, descriptor);
    }
  };

  return (
    <div className="bg-zinc-900 flex justify-center items-center w-full h-dvh">
      <div className="absolute z-10 h-[250px] w-[250px] bg-primary rounded-full animate-circular"></div>
      <form action="" className="z-20">
        <div className="bg-zinc-900/50 shadow-xl shadow-zinc-950 backdrop-blur-md rounded-2xl p-5">
          <p className="text-white border-inherit font-bold text-center text-xl">
            Image to recognize
          </p>
          <div className="flex flex-col items-center w-fit">
            {uploadedImg ? (
              <div
                className="
                flex flex-col items-center justify-center 
                w-[360px] h-[360px] mt-4
                border-2 border-dashed border-white rounded-md relative"
              >
                <img
                  className="object-cover w-full h-full absolute"
                  src={uploadedImg}
                  alt={imgName}
                  ref={pictureRef}
                />
                <canvas className="absolute" ref={canvasRef} />
              </div>
            ) : (
              <div
                className={`
              flex flex-col items-center justify-center 
              w-[360px] h-[360px] mt-4
              border-2 border-dashed border-white rounded-md
              text-white font-semibold ${dragDropBackground}`}
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
                  className="font-bold py-2 px-6 w-content rounded-lg mt-1 bg-primary
                  hover:shadow-md hover:shadow-zinc-950 text-white
                  hover:-translate-y-px hover:-translate-x-px"
                  onClick={handleUpload}
                >
                  Upload a file
                </button>
              </div>
            )}

            <button
              className="font-bold py-2 px-6 w-content rounded-lg mt-5 bg-primary
              hover:shadow-md hover:shadow-zinc-950 text-white
              hover:-translate-y-px hover:-translate-x-px"
              onClick={launchRecognition}
            >
              SCAN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DragAndDropImageUploader;

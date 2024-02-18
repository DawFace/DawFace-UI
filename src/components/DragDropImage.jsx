import {
  createFaceMatcher,
  drawLandmarks,
  getDescriptor,
} from '../utils/face-api/utils.js';
import { useRef, useState } from 'react';

const DragAndDropImageUploader = ({ references, users }) => {
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

      const maxDescriptorDistance = 0.5;
      const faceMatcher = createFaceMatcher(references, maxDescriptorDistance);

      const occurrence = faceMatcher.findBestMatch(descriptor.descriptor);

      const match =
        occurrence.label !== 'unknown'
          ? users.filter(
              (user) => `${user.name} ${user.firstName}` === occurrence.label
            )[0]
          : null;

      console.log(match);
    }
  };

  return (
    <div className="bg-zinc-900 flex justify-center items-center w-full h-dvh">
      <div className="absolute z-10 sm:h-[120px] sm:w-[120px] md:h-[200px] md:w-[200px] bg-primary rounded-full animate-circular"></div>
      <form action="" className="z-20">
        <div className="bg-zinc-900/50 md:shadow-xl md:shadow-zinc-950 backdrop-blur-md md:rounded-2xl md:p-5">
          <p className="text-white border-inherit font-bold text-center text-xl">
            Image to recognize
          </p>
          <div className="flex flex-col items-center w-fit">
            {uploadedImg ? (
              <div
                className="
                flex flex-col items-center justify-center 
                w-[360px] h-[360px] mt-4 sm:w-[300px] sm:h-[300px]
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
              md:w-[360px] md:h-[360px] sm:w-[300px] sm:h-[300px] mt-4
              border-2 border-dashed border-white rounded-md
              text-white font-semibold ${dragDropBackground}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <p className="sm:hidden md:block">{dragText}</p>
                <p className="sm:hidden md:block">or</p>
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

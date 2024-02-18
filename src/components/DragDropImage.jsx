import {
  createFaceMatcher,
  drawLandmarks,
  getDescriptor,
} from '../utils/face-api/utils.js';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

const DragAndDropImageUploader = ({ references, users }) => {
  const [uploadedImg, setUploadedImg] = useState(null);
  const [imgName, setImgName] = useState('No picture');
  const [dragText, setDragText] = useState('Drag and drop here');
  const [dragDropBackground, setDragDropBackground] = useState(null);
  const [match, setMatch] = useState(null);

  const inputRef = useRef();
  const pictureRef = useRef();
  const canvasRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragText('Release to Upload');
    setDragDropBackground('bg-white/5');
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragText('Drag and drop here');
    setDragDropBackground(null);
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

      const maxDescriptorDistance = 0.6;
      const faceMatcher = createFaceMatcher(references, maxDescriptorDistance);

      const occurrence = faceMatcher.findBestMatch(descriptor.descriptor);

      const match =
        occurrence.label !== 'unknown'
          ? users.filter(
              (user) => `${user.name} ${user.firstName}` === occurrence.label
            )[0]
          : null;

      setMatch(match);
    }
  };

  const deleteIUploadedImg = () => {
    setUploadedImg(null);
    setMatch(null);
  };

  return (
    <div className="bg-zinc-900 flex flex-row justify-center items-center w-full h-dvh gap-x-4">
      <div className="absolute top-80 z-10 sm:h-[120px] sm:w-[120px] md:h-[200px] md:w-[200px] bg-primary rounded-full animate-circular"></div>
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
                md:w-[360px] md:h-[360px] mt-4 sm:w-[300px] sm:h-[300px]
                border-2 border-dashed border-white rounded-md relative"
              >
                <img
                  className="object-cover w-full h-full absolute"
                  src={uploadedImg}
                  alt={imgName}
                  ref={pictureRef}
                />
                <canvas className="absolute" ref={canvasRef} />
                <div
                  className="absolute top-2 right-3 cursor-pointer text-gray-400/60 scale-150
                  hover:scale-[1.75] hover:text-gray-400 active:scale-[1.75]"
                  onClick={deleteIUploadedImg}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </div>
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
      <div className="z-20">
        {match && (
          <div className="flex flex-col justify-center sm:w-[300px] md:w-[400px] bg-zinc-900/50 backdrop-blur shadow-xl shadow-zinc-950 rounded-2xl p-5 text-white">
            <p>First name: {match.firstName}</p>
            <p>Last name: {match.name}</p>
            <div
              className="
                flex flex-col items-center justify-center
                md:w-[360px] md:h-[360px] mt-4 sm:w-[300px] sm:h-[300px]
                border-2 rounded-md relative"
            >
              <img
                className="object-cover w-full h-full absolute"
                src={match.pictureUrl}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragAndDropImageUploader;

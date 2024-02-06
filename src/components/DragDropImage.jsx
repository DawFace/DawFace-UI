import { useState } from "react";

const DragAndDropImageUploader = () => {
  const [uploadedImg, setUploadedImg] = useState(null);

  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <form action="">
        <div className="bg-slate-100 flex flex-col items-center w-fit p-5 drop-shadow-2xl">
          <div className="bg-none
            flex flex-col items-center justify-center 
            w-[360px] p-5 h-[360px]
            border-2 border-dashed border-secondary rounded-md">
            <p>Drag and drop here</p>
            <p>or</p>
          <button className="px-8 py-2 bg-secondary shadow-sm text-white tracking-wide rounded-full w-fit hover:opacity-90">Upload image</button>
          </div>
          <button type="submit"
            className="mt-5 px-8 py-2 bg-secondary shadow-sm text-white tracking-wide rounded-full w-fit hover:opacity-90"
            >Recognize</button>
        </div>
      </form>
    </div>
  );
};

export default DragAndDropImageUploader;

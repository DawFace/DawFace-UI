import { useState } from 'react';

const UploadForm = () => {
  const [picture, setPicture] = useState(null);

  const showPicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <form className="flex items-center max-w-lg mx-auto mt-5">
        <label htmlFor="voice-search" className="sr-only">
          Upload a picture for the search
        </label>
        <div className="relative w-full">
          <input
            type="file"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={showPicture}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>
      <div className="mt-5 flex max-w-lg mx-auto">
        {picture && <img src={picture} />}
      </div>
    </>
  );
};

export default UploadForm;
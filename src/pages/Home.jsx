import DragAndDropImage from '../components/DragDropImage.jsx';
import Navbar from '../components/Navbar.jsx';
import { loadModels } from '../utils/face-api/utils.js';
import { getRequest } from '../utils/fetcher/methods/index.js';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    loadModels().then(() => {
      getRequest(
        'https://z25y7zw6ii.execute-api.eu-west-3.amazonaws.com/Prod/ping'
      ).then((res) => console.log(res.data));
    });
  }, []);

  return (
    <>
      <div className="absolute top-0">
        <Navbar />
      </div>
      <DragAndDropImage />
    </>
  );
};

export default Home;

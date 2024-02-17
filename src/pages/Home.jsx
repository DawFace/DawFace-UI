import DragAndDropImage from '../components/DragDropImage.jsx';
import {loadModels} from '../utils/face-api/utils.js';
import { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';

const Home = () => {

  useEffect(() => {
    loadModels().then(() => {
      console.log("models loaded");
    })
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

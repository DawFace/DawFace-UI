import DragAndDropImage from '../components/DragDropImage.jsx';
import Navbar from '../components/Navbar.jsx';
import { loadModels, loadReferences } from '../utils/face-api/utils.js';
import { getRequest } from '../utils/fetcher/methods/index.js';
import { useEffect, useState } from 'react';

const Home = () => {
  const [references, setReferences] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadModels().then(() => {
      getRequest(`${import.meta.env.VITE_API_URL}/api/users`).then((res) => {
        setUsers(res);
        loadReferences(res).then((references) => setReferences(references));
      });
    });
  }, []);

  return (
    <>
      <div className="absolute top-0">
        <Navbar />
      </div>
      <DragAndDropImage references={references} users={users} />
    </>
  );
};

export default Home;

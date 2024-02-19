import DragAndDropImage from '../components/DragDropImage.jsx';
import Loader from '../components/Loader.jsx';
import Navbar from '../components/Navbar.jsx';
import { loadModels, loadReferences } from '../utils/face-api/utils.js';
import { getRequest } from '../utils/fetcher/methods/index.js';
import { useEffect, useState } from 'react';

const Home = () => {
  const [references, setReferences] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadModels().then(() => {
      getRequest(`${import.meta.env.VITE_API_URL}/api/users`).then((res) => {
        setUsers(res);
        loadReferences(res).then((references) => {
          setReferences(references);
          setLoading(false);
        });
      });
    });
  }, []);

  return (
    <>
      <div className="relative">
        {loading && <Loader />}
        <div className="absolute top-0">
          <Navbar />
        </div>
        <DragAndDropImage references={references} users={users} />
      </div>
    </>
  );
};

export default Home;

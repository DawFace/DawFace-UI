import DragAndDropImage from './components/DragDropImage.jsx';
// import UploadForm from './components/UploadForm.jsx';
import Login from './pages/Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<DragAndDropImage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

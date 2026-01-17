import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import Home from './Pages/Home';
import Store from './Pages/Store';
import CustomBuilds from './Pages/CustomBuilds';
import './App.css';

function App() {
  return (
    <>
      <div className="bg-grid" />
      <BrowserRouter>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/custom-builds" element={<CustomBuilds />} />
          </Routes>
        </main>
      </BrowserRouter>
      <button className='theme'><MdDarkMode size={25} color='white' /></button>
    </>
  );
}

export default App;

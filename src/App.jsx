import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/services' Component={Services} />
        <Route path='/contact-us' Component={ContactUs} />
        <Route path='/about-us' Component={AboutUs} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;

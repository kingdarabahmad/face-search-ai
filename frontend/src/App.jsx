
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import FaceSearchMain from './pages/FaceSearchMain';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<FaceSearchMain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
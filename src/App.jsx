import React from 'react';
import Header from './components/Header';
import Admission from './pages/Admission';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import Main from './pages/Main';
function App() {
  return (
    <>
      <Header/>
    <Routes>
    <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />

    </Routes>
    </>
  );
}

export default App;
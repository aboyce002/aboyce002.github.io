import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/about/About';
import Art from '../pages/art/Art';
import Contact from '../pages/contact/Contact';
import Main from './main/Main';
import Footer from './footer/Footer';
import Header from './header/Header';
import './App.css'

const App = () => {
  useEffect(() => {
  });

  return (
    <div className="App container">
      <BrowserRouter>
        <Header/>
        <Main>
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/art" element={<Art />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App

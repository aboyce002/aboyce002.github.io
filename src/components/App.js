import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Flex } from '@chakra-ui/react'
import Main from '../containers/main/Main'
import Footer from './footer/Footer';
import Header from './header/Header';
import './App.css'

const App = () => {
  return (
    <Flex direction="column">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Flex>
  );
};

export default App

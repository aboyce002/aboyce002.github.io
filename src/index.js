import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../src/theme.js"
import './index.css'
import App from './components/App';

const root = createRoot(document.querySelector('#root'));
root.render(
  <ChakraProvider theme={theme}><App/></ChakraProvider>
);

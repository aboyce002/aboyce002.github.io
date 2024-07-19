import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import App from './components/App';
import theme from './theme/theme.js';
import Fonts from './theme/Fonts.js';

const root = createRoot(document.querySelector('#root'));
root.render(
  <ChakraProvider theme={theme}><Fonts/><App/></ChakraProvider>
);

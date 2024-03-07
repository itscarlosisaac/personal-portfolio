import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme";
import ReactGA from 'react-ga4';

ReactGA.initialize('G-FGETTJ0DJZ');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
  </React.StrictMode>,
)

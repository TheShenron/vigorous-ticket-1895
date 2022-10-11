import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// MY IMPORT AND EXPORT 
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react';
import ContextProvider from './contextProvider/ContextProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='203777550442-g8l716tt85eb7mm5pejp6ndtrob3mnl7.apps.googleusercontent.com'>
    <ChakraProvider>
      <ContextProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App /> 
          </React.StrictMode>
        </BrowserRouter>
      </ContextProvider>
    </ChakraProvider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

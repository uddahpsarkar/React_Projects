import React from "react";
// Import createRoot from the client module instead of the old ReactDOM
import { createRoot } from 'react-dom/client';

import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
*{margin:0;
padding:0;
box-sizing:border-box ;}

html,body{
  font-family: 'Oswald', sans-serif;
  font-size: 62.5%;

  @media (max-width: 768px) {
    font-size:50%;
  }
  @media (max-width: 450px) {
    font-size:40%;
  }
}
body{
  font-size: 1.6rem;
  background-color: #0d0714ff;
}

`;

// Find the root element in your HTML
const container = document.getElementById("root");

// Create a root
const root = createRoot(container);

// Render your app using the new root.render method
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

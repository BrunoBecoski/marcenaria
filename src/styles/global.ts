import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;   
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 25px;
  }

  button {
    cursor: pointer;
  }
`;
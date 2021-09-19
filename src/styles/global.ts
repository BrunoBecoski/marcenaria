import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @Font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-Regular.otf');
  }

  :root { 
    --primary-color: #BE1621;
    --font-color: #3C3C3B;

    --mdf-color: #38A169;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: rgba(0, 55, 0, .2);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family:  'Gravity';
    color: var(--font-color);
  }

  p, button {
    font-family: 'Gravity';
    color: var(--font-color);
  }

  button {
    cursor: pointer;
  }

`;
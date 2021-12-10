import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @Font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-Regular.otf');
  }

  :root { 
    --primary-color: #BE1621;
    --font-color: whitesmoke;
    --color-background: #121214;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: var(--color-background);
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
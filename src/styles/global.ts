import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @Font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-Regular.otf');
  }

  :root { 
    --primary_200: #BB86FC;
    --primary_500: #6200EE;
    --primary_700: #3700B3;
    --secondary: #03DAC6;
    --secondary-variant: #018786;
    --background: #FFFFFF;
    --surface: #FFFFFF;
    --error: #B00020;
    --on-primary: #FFFFFF;
    --on-secondary: #000000;
    --on-background: #000000;
    --on-surface: #000000;
    --on-error: #FFFFFF;
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
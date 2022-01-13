import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root { 
    --primary_50: #F2E7FE;
    --primary_100: #DBB2FF;  
    --primary_200: #BB86FC;
    --primary_300: #985EFF;
    --primary_400: #7F39FB;
    --primary_500: #6200EE;
    --primary_600: #5600E8;
    --primary_700: #3700B3;
    --primary_800: #30009C;
    --primary_900: #23036A;

    --secondary_50: #C8FFFA;
    --secondary_100: #70EFDE;
    --secondary_200: #03DAC5;
    --secondary_300: #00C4B4;
    --secondary_400: #00B3A6;
    --secondary_500: #01A299;
    --secondary_600: #019592;
    --secondary_700: #018786;
    --secondary_800: #017374;
    --secondary_900: #005457;
    
    --background: #FFFFFF;
    --surface: #FFFFFF;
    --error: #B00020;

    --on-primary: #FFFFFF;
    --on-secondary: #000000;
    --on-background: #000000;
    --on-surface: #000000;
    --on-error: #FFFFFF;

    --on-surface_high: #000000DE;
    --on-surface_medium: #00000099;
    --on-surface_disabled: #00000061;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: var(--color-background);

    font-size: 16px;   
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
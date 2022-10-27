import { createGlobalStyle } from 'styled-components'

import { font, radio, space } from './theme'

export const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    ${font}
    ${radio}
    ${space}
  }

  body {
    font-family:  var(--family_default);
    background: ${({ theme }) => theme.colors.background};
  }

  button {
    cursor: pointer;
    font-family:  var(--family_default);
    -webkit-tap-highlight-color: transparent;
  }
`;
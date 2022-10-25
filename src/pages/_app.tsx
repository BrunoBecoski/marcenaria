import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/global'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

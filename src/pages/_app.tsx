import type { AppProps } from 'next/app'

import { MdfProvider } from '../contexts/MdfContext';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MdfProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </MdfProvider>
  )
}
export default MyApp

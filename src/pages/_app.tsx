import type { AppProps } from 'next/app'

import { InputBoxProvider } from '../contexts/InputBoxContext';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <InputBoxProvider >
        <Component {...pageProps} />
      </InputBoxProvider>
    </>
  )
}
export default MyApp

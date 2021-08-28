import type { AppProps } from 'next/app'

import { InputBoxProvider } from '../contexts/InputBoxContext';
import { FormResultProvider } from '../contexts/FormResultContext';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <InputBoxProvider >
        <FormResultProvider>
          <Component {...pageProps} />
        </FormResultProvider>
      </InputBoxProvider>
    </>
  )
}
export default MyApp

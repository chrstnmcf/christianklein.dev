/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/dist/next-server/lib/router/router';
import GlobalStylesComponent from '../components/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStylesComponent />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

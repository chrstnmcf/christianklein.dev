/* eslint-disable react/jsx-props-no-spreading */
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import GlobalStylesComponent from '../components/GlobalStyles';
import MDXComponents from '../components/MDXComponents';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <MDXProvider components={MDXComponents}>
        <GlobalStylesComponent />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;

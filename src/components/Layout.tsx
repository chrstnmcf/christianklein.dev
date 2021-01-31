import { ReactNode } from 'react';
import Head from 'next/head';
import 'twin.macro';

import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
  title?: string;
}

function Home({ children, title = null }: Props) {
  const pageName = 'christianklein.dev';
  const pageTitle = title ? `${title} - ${pageName}` : pageName;

  return (
    <main tw="relative flex flex-col h-screen justify-between">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section tw="mb-auto">{children}</section>
      <Footer />
    </main>
  );
}

export default Home;

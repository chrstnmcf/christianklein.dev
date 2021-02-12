import Head from 'next/head';
import 'twin.macro';
import { useRouter } from 'next/router';

import config from '../config';

import Footer from './Footer';
import Header from './Header';

interface PageMeta {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
}

function Wrapper({ children, title, description, image, date }: React.PropsWithChildren<PageMeta>) {
  const router = useRouter();
  const pageUrl = `${config.link}${router.asPath}`;
  const { twitterHandle } = config.social;

  const meta: PageMeta = {
    title: title ? `${title} - ${config.title}` : config.title,
    description: description || config.description,
    image: image || config.image,
  };

  return (
    <main tw="relative flex flex-col min-h-screen justify-between">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:site" content={twitterHandle} />
        {date && <meta property="article:published_time" content={date} />}
      </Head>
      <Header />
      <section tw="container mt-28 mb-auto">{children}</section>
      <Footer />
    </main>
  );
}

export default Wrapper;

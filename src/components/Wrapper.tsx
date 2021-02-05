import Head from 'next/head';
import 'twin.macro';
import { useRouter } from 'next/router';

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

  const pageName = 'christianklein.dev';
  const pageUrl = `https://christianklein.dev${router.asPath}`;
  const twitterHandle = '@chrstn_kl';

  const meta: PageMeta = {
    title: title ? `${title} - ${pageName}` : pageName,
    description: description || 'Developer and consultant. Tech enthusiast.',
    image: image || 'https://christianklein.dev/images/banner.png',
  };

  return (
    <main tw="relative flex flex-col h-screen justify-between">
      <Head>
        <title>{meta.title}</title>

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
      <section tw="container mb-auto">{children}</section>
      <Footer />
    </main>
  );
}

export default Wrapper;

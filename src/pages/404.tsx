import Link from 'next/link';
import 'twin.macro';

import Layout from '../layouts/Layout';

export default function NotFound() {
  return (
    <Layout title="404: Not found">
      <h2 tw="text-9xl text-gray-700 dark:text-gray-300">404</h2>
      <h3 tw="mb-10 text-gray-400 dark:text-gray-600">This isn&apos;t the page you&apos;re looking for.</h3>
      <p>If it is, then something has gone terrible wrong. I&apos;m really sorry about that!</p>
      <Link href="/">Follow me this way please.</Link>
    </Layout>
  );
}

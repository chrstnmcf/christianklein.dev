import Link from 'next/link';
import 'twin.macro';

import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div tw="container">
        <h2 tw="text-9xl">404</h2>
        <h4>This isn&apos;t the page you&apos;re looking for.</h4>
        <p>If it is, then something has gone terrible wrong. I&apos; really sorry about that!</p>
        <Link href="/">This way please.</Link>
      </div>
    </Layout>
  );
}

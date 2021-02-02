import { ReactNode } from 'react';
import 'twin.macro';

import Layout from './Layout';

interface Props {
  children: ReactNode;
  meta: FrontmatterMeta;
}

export default function PostLayout({ children, meta }: Props) {
  return (
    <Layout title={meta.title}>
      <h2 tw="mb-0 text-gray-700 dark:text-gray-300">{meta.title}</h2>
      <article tw="mt-4 prose">{children}</article>
    </Layout>
  );
}

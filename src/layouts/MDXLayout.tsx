import * as React from 'react';
import Wrapper from '@/components/Wrapper';

interface MDXLayoutProps {
  meta: PostMeta;
}

export default function MDXLayout({ children, meta }: React.PropsWithChildren<MDXLayoutProps>) {
  const { title } = meta;

  return (
    <Wrapper title={title}>
      <article tw="prose dark:prose-dark">{children}</article>
    </Wrapper>
  );
}

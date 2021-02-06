import * as React from 'react';
import 'twin.macro';

import Wrapper from '../components/Wrapper';

interface MDXLayoutProps {
  meta: PostMeta;
}

export default function MDXLayout({ children, meta }: React.PropsWithChildren<MDXLayoutProps>): JSX.Element {
  const { title } = meta;

  return (
    <Wrapper title={title}>
      <article tw="prose">{children}</article>
    </Wrapper>
  );
}

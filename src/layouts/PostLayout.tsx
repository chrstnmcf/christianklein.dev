import * as React from 'react';
import Image from 'next/image';
import 'twin.macro';
import { format } from 'date-fns';
import Markdown from 'react-markdown';

import Wrapper from '../components/Wrapper';

interface PostLayoutProps {
  meta: PostMeta;
}

export default function PostLayout({ children, meta }: React.PropsWithChildren<PostLayoutProps>) {
  const { date, title, summary, image, imageCredit } = meta;

  const isoDate = new Date(date).toISOString();
  const prettyDate = format(new Date(date), 'dd.MM.yyyy');

  return (
    <Wrapper date={isoDate} description={summary} image={image} title={title}>
      <h1 tw="mb-1 text-2xl sm:text-4xl">{title}</h1>
      <div tw="mb-6 flex items-center">
        <figure tw="flex">
          <Image tw="rounded-full" src="/images/me.jpg" alt="Christian" width={32} height={32} />
        </figure>
        <div tw="ml-2 flex flex-col">
          <span tw="text-sm font-semibold text-gray-500 dark:text-gray-400">Christian Klein</span>
          <span tw="text-xs text-gray-400 dark:text-gray-600">{prettyDate}</span>
        </div>
      </div>
      <article tw="prose dark:prose-dark">{children}</article>
      {imageCredit && (
        <div tw="mt-4 text-xs text-gray-400 dark:text-gray-600">
          <Markdown>{imageCredit}</Markdown>
        </div>
      )}
    </Wrapper>
  );
}

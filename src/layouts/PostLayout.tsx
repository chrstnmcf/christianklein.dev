import Image from 'next/image';
import * as React from 'react';
import 'twin.macro';
import { format, intervalToDuration, formatDuration } from 'date-fns';

import Layout from './Layout';

interface Props {
  children: React.ReactNode;
  meta: FrontmatterMeta;
}

export default function PostLayout({ children, meta }: Props) {
  const { date, title, readingTime } = meta;

  const prettyDate = format(new Date(date), 'dd.MM.yyyy, H:mm');
  const prettyReadingTime = formatDuration(intervalToDuration({ start: 0, end: readingTime.time }));

  return (
    <Layout title={title}>
      <h2 tw="mb-1 text-gray-700 dark:text-gray-300">{title}</h2>
      <div tw="flex items-center justify-between text-sm text-gray-400 dark:text-gray-500">
        <div tw="flex items-center">
          <Image tw="rounded-full" src="/images/me.jpg" alt="Christian" width={24} height={24} />
          <span tw="ml-2 mr-3">Christian Klein</span>
          <span tw="">{prettyDate}</span>
        </div>
        <div tw="flex items-center">
          <span>{readingTime.text}</span>
        </div>
      </div>
      <article tw="mt-4 prose">{children}</article>
    </Layout>
  );
}

import Link from 'next/link';
import 'twin.macro';
import { format } from 'date-fns';

interface Props {
  meta: PostMeta;
}

export default function Excerpt({ meta }: Props) {
  const { date, slug, summary, title } = meta;

  const prettyDate = format(new Date(date), 'dd.MM.yyyy');

  return (
    <Link href={`posts/${slug}`}>
      <a>
        <div tw="flex flex-col h-full rounded-md py-4 px-5 border border-gray-200 transition-all duration-500 dark:border-gray-700 hover:(text-gray-500 border-white dark:border-gray-800 shadow-md dark:shadow-dark dark:bg-gray-800)">
          <h4 tw="text-gray-600 dark:text-gray-200">{title}</h4>
          <span tw="text-xs text-gray-400 dark:text-gray-500 mb-2">{prettyDate}</span>
          <p tw="line-clamp-3 text-sm">{summary}</p>
        </div>
      </a>
    </Link>
  );
}

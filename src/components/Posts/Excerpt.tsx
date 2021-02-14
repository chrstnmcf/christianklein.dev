import Link from 'next/link';
import tw from 'twin.macro';
import { format } from 'date-fns';

interface Props {
  meta: PostMeta;
}

const Card = tw.span`
  flex flex-col h-full
  py-4 px-5
  rounded-md border border-gray-200
  transition duration-500
  dark:border-gray-700
  text-gray-600
  dark:text-gray-200
  hover:(text-gray-700 border-white dark:text-gray-300 dark:border-gray-800 shadow-light dark:shadow-dark dark:bg-gray-800)
`;

export default function Excerpt({ meta }: Props) {
  const { date, slug, summary, title } = meta;

  const prettyDate = format(new Date(date), 'dd.MM.yyyy');

  return (
    <Link href={`/posts/${slug}`}>
      <a>
        <Card>
          <h4>{title}</h4>
          <span tw="text-xs text-gray-400 dark:text-gray-500 mb-2">{prettyDate}</span>
          <p tw="line-clamp-3 text-sm">{summary}</p>
        </Card>
      </a>
    </Link>
  );
}

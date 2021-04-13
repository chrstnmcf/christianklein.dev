import tw from 'twin.macro';
import { format } from 'date-fns';
import Link from '@/components/CustomLink';

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
  hover:(border-white dark:border-gray-800 shadow-light dark:shadow-dark dark:bg-gray-800)
`;

export default function Summary({ meta }: Props) {
  const { date, slug, summary, title } = meta;

  const prettyDate = format(new Date(date), 'dd.MM.yyyy');

  return (
    <Link href={`/posts/${slug}`} className="group">
      <Card>
        <h4 tw="group-hover:(text-gray-900 dark:text-gray-200)">{title}</h4>
        <span tw="text-xs mb-2 text-gray-400 dark:text-gray-500 group-hover:(text-gray-400 dark:text-gray-500)">
          {prettyDate}
        </span>
        <p tw="line-clamp-3 text-sm group-hover:(text-gray-900 dark:text-gray-200)">{summary}</p>
      </Card>
    </Link>
  );
}

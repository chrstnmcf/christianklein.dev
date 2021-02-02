import Link from 'next/link';
import 'twin.macro';

interface Props {
  meta: FrontmatterMeta;
}

export default function Excerpt({ meta }: Props) {
  const { date, slug, summary, title } = meta;

  return (
    <div tw="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-2xl py-5 px-5 shadow-sm">
      <h4>
        <Link href={`posts/${slug}`}>{title}</Link>
      </h4>
      <div tw="text-xs text-gray-400 dark:text-gray-500">{date}</div>
      <p tw="line-clamp-3 text-sm">{summary}</p>
    </div>
  );
}

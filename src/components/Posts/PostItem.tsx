import tw from 'twin.macro';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from '@/components/CustomLink';

const PostGrid = tw.div`
  py-8 relative
  grid grid-rows-2 md:grid-rows-none md:grid-flow-col gap-6 items-center justify-items-center
  after:(absolute block content bottom-0 inset-x-0 mx-auto w-9/12 h-px bg-gray-200 dark:bg-gray-700)
`;

export default function PostItem({ meta }: { meta: PostMeta }) {
  const { date, slug, summary, title, image } = meta;
  const prettyDate = format(new Date(date), 'dd.MM.yyyy');

  return (
    <PostGrid>
      <div tw="w-full">
        <Link href={`/posts/${slug}`} tw="text-gray-700 dark:text-gray-200 hover:(text-gray-500 dark:text-gray-500)">
          <h4>{title}</h4>
        </Link>
        <span tw="text-xs text-gray-400 dark:text-gray-500">{prettyDate}</span>
        <p>{summary}</p>
      </div>
      {image && (
        <div tw="w-40 h-full max-h-24 relative">
          <Image src={image} layout="fill" objectFit="cover" objectPosition="center" tw="rounded-md" alt={title} />
        </div>
      )}
    </PostGrid>
  );
}

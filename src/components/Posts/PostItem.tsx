import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { format } from 'date-fns';
import Image from 'next/image';

const PostGrid = styled.div`
  ${tw`py-8 relative grid grid-rows-2 md:grid-rows-none md:grid-flow-col gap-6 items-center justify-items-center`}

  &::after {
    ${tw`absolute block content bottom-0 inset-x-0 mx-auto w-9/12 h-px bg-gray-200 dark:bg-gray-700`}
  }
`;

export default function PostItem({ meta }: { meta: PostMeta }) {
  const { date, slug, summary, title, image } = meta;
  console.log({ image });
  const prettyDate = format(new Date(date), 'dd.MM.yyyy, H:mm');

  return (
    <PostGrid>
      <div>
        <h4>
          <Link href={`posts/${slug}`}>
            <a>{title}</a>
          </Link>
        </h4>
        <span tw="text-xs text-gray-400 dark:text-gray-500">{prettyDate}</span>
        <p>{summary}</p>
      </div>
      {image && (
        <div tw="w-40 h-full max-h-24 relative">
          <Image src={image} layout="fill" objectFit="cover" objectPosition="center" tw="rounded-md" />
        </div>
      )}
    </PostGrid>
  );
}

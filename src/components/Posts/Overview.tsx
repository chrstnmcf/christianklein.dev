import Link from 'next/link';
import 'twin.macro';

import Excerpt from './Excerpt';

interface Props {
  posts?: any;
}

export default function Overview({ posts }: Props) {
  return (
    <div tw="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 xl:gap-x-8 mt-20">
      {posts && posts.slice(0, 5).map((frontMatter: any) => <Excerpt key={frontMatter.slug} meta={frontMatter} />)}
      {posts && posts.length > 5 && (
        <h5>
          <Link href="/posts">I want more!</Link>
        </h5>
      )}
    </div>
  );
}

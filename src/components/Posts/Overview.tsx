import Link from 'next/link';
import 'twin.macro';

import Excerpt from './Summary';

interface Props {
  posts?: PostMeta[];
  numberOfPosts?: number;
}

export default function Overview({ posts = [], numberOfPosts }: Props) {
  const postsToDisplay = numberOfPosts && numberOfPosts > 0 ? posts.slice(0, 4) : posts;

  return (
    <div tw="mt-20">
      <h3>Here you can find my latest posts</h3>
      <p tw="text-sm">Just a collection of some opinions, thoughts, ideas and tips.</p>
      <div tw="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5 xl:gap-x-8 mt-6">
        {postsToDisplay && postsToDisplay.map((post: PostMeta) => <Excerpt key={post.slug} meta={post} />)}
        {posts && posts.length > 5 && (
          <h5>
            <Link href="/posts">There is more!</Link>
          </h5>
        )}
      </div>
    </div>
  );
}

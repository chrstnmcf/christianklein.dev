import PostItem from '@/components/Posts/PostItem';
import Wrapper from '@/components/Wrapper';
import { getAllPosts } from '@/utils/content';

export default function Posts({ posts }: { posts: PostMeta[] }) {
  const postsToDisplay = posts.filter((post: PostMeta) => new Date(post.date).getTime() <= new Date().getTime());

  return (
    <Wrapper>
      {postsToDisplay.length > 0 ? <h2>All posts</h2> : <h2>Oh no, it seems like there are no posts!</h2>}
      {postsToDisplay.map((meta: PostMeta) => (
        <PostItem key={meta.slug} meta={meta} />
      ))}
    </Wrapper>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
    revalidte: 59,
  };
}

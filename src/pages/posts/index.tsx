import PostItem from '../../components/Posts/PostItem';
import Wrapper from '../../components/Wrapper';
import { getAllPosts } from '../../utils/content';

export default function Posts({ posts }: { posts: PostMeta[] }) {
  return (
    <Wrapper>
      {posts.length > 0 ? <h2>All posts</h2> : <h2>Oh no, it seems like there are no posts!</h2>}
      {posts.map((meta: PostMeta) => (
        <PostItem key={meta.slug} meta={meta} />
      ))}
    </Wrapper>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}

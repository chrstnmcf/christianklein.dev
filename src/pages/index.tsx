import 'twin.macro';

import Wrapper from '../components/Wrapper';
import Main from '../components/Main';
import Posts from '../components/Posts';
import { getAllPosts } from '../utils/content';

function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <Wrapper>
      <Main />
      <Posts posts={posts} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}

export default Home;

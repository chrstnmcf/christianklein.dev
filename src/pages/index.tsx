import Wrapper from '@/components/Wrapper';
import Main from '@/components/Main';
import Posts from '@/components/Posts';
import { getAllPosts } from '@/utils/content';
import buildFeed from '@/utils/feed';
import buildSitemap from '@/utils/sitemap';

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
  await buildFeed(posts);
  await buildSitemap();

  return {
    props: { posts },
  };
}

export default Home;

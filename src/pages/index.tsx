import 'twin.macro';

import Layout from '../layouts/Layout';
import Main from '../components/Main';
import Posts from '../components/Posts';
import { getAllPosts } from '../utils/posts';

function Home({ posts }) {
  return (
    <Layout>
      <Main />
      <Posts posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}

export default Home;

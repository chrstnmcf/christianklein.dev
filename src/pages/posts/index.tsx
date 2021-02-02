import Link from 'next/link';

import Layout from '../../layouts/Layout';
import { getAllPosts } from '../../utils/posts';

export default function Posts({ posts }) {
  return (
    <Layout>
      {posts.map((frontMatter: any) => (
        <h4 key={frontMatter.slug}>
          <Link href={`posts/${frontMatter.slug}`}>{frontMatter.title}</Link>
        </h4>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}

import Link from 'next/link';
import Layout from '../../components/Layout';
import { getAllPosts } from '../../utils/posts';

export default function Posts({ posts }) {
  const sortedPosts = posts.sort((a: any, b: any) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

  return (
    <Layout>
      {sortedPosts.map((frontMatter: any) => (
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

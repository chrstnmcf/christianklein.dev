import 'twin.macro';
import hydrate from 'next-mdx-remote/hydrate';

import { getPostBySlug, getSlugs } from '../../utils/posts';
import MDXComponents from '../../components/MDXComponents';
import PostLayout from '../../layouts/PostLayout';

export default function Post({ source, frontMatter }) {
  const content = hydrate(source, { components: MDXComponents });

  return <PostLayout meta={frontMatter}>{content}</PostLayout>;
}

export async function getStaticPaths() {
  const posts = getSlugs();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return { props: post };
}

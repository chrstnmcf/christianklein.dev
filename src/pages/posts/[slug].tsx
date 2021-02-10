import { GetStaticPropsResult } from 'next';
import hydrate from 'next-mdx-remote/hydrate';

import { getPostBySlug, getSlugs, PostProps } from '../../utils/content';
import MDXComponents from '../../components/MDXComponents';
import PostLayout from '../../layouts/PostLayout';

export default function Post({ source, meta }: PostProps) {
  const content = hydrate(source, { components: MDXComponents });

  return <PostLayout meta={meta}>{content}</PostLayout>;
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

interface StaticPropsParam {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: StaticPropsParam): Promise<GetStaticPropsResult<PostProps>> {
  const post = await getPostBySlug(params.slug);
  return { props: post };
}

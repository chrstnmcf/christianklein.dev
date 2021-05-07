import { GetStaticPropsResult } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { getPostBySlug, getSlugs, PostProps } from '@/utils/content';
import MDXComponents from '@/components/MDXComponents';
import PostLayout from '@/layouts/PostLayout';

export default function Post({ source, meta }: PostProps) {
  return (
    <PostLayout meta={meta}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <MDXRemote {...source} components={MDXComponents} />
    </PostLayout>
  );
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

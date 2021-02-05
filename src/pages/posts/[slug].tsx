import 'twin.macro';
import hydrate from 'next-mdx-remote/hydrate';
import { GetStaticPropsResult } from 'next';

import { getPostBySlug, getSlugs, PostSlugType } from '../../utils/content';
import MDXComponents from '../../components/MDXComponents';
import PostLayout from '../../layouts/PostLayout';

interface PostProps {
  source: any;
  frontMatter: PostMeta;
}

export default function Post({ source, frontMatter }: PostProps) {
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

interface StaticPropsParam {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: StaticPropsParam): Promise<GetStaticPropsResult<PostSlugType>> {
  const post = await getPostBySlug(params.slug);
  return { props: post };
}

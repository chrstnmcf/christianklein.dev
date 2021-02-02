import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';

import MDXComponents from '../components/MDXComponents';

const root = process.cwd();
const dataDirectory = path.join(root, 'content', 'posts');

export function getSlugs() {
  return fs.readdirSync(dataDirectory).map((d) => d.replace(/\.mdx$/, ''));
}

export const getAllPosts = () => {
  const files = fs.readdirSync(dataDirectory);

  return files.reduce((posts, postSlug) => {
    const content = fs.readFileSync(path.join(dataDirectory, postSlug), 'utf-8');
    const { data } = matter(content);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...posts,
    ];
  }, []);
};

export const getPostBySlug = async (slug: string) => {
  const source = fs.readFileSync(path.join(dataDirectory, `${slug}.mdx`), 'utf8');

  const { data, content } = matter(source);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    scope: data,
  });
  return {
    source: mdxSource,
    frontMatter: {
      source: mdxSource,
      slug: slug || '',
      frontMatter: data,
    },
  };
};

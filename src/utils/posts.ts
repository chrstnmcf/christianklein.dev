import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import readingTime from 'reading-time';

import MDXComponents from '../components/MDXComponents';

const root = process.cwd();
const dataDirectory = path.join(root, 'content', 'posts');

export function getSlugs() {
  return fs.readdirSync(dataDirectory).map((d) => d.replace(/\.mdx$/, ''));
}

export const getAllPosts = () => {
  const files = fs.readdirSync(dataDirectory);

  const posts = files.reduce((allPosts, postSlug) => {
    const content = fs.readFileSync(path.join(dataDirectory, postSlug), 'utf-8');
    const { data } = matter(content);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);

  return posts.sort((a: any, b: any) => Number(new Date(b.date)) - Number(new Date(a.date)));
};

export const getPostBySlug = async (slug: string) => {
  const source = fs.readFileSync(path.join(dataDirectory, `${slug}.mdx`), 'utf8');

  const { data, content } = matter(source);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    scope: data,
  }); // MdxRemote.Source
  return {
    source: mdxSource,
    frontMatter: {
      slug: slug || '',
      readingTime: readingTime(content),
      ...data,
    },
  };
};

import { promises as fs } from 'fs';

import { Feed } from 'feed';

import config from '../config';

const buildFeed = async (posts: PostMeta[]) => {
  const { title, description, link, image, author, email } = config;

  const feed = new Feed({
    title,
    description,
    id: link,
    link,
    language: 'en',
    image,
    favicon: `${link}/favicons/favicon.ico`,
    copyright: '',
    generator: 'Next.js',
    feedLinks: {
      rss: `${link}/rss`,
    },
    author: {
      name: author,
      email,
      link,
    },
  });

  if (posts && posts.length > 0) {
    posts.slice(0, 10).forEach((post) => {
      const postUrl = `${link}/posts/${post.slug}`;
      const postDate = new Date(post.date);
      const postImage = post.image && `${link}${post.image}`;

      feed.addItem({
        title: post.title,
        id: postUrl,
        link: postUrl,
        description: post.summary,
        author: [
          {
            name: author,
            email,
            link,
          },
        ],
        date: postDate,
        image: postImage,
      });
    });
  }

  await fs.writeFile('./public/feed.xml', feed.rss2(), 'utf-8');
};

export default buildFeed;

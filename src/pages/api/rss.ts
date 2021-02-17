import type { NextApiRequest, NextApiResponse } from 'next';
import { Feed } from 'feed';

import config from '../../config';
import { getAllPosts } from '../../utils/content';

const createFeed = (): string => {
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

  const posts = getAllPosts();
  if (posts && posts.length > 0) {
    posts.slice(0, 10).forEach((post) => {
      const postUrl = `${link}/posts/${post.slug}`;
      const postDate = new Date(post.date);
      const postImage = post.image && `${link}/${post.image}`;

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

  return feed.rss2();
};

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml; charset=utf-8');

  const feed = createFeed();
  res.send(feed);
};

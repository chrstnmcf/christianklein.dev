import { promises as fs } from 'fs';

import { globby } from 'globby';

import config from '@/config';

const prettier = require('prettier');

const buildSitemap = async () => {
  const { link } = config;

  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const pages = await globby([
    'src/pages/**/*.tsx',
    'src/pages/**/*.mdx',
    '_content/posts/*.mdx',
    '!src/pages/posts/[slug].tsx',
    '!src/pages/404.tsx',
    '!src/pages/_*.tsx',
    '!src/pages/api',
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('src/pages', '')
                  .replace('_content', '')
                  .replace(/\.(ts|md)(x)?/, '');
                const route = path.replace('/index', '');
                return `
                        <url>
                            <loc>${`${link}${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFile('./public/sitemap.xml', formatted, 'utf-8');
};

export default buildSitemap;

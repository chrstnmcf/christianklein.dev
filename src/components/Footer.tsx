import config from '@/config';

import Link from './CustomLink';

export default function Footer() {
  const { email } = config;

  return (
    <footer tw="bg-gray-100 dark:bg-gray-800 mt-10">
      <div tw="container py-6 flex flex-wrap flex-col sm:flex-row justify-between items-center">
        <div tw="text-sm mb-6 sm:mb-0 text-center sm:text-left">
          <strong tw="block font-serif text-base">You want to get in touch?</strong>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <ul tw="list-none grid grid-flow-col gap-3 md:gap-4 text-xs">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/feed.xml" target="_blank">
              RSS
            </Link>
          </li>
          <li>
            <Link href="/legalnotice">Legal Notice</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

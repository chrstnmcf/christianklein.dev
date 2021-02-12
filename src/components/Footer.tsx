import 'twin.macro';

import Link from './CustomLink';

export default function Footer() {
  return (
    <footer tw="bg-gray-100 dark:bg-gray-800 mt-10">
      <div tw="container py-4 flex justify-between items-center">
        <div tw="text-sm">
          <strong tw="block font-serif text-base">You want to get in touch?</strong>
          <a href="mailto:mail@christianklein.dev">mail@christianklein.dev</a>
        </div>
        <ul tw="list-none grid grid-flow-col gap-2 md:gap-3 text-xs">
          <li>
            <Link href="/api/rss" target="_blank">
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

import 'twin.macro';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer tw="bg-gray-100 dark:bg-gray-800 mt-10">
      <div tw="container py-4 flex justify-between items-center text-xs">
        <div>
          <h6>Contact</h6>
          <a href="mailto:mail@christianklein.dev">mail@christianklein.dev</a>
        </div>
        <ul tw="list-none grid grid-flow-col gap-2 md:gap-3">
          <li>
            <Link href="/legalnotice">Legal Notice</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

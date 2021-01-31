import 'twin.macro';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from '@styled-icons/boxicons-logos';

import Toggle from './Toggle';
import Title from './Title';

export default function HeaderComponent() {
  const toggleDarkmode = (active: boolean) => {
    const root = window.document.documentElement;
    root.classList.remove(active ? 'dark' : 'light');
    root.classList.add(active ? 'light' : 'dark');
  };

  return (
    <header tw="container flex justify-between py-8 text-gray-400">
      <Link href="/" passHref>
        <Title />
      </Link>
      <ul tw="list-none grid grid-flow-col items-center gap-2 md:gap-3">
        <li>
          <a href="https://github.com/chrstnkl">
            <Github size="24" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/christianklein0/">
            <Linkedin size="24" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/chrstn_kl">
            <Twitter size="24" />
          </a>
        </li>
        <li tw="flex">
          <Toggle onClick={toggleDarkmode} />
        </li>
      </ul>
    </header>
  );
}

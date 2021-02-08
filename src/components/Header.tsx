import * as React from 'react';
import 'twin.macro';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from '@styled-icons/boxicons-logos';
import { useTheme } from 'next-themes';

import config from '../config';

import Toggle from './Toggle';
import Title from './Title';

export default function HeaderComponent() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  });

  return (
    <header tw="container flex content-center justify-between pt-8 pb-6 mb-6 text-gray-400">
      <Link href="/" passHref>
        <Title />
      </Link>
      <ul tw="list-none grid grid-flow-col items-center gap-2 md:gap-3">
        <li>
          <a tw="hover:text-black" href={config.social.github} rel="noreferrer" target="_blank">
            <Github size="24" />
          </a>
        </li>
        <li>
          <a tw="hover:text-purple-500" href={config.social.linkedin} rel="noreferrer" target="_blank">
            <Linkedin size="24" />
          </a>
        </li>
        <li>
          <a tw="hover:text-blue-400" href={config.social.twitter} rel="noreferrer" target="_blank">
            <Twitter size="24" />
          </a>
        </li>
        <li tw="flex">
          {mounted ? (
            <Toggle active={theme === 'dark'} onClick={(active) => setTheme(active ? 'dark' : 'light')} />
          ) : (
            <span tw="w-9" />
          )}
        </li>
      </ul>
    </header>
  );
}

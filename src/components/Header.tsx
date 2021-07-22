import * as React from 'react';
import tw, { styled } from 'twin.macro';
import { Github, Linkedin, Twitter } from '@styled-icons/boxicons-logos';
import { useTheme } from 'next-themes';

import config from '@/config';
import useStickyHeader from '@/hooks/useStickyHeader';

import Toggle from './Toggle';
import Title from './Title';

interface HeaderProps {
  sticky?: boolean;
}

const Header = styled.header<HeaderProps>(({ sticky }) => [
  tw`absolute inset-x-0 top-8 z-20 flex bg-white dark:bg-gray-900 h-12 transition-shadow`,
  sticky && tw`fixed h-12 top-0 shadow-sm dark:(border-b border-gray-800)`,
]);

export default function HeaderComponent() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const sticky = useStickyHeader(32);

  React.useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return (
    <Header sticky={sticky}>
      <div tw="container flex items-center justify-between text-gray-400">
        <div>
          <Title />
        </div>

        <ul tw="list-none grid grid-flow-col items-center gap-2 md:gap-3">
          <li>
            <a
              tw="text-gray-400 dark:text-gray-500 hover:text-black"
              href={config.social.github}
              rel="noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <Github size="24" />
            </a>
          </li>
          <li>
            <a
              tw="text-gray-400 dark:text-gray-500 hover:text-purple-500"
              href={config.social.linkedin}
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin size="24" />
            </a>
          </li>
          <li>
            <a
              tw="text-gray-400 dark:text-gray-500 hover:text-blue-400"
              href={config.social.twitter}
              rel="noreferrer"
              target="_blank"
              aria-label="Twitter"
            >
              <Twitter size="24" />
            </a>
          </li>
          <li tw="flex">
            {mounted ? (
              <Toggle
                active={resolvedTheme === 'dark'}
                label="Toggle dark mode"
                onClick={(active) => setTheme(active ? 'dark' : 'light')}
              />
            ) : (
              <span tw="w-9" />
            )}
          </li>
        </ul>
      </div>
    </Header>
  );
}

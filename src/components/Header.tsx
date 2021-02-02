import 'twin.macro';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from '@styled-icons/boxicons-logos';
import { useTheme } from 'next-themes';

import Toggle from './Toggle';
import Title from './Title';

export default function HeaderComponent() {
  // const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleDarkmode = (active: boolean) => {
    setTheme(active ? 'light' : 'dark');
  };

  return (
    <header tw="container flex justify-between py-8 text-gray-400">
      <Link href="/" passHref>
        <Title />
      </Link>
      <ul tw="list-none grid grid-flow-col items-center gap-2 md:gap-3">
        <li>
          <a tw="hover:text-black" href="https://github.com/chrstnkl" rel="noreferrer" target="_blank">
            <Github size="24" />
          </a>
        </li>
        <li>
          <a
            tw="hover:text-purple-600"
            href="https://www.linkedin.com/in/christianklein0/"
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin size="24" />
          </a>
        </li>
        <li>
          <a tw="hover:text-blue-400" href="https://twitter.com/chrstn_kl" rel="noreferrer" target="_blank">
            <Twitter size="24" />
          </a>
        </li>
        <li tw="flex">
          <Toggle active={theme === 'dark'} onClick={toggleDarkmode} />
        </li>
      </ul>
    </header>
  );
}

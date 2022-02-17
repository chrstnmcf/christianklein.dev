/* eslint-disable arrow-body-style */
import * as React from 'react';
import tw, { styled } from 'twin.macro';

import Link from './CustomLink';

interface TitleTagProp {
  hover: boolean;
}

const TitleTag = styled.h1<TitleTagProp>(({ hover }) => [
  tw`m-0 text-xl text-gray-500 dark:text-gray-400`,
  tw`relative`,
  tw`after:(content absolute bottom-0 left-0 w-full h-1 bg-blue-300 opacity-100 scale-0 transform transform-origin[center])`,
  hover && tw`after:(scale-100)`,
  `
    &::after {
      transition-property: opacity, transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 250ms;
    }
  `,
]);

export default function Title() {
  const [hover, setHover] = React.useState(false);

  return (
    <Link href="/" tw="flex flex-auto">
      <TitleTag hover={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        chrstnkln.
      </TitleTag>
    </Link>
  );
};

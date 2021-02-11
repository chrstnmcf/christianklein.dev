/* eslint-disable arrow-body-style */
import * as React from 'react';
import tw, { styled } from 'twin.macro';

import Link from './CustomLink';

interface TitleTagProp {
  hover: boolean;
}

const TitleTag = styled.h1<TitleTagProp>(({ hover }) => [
  tw`text-xl text-gray-500 dark:text-gray-400`,
  tw`relative`,
  tw`after:(content block absolute w-0 h-1 bottom-0 left-0 bg-blue-500 opacity-50 transform -skew-x-12)`,
  hover && tw`after:(w-full)`,
  `
    &::after {
      transition-property: width, transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
  `,
]);

const Title = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <Link href="/" tw="flex flex-auto">
      <TitleTag
        hover={hover}
        tw="m-0 text-xl text-gray-400 dark:text-gray-500"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        chrstnkln.
      </TitleTag>
    </Link>
  );
};

export default Title;

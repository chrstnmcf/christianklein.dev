/* eslint-disable arrow-body-style */
import * as React from 'react';
import 'twin.macro';

import Link from './CustomLink';

// interface TitleTagProp {
//   hover: boolean;
// }

// const TitleTag = styled.h1<TitleTagProp>(({ hover }) => [
//   tw`text-xl text-gray-500 dark:text-gray-400`,
//   tw`relative`,
//   tw`after:(content block absolute w-0 h-0 bottom-1 left-0 bg-blue-400 transition-all opacity-50 transform skew-y-1)`,
//   hover && tw`after:(w-full h-4/5)`,
// ]);

const Title = () => {
  // const [hover, setHover] = React.useState(false);
  // onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}

  return (
    <Link href="/" tw="flex flex-auto">
      <h1 tw="m-0 text-xl text-gray-400 dark:text-gray-500">chrstnkln.</h1>
    </Link>
  );
};

export default Title;

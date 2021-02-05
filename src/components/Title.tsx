/* eslint-disable arrow-body-style */
import * as React from 'react';
import 'twin.macro';

interface TitleProp {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

// interface TitleTagProp {
//   hover: boolean;
// }

// const TitleTag = styled.h1<TitleTagProp>(({ hover }) => [
//   tw`text-xl text-gray-500 dark:text-gray-400`,
//   tw`relative`,
//   tw`after:(content block absolute w-0 h-0 bottom-1 left-0 bg-blue-400 transition-all opacity-50 transform skew-y-1)`,
//   hover && tw`after:(w-full h-4/5)`,
// ]);

const Title = React.forwardRef<HTMLAnchorElement, TitleProp>(({ onClick, href }, ref) => {
  // const [hover, setHover] = React.useState(false);
  // onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}

  return (
    <a href={href} onClick={onClick} ref={ref}>
      <h1 tw="text-xl text-gray-500 dark:text-gray-400">chrstnkln.</h1>
    </a>
  );
});

export default Title;

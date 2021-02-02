import * as React from 'react';
import tw, { styled } from 'twin.macro';

interface TitleProp {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

interface TitleTagProp {
  hover: boolean;
}

// const HiddenChar = styled.span<TitleTagProp>(({ visible }) => [
//   tw`transition-all`,
//   !visible && tw`opacity-0`,
//   visible && tw`text-opacity-100`,
// ]);

const TitleTag = styled.h1<TitleTagProp>(({ hover }) => [
  tw`text-xl text-gray-500 dark:text-gray-400`,
  tw`relative`,
  tw`after:(content block absolute w-0 h-0 bottom-1 left-0 bg-blue-400 transition-all opacity-50 transform skew-y-1)`,
  hover && tw`after:(w-full h-4/5)`,
]);

const Title = React.forwardRef<HTMLAnchorElement, TitleProp>(({ onClick, href }, ref) => {
  const [hover, setHover] = React.useState(false);

  return (
    <a href={href} onClick={onClick} ref={ref} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <TitleTag hover={hover}>chrstnkln.</TitleTag>
    </a>
  );
});

export default Title;

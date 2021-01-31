import * as React from 'react';
import 'twin.macro';

interface TitleProp {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

// interface HiddenCharacaterProp {
//   visible: boolean;
// }

// const HiddenChar = styled.span<HiddenCharacaterProp>(({ visible }) => [
//   tw`transition-all`,
//   !visible && tw`opacity-0`,
//   visible && tw`text-opacity-100`,
// ]);

const Title = React.forwardRef<HTMLAnchorElement, TitleProp>(({ onClick, href }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    <h1 tw="text-xl text-gray-400 hover:text-gray-400">chrstnkln.</h1>
  </a>
));

export default Title;

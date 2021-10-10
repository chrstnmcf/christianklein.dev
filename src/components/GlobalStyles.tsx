import tw, { GlobalStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const BaseStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: optional;
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

  body {
    ${tw`font-sans font-normal text-gray-700 bg-white`}
  }

  html.dark > body {
    ${tw`text-gray-200 bg-gray-900`}
  }

  a {
    ${tw`text-blue-500 dark:text-blue-400`}
    ${tw`transition-colors`}

    &:hover {
      ${tw`text-blue-700 dark:text-blue-600`}
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`font-serif font-bold`}
  }

  h1 {
    ${tw`text-gray-700 dark:text-gray-200`}
    ${tw`text-3xl sm:text-5xl lg:text-6xl`}
    ${tw`mb-2 lg:mb-3`}
  }

  h2 {
    ${tw`text-gray-600 dark:text-gray-400`}
    ${tw`text-2xl sm:text-4xl`}
    ${tw`mb-2 lg:mb-3`}
  }

  h3 {
    ${tw`text-xl sm:text-2xl `}
  }

  h4 {
    ${tw`text-lg sm:text-xl`}
  }

  h5 {
    ${tw`text-lg`}
  }

  h6 {
    ${tw`text-base`}
  }

  p {
    line-height: 1.75;
  }

  u {
    ${tw`no-underline relative`}
    ${tw`after:(content block absolute w-full h-1 bottom-0 left-0 bg-blue-400 opacity-50)`}
  }


  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(0, 0%, 47%); /* #777777 */
    ${tw`text-gray-500`}
  }

  .token.punctuation {
    ${tw`text-gray-300`}
  }

  .token.tag,
  .token.boolean,
  .token.number,
  .token.deleted {
    color: hsl(14, 58%, 55%); /* #CF6A4C */
    ${tw`text-red-500`}
  }

  .token.keyword,
  .token.property,
  .token.selector,
  .token.constant,
  .token.symbol,
  .token.builtin {
    color: hsl(53, 89%, 79%); /* #F9EE98 */
    ${tw`text-yellow-500`}
  }

  .token.attr-name,
  .token.attr-value,
  .token.string,
  .token.char,
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable,
  .token.inserted {
    color: hsl(76, 21%, 52%); /* #8F9D6A */
  }

  .token.atrule {
    color: hsl(218, 22%, 55%); /* #7587A6 */
  }

  .token.regex,
  .token.important {
    color: hsl(42, 75%, 65%); /* #E9C062 */
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  /* Markup */
  .language-markup .token.tag,
  .language-markup .token.attr-name,
  .language-markup .token.punctuation {
    color: hsl(33, 33%, 52%); /* #AC885B */
  }
`;

export default function GlobalStylesComponent() {
  return (
    <>
      <BaseStyle />
      <GlobalStyles />
    </>
  );
}

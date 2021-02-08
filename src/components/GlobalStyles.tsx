import tw, { GlobalStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const BaseStyle = createGlobalStyle`
  @font-face {
    font-family: 'Domine';
    src: url('/fonts/Domine-Bold.woff') format('woff'), url('/fonts/Domine-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Light.woff2') format('woff2'), url('/fonts/Montserrat-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Regular.woff2') format('woff2'), url('/fonts/Montserrat-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-SemiBold.woff2') format('woff2'), url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Bold.woff2') format('woff2'), url('/fonts/Montserrat-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    ${tw`font-sans text-gray-500 bg-white`}
  }

  html.dark > body {
    ${tw`text-gray-100 bg-gray-900`}
  }

  a {
    ${tw`text-gray-400 dark:text-white transition-colors`}

    &:hover {
      ${tw`text-gray-700 dark:text-gray-400`}
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
    ${tw`text-gray-700 dark:text-gray-100`}
    ${tw`text-4xl sm:text-5xl lg:text-6xl`}
    ${tw`mb-2 lg:mb-3`}
  }

  h2 {
    ${tw`text-gray-500 dark:text-white`}
    ${tw`text-3xl sm:text-4xl`}
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
`;

export default function GlobalStylesComponent() {
  return (
    <>
      <BaseStyle />
      <GlobalStyles />
    </>
  );
}

import tw, { GlobalStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const BaseStyle = createGlobalStyle`
  body {
    ${tw`font-sans text-gray-500 bg-white`}
  }

  html.dark > body {
    ${tw`text-gray-200 bg-gray-900`}
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
    ${tw`text-gray-400 dark:text-gray-300`}
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

`;

export default function GlobalStylesComponent() {
  return (
    <>
      <BaseStyle />
      <GlobalStyles />
    </>
  );
}

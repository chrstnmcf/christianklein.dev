import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { extractCritical } from '@emotion/server';
import { EmotionCritical } from '@emotion/server/types/create-instance';

import Favicons from '../components/Favicons';

export default class MyDocument extends Document<EmotionCritical> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line react/no-danger */}
          <style data-emotion-css={this.props.ids.join(' ')} dangerouslySetInnerHTML={{ __html: this.props.css }} />

          <link rel="preload" href="/fonts/Domine-Bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
          <link
            rel="preload"
            href="/fonts/Montserrat-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="preload" href="/fonts/Montserrat-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link
            rel="preload"
            href="/fonts/Montserrat-SemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <Favicons />
          <meta name="robots" content="follow, index" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

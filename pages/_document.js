import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';

import theme from '~utils/theme/theme';
import Colors from '~utils/theme/colors';
import fontFace from '~utils/config/fonts';

const globalStyle = {
  __html: `
  ${fontFace}
  
  html,
  body {
    background-color: ${Colors.backgroundColor} !important;
  }
  
  * {
    font-family: 'Proxima Nova';
  }
  
  *:focus {
    outline: none;
  }
  
  p,
  label
  {
    color: #fff;
  }
  
  h1,
  h2,
  h3 {
    color: #fff;
  }
  
  .cc-revoke {
    display: none !important;
  }
`,
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />)),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {/* font-awesome */}
          <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
          {/* eslint-disable-next-line react/no-danger */}
          <style dangerouslySetInnerHTML={globalStyle} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;

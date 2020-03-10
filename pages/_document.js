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
  
  // Optimise Step 2
  .async-hide { opacity: 0 !important}
`,
};

// Google Tag Manager
const googleTagManager = {
  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TLW8PR6');`,
};

// This will send an activate event to Optimize, anytime that there is a change in the DOM
const optimizeScript = {
  __html: `window.dataLayer = window.dataLayer || [];
      if (MutationObserver) {
        new MutationObserver(function(){
          dataLayer.push({'event': 'optimize.activate'});
        }).observe(document.body, {subtree: true, attributes: true, characterData: true});
      }`,
};

// Global site tag (gtag.js) - Google Analytics
const gTagScript = {
  __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-135306158-1', { 'optimize_id': 'GTM-KX8GR55'});
      
      window.__lo_site_id = 144074;
      (function() {
        var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
        wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
      })();`,
};

// // LinkedIn
const lnScript = {
  __html: `_linkedin_partner_id = "1386578";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        (function(){var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})();
        `,
};
const lnNoScript = {
  __html: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=1386578&fmt=gif" />`,
};

// Facebook Pixel Code
const fbPixelCodeScript = {
  __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '2378887192234064');
      fbq('track', 'PageView');`,
};
const fbPixelCodeNoScript = {
  __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2378887192234064&ev=PageView&noscript=1"/>`,
};

// COOKIE BANNER
const cookieBannerScript = {
  __html: `window.addEventListener("load", function(){
        window.cookieconsent.initialise({
          "palette": {
            "popup": {
              "background": "#ffffff",
              "text": "#000000"
            },
            "button": {
              "background": "#000000",
              "text": "#ffffff"
            }
          },
          "theme": "classic",
          "position": "top",
          "type": "opt-out",
          "content": {
            "message": "This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you wish.",
            "allow": "Accept",
            "deny": "Reject",
            "link": "Read More",
            "href": "https://thecapital.co.za/PrivacyPolicy.pdf"
          }
        })});`,
};

// Google Tag Manager (noscript)
const googleTagManagerNoScript = {
  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLW8PR6" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
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
          <title>The Capital Hotels and Apartments</title>

          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {/* font-awesome */}
          <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
          <style dangerouslySetInnerHTML={globalStyle} />

          <script dangerouslySetInnerHTML={googleTagManager} />
          <script dangerouslySetInnerHTML={optimizeScript} />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-135306158-1" />
          <script dangerouslySetInnerHTML={gTagScript} />

          <script dangerouslySetInnerHTML={lnScript} />
          <noscript dangerouslySetInnerHTML={lnNoScript} />

          <script dangerouslySetInnerHTML={fbPixelCodeScript} />
          <noscript dangerouslySetInnerHTML={fbPixelCodeNoScript} />

          {/* COOKIE BANNER */}
          <link
            rel="stylesheet"
            type="text/css"
            href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"
          />
          <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js" />
          <script dangerouslySetInnerHTML={cookieBannerScript} />
        </Head>

        <body>
          <Main />
          <NextScript />

          <noscript dangerouslySetInnerHTML={googleTagManagerNoScript} />
        </body>
      </html>
    );
  }
}

export default MyDocument;

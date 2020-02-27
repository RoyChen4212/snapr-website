import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'sanitize.css/sanitize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import theme from '~utils/theme/theme';
import createStore from '~utils/redux/store';
import '~utils/config/fonts';
import RootContainer from './RootContainer';

class MyApp extends App {
  componentDidMount() {
    self.addEventListener('install', () => self.skipWaiting()); // eslint-disable-line

    self.addEventListener('activate', () => { // eslint-disable-line
      self.registration.unregister(); // eslint-disable-line
    }); // eslint-disable-line

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    this.enableHover();

    this.previousUrls = [];

    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });
    Router.events.on('routeChangeComplete', url => {
      NProgress.done();

      if (
        !(
          url === '/offers' &&
          this.previousUrls.length > 0 &&
          this.previousUrls[this.previousUrls.length - 1].startsWith('/offers')
        )
      ) {
        window.scrollTo(0, 0);
      }
      this.previousUrls.push(url);
    });
    Router.events.on('routeChangeError', () => NProgress.done());
  }

  enableHover = () => {
    const container = document.body;

    if (
      !('ontouchstart' in window || navigator.maxTouchPoints) // works on most browsers
    ) {
      // works on IE10/11 and Surface
      container.className += ' hasHover';
    }
  };

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <Head>
          <title>The Capital Hotels and Apartments</title>
          <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
        </Head>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Provider store={store}>
              <RootContainer>
                <Component {...pageProps} />
              </RootContainer>
            </Provider>
          </ThemeProvider>
        </StylesProvider>
      </>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));

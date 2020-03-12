import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import Head from 'next/head';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import _ from 'lodash';

import { db } from '~utils/service/firebase';
import { makeSelectContent } from '~utils/redux/selectors';
import * as Styled from './styled';
import { AboutDataLoaded } from '~utils/redux/actions';
import { generateRandomString, throw404 } from '~utils/utils';

class BlogPage extends React.Component {
  state = {
    renderKey: 'random',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.asPath !== prevState.asPath) {
      return {
        asPath: nextProps.asPath,
        renderKey: generateRandomString(5, prevState.renderKey),
      };
    }
    return null;
  }

  render() {
    const { blogContent } = this.props;
    const { renderKey } = this.state;
    const blog = blogContent.content;

    return (
      <Styled.Container key={renderKey}>
        {blogContent && (
          <Head>
            <title>{blogContent.title}</title>
            <meta name="description" content="News View" />
          </Head>
        )}
        <Styled.HtmlContent dangerouslySetInnerHTML={{ __html: blog }} />
      </Styled.Container>
    );
  }
}

BlogPage.getInitialProps = async ctx => {
  const promises = [];

  let { about_us_page } = ctx.store.getState().global.content.data;
  if (!about_us_page) {
    promises.push(
      db
        .ref('/content/about_us_page')
        .once('value')
        .then(snapshot => snapshot.val()),
    );
  }

  const [aboutData] = await Promise.all(promises);
  if (aboutData) {
    ctx.store.dispatch(AboutDataLoaded(aboutData));
    about_us_page = aboutData;
  }

  let { blogName } = ctx.query;
  blogName = blogName.replace(/_/g, ' ');
  const blogContent = _.find(about_us_page.news, news => news.title === blogName);

  if (!blogContent || !blogContent.content) {
    throw404();
  }

  return { asPath: ctx.asPath, blogContent };
};

BlogPage.propTypes = {
  blogContent: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  content: makeSelectContent(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(BlogPage);

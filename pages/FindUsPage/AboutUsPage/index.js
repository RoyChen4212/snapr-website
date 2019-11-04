import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { DivColumn, ButtonLabel } from '~components';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import _ from 'lodash';

import { db } from '~utils/service/firebase';
import { generateRandomString } from '~utils/utils';
import { makeSelectContent } from '~utils/redux/selectors';
import { AboutDataLoaded } from '~utils/redux/actions';
import { Router } from '~utils/config/routes';

import * as Styled from './styled';

export class AboutUsPage extends React.Component {
  state = {
    renderKey: 'random',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.asPath !== prevState.asPath) {
      const newsItems = _.orderBy(nextProps.content.data.about_us_page.news, 'publish_date', 'asc');
      return { newsItems, asPath: nextProps.asPath, renderKey: generateRandomString(5, prevState.renderKey) };
    }
    return null;
  }

  onBookClicked = () => {
    const url = 'https://booking.thecapital.co.za/';
    const win = window.open(url, '_blank');
    win.focus();
  };

  onNewsClicked = title => {
    Router.pushRoute(`/find-us/about/news/${title.replace(/\s/g, '_')}`);
  };

  render() {
    const { renderKey, newsItems } = this.state;
    const aboutUsPage = this.props.content.data.about_us_page[0];

    return (
      <DivColumn style={{ flex: 'none' }} key={renderKey}>
        <Head>
          <title>About Us</title>
          <meta name="description" content="About Us View" />
        </Head>

        <Styled.ContentWrapper>
          <Styled.H1>{aboutUsPage.title}</Styled.H1>
          <Styled.H2>{aboutUsPage.description}</Styled.H2>
          <Styled.LongDescription dangerouslySetInnerHTML={{ __html: aboutUsPage.long_description }} />

          <Styled.NewsContainer>
            <Styled.NewsTitleContainer>
              <Styled.H1>{aboutUsPage.news_title}</Styled.H1>
              <Styled.H2>{aboutUsPage.news_description}</Styled.H2>
            </Styled.NewsTitleContainer>
            <Styled.BookLabel onClick={this.onBookClicked}>
              <ButtonLabel>BOOK NOW</ButtonLabel>
            </Styled.BookLabel>
          </Styled.NewsContainer>

          <Styled.ImageContainer>
            {_.map(newsItems, (news, index) => (
              <Styled.NewsWrapper key={index}>
                <Styled.ImgWrapper>
                  <Styled.Img src={news.image.src} />
                </Styled.ImgWrapper>
                <Styled.NewsTitle>{news.title}</Styled.NewsTitle>
                <Styled.NewsCaption>{news.caption}</Styled.NewsCaption>
                <Styled.ReadButton onClick={() => this.onNewsClicked(news.title)}>
                  <ButtonLabel>READ MORE</ButtonLabel>
                </Styled.ReadButton>
              </Styled.NewsWrapper>
            ))}
          </Styled.ImageContainer>
        </Styled.ContentWrapper>
      </DivColumn>
    );
  }
}

AboutUsPage.getInitialProps = async ctx => {
  const promises = [];

  if (!ctx.store.getState().global.content.data.about_us_page) {
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
  }

  return { asPath: ctx.asPath };
};

AboutUsPage.propTypes = {
  content: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  content: makeSelectContent(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(AboutUsPage);

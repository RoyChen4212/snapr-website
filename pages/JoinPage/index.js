import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Head from 'next/head';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { DivColumn } from '~components';
import { db } from '~utils/service/firebase';
import { makeSelectContent } from '~utils/redux/selectors';
import { JoinDataLoaded } from '~utils/redux/actions';

import * as Styled from './styled';

export class JoinPage extends React.Component {
  onSignUp = () => {
    const url = 'https://booking.thecapital.co.za/';
    const win = window.open(url, '_blank');
    win.focus();
  };

  render() {
    const joinPage = this.props.content.data.join_us_page[0];
    return (
      <DivColumn style={{ flex: 'none' }}>
        <Head>
          <title>Join Page</title>
          <meta name="description" content="Join View" />
        </Head>

        <Styled.ContentContainer>
          <Styled.ContentWrapper>
            <Styled.Img src={joinPage.join_image.src} />

            <Styled.JoinWrapper>
              <Styled.JoinTitle>{joinPage.title}</Styled.JoinTitle>
              <Styled.JoinDescription>{joinPage.description}</Styled.JoinDescription>
              <Styled.JoinButton onClick={this.onSignUp}>
                <Styled.JoinButtonLabel>SIGNUP AND BOOK</Styled.JoinButtonLabel>
              </Styled.JoinButton>
            </Styled.JoinWrapper>
          </Styled.ContentWrapper>
          <Styled.DescriptionWrapper>
            <Styled.DescTitle>{joinPage.content_title}</Styled.DescTitle>
            <Styled.LongDescription dangerouslySetInnerHTML={{ __html: joinPage.content_description }} />
          </Styled.DescriptionWrapper>
        </Styled.ContentContainer>
      </DivColumn>
    );
  }
}

JoinPage.getInitialProps = async ctx => {
  const promises = [];

  if (!ctx.store.getState().global.content.data.join_us_page) {
    promises.push(
      db
        .ref('/content/join_us_page')
        .once('value')
        .then(snapshot => snapshot.val()),
    );
  }

  const [joinData] = await Promise.all(promises);
  if (joinData) {
    ctx.store.dispatch(JoinDataLoaded(joinData));
  }
  return {};
};

JoinPage.propTypes = {
  content: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  content: makeSelectContent(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(JoinPage);

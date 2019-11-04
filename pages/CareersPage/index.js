import React from 'react';
import Head from 'next/head';
// import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import _ from 'lodash';
import { db } from '~utils/service/firebase';

import { H1, H2, ButtonLabel } from '~components';
import { makeSelectContent } from '~utils/redux/selectors';
import { CareersDataLoaded } from '~utils/redux/actions';
import iconDrop from '~resources/icons/icon_drop.png';

import { ReadMoreSection, PositionModal } from './Components';
import * as Styled from './styled';

export class CareersPage extends React.Component {
  state = {
    isPositionModal: false,
    isSubmitModal: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.careersPage) {
      const { careers } = nextProps.content.data;
      const careersPage = careers[0];
      careersPage.desired = _.map(careersPage.desired, desire => ({
        value: desire.title,
        label: desire.title,
      }));

      return { careersPage };
    }
    return null;
  }

  handleOpenModal = (modal, isOpen) => {
    this.setState({ [modal]: isOpen });
  };

  render() {
    const { careersPage } = this.state;

    return (
      <div>
        <Head>
          <title>Careers</title>
          <meta name="description" content="Careers View" />
        </Head>
        <Styled.ContentWrapper>
          <Styled.ImageWrapper>
            <Styled.BackgroundImg src={careersPage.background.src} />

            <Styled.TitleWrapper>
              <Styled.TitleCenterWrapper>
                <Styled.TitleContentWrapper>
                  <H1>{careersPage.title}</H1>
                  <H2>{careersPage.description}</H2>
                </Styled.TitleContentWrapper>
              </Styled.TitleCenterWrapper>
            </Styled.TitleWrapper>
          </Styled.ImageWrapper>

          <Styled.ContentContainer>
            <Styled.RightPanel>
              <Styled.AvailableButton onClick={() => this.handleOpenModal('isPositionModal', true)}>
                <ButtonLabel>Available Positions</ButtonLabel>
              </Styled.AvailableButton>

              <Styled.DropZone onClick={() => this.handleOpenModal('isSubmitModal', true)}>
                <Styled.DropLabel>
                  {"Haven't found a suitable available vacancy?\nDrop your CV here for future consideration"}
                </Styled.DropLabel>
                <Styled.DropImg src={iconDrop} />
              </Styled.DropZone>
            </Styled.RightPanel>

            <Styled.LeftPanel>
              <ReadMoreSection title={careersPage.section1_title} description={careersPage.section1_description} />
              <ReadMoreSection title={careersPage.section2_title} description={careersPage.section2_description} />
              <ReadMoreSection title={careersPage.section3_title} description={careersPage.section3_description} />
            </Styled.LeftPanel>
          </Styled.ContentContainer>

          <PositionModal
            isOpen={this.state.isPositionModal}
            title="Current Positions"
            src="https://www.placementpartner.co.za/wi/client_jobs.php?id=thecapital"
            onClose={() => this.handleOpenModal('isPositionModal', false)}
          />

          <PositionModal
            isOpen={this.state.isSubmitModal}
            title="Submit Your CV"
            src="https://www.placementpartner.co.za/wi/submit_cv_form.php?id=thecapital"
            onClose={() => this.handleOpenModal('isSubmitModal', false)}
          />
        </Styled.ContentWrapper>
      </div>
    );
  }
}

CareersPage.getInitialProps = async ctx => {
  const promises = [];

  if (!ctx.store.getState().global.content.data.careers) {
    promises.push(
      db
        .ref('/content/careers')
        .once('value')
        .then(snapshot => snapshot.val()),
    );
  }

  const [careerData] = await Promise.all(promises);
  if (careerData) {
    ctx.store.dispatch(CareersDataLoaded(careerData));
  }

  return {};
};

CareersPage.propTypes = {
  // content: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  content: makeSelectContent(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(CareersPage);

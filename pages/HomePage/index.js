import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Head from 'next/head';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import moment from 'moment';

import { db } from '~utils/service/firebase';
import { H1, H5, H4, CalendarPicker, Button, ImageSlider } from '~components';
import iconDown from '~resources/icons/icon_down.png';
import { makeSelectCalendar, makeSelectContent } from '~utils/redux/selectors';
import { HomeDataLoaded } from '~utils/redux/actions';

import * as Styled from './styled';
import './styles.scss';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { windowHeight: 0 };
    this.homeSliders = _.orderBy(this.props.content.data.home_page.home_sliders, 'publish_date', 'asc');
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  onAvailability = () => {
    const url = `https://booking.thecapital.co.za/?checkIn=${moment(this.props.calendar.checkInDate).format(
      'YYYY-MM-DD',
    )}&checkOut=${moment(this.props.calendar.checkOutDate).format('YYYY-MM-DD')}`;
    const win = window.open(url, '_blank');
    win.focus();
  };

  onDownSlide = () => {
    window.scrollTo({ top: this.state.windowHeight - (window.innerWidth > 768 ? 105 : 75), behavior: 'smooth' });
  };

  onLoginClicked = () => {
    const url = 'https://booking.thecapital.co.za/';
    const win = window.open(url, '_blank');
    win.focus();
  };

  openExternalLink = url => {
    if (url) {
      window.location = url;
    }
  };

  updateWindowDimensions = () => {
    this.setState({ windowHeight: window.innerHeight });
  };

  render() {
    const { data } = this.props.content;

    const homePage = data.home_page[0];

    return (
      <div>
        <Head>
          <title>The Capital Hotels and Apartments</title>
          <meta name="description" content="The Capital Hotel Group" />
        </Head>
        <Styled.ContentWrapper>
          <Styled.SliderWrapper>
            <ImageSlider
              style={{
                autoplay: true,
                autoplaySpeed: 3200,
              }}
            >
              {Object.values(this.homeSliders).map((page, index) => (
                <Styled.ImageWrapper key={index} onClick={() => this.openExternalLink(page.link)}>
                  <Styled.BackgroundImg src={page.image.src} />

                  <Styled.TitleWrapper>
                    {page.title && (
                      <Styled.TitleCenterWrapper>
                        <Styled.TitleContentWrapper>
                          <H1>{page.title}</H1>
                        </Styled.TitleContentWrapper>
                      </Styled.TitleCenterWrapper>
                    )}
                    {page.description && <Styled.H2>{page.description.toUpperCase()}</Styled.H2>}
                  </Styled.TitleWrapper>
                </Styled.ImageWrapper>
              ))}
            </ImageSlider>
          </Styled.SliderWrapper>

          <Styled.ContentContainer>
            <Styled.LeftPanelWrapper>
              <Styled.LeftPanel>
                <Styled.PanelImg
                  src={homePage.venue_image1.src}
                  onClick={() => this.openExternalLink(homePage.venue_image1_link)}
                />
                <Styled.LeftPanelContent>
                  <Styled.VenueTitle dangerouslySetInnerHTML={{ __html: homePage.venue_title }} />
                  <Styled.VenueDescription dangerouslySetInnerHTML={{ __html: homePage.venue_description }} />
                </Styled.LeftPanelContent>
              </Styled.LeftPanel>
            </Styled.LeftPanelWrapper>
            <Styled.RightPanelContainer>
              <Styled.RightPanelWrapper>
                <Styled.RightPanel>
                  <Styled.RightPanelContent>
                    <CalendarPicker onAvailability={this.onAvailability} />
                    <Styled.LoginWrapper>
                      <H5>Are you part of our family?</H5>
                      <Button onClick={this.onLoginClicked}>
                        <Styled.ButtonLabel>LOGIN</Styled.ButtonLabel>
                      </Button>
                      <Button onClick={this.onLoginClicked}>
                        <Styled.ButtonLabel>JOIN</Styled.ButtonLabel>
                      </Button>
                    </Styled.LoginWrapper>
                    <Styled.JoinDescription>
                      Join now to get <H4>12% off our best available rate</H4>
                    </Styled.JoinDescription>
                  </Styled.RightPanelContent>
                </Styled.RightPanel>
                <Styled.PanelImg
                  src={homePage.venue_image2.src}
                  onClick={() => this.openExternalLink(homePage.venue_image2_link)}
                />
              </Styled.RightPanelWrapper>
            </Styled.RightPanelContainer>
          </Styled.ContentContainer>

          <Styled.SlideButton onClick={this.onDownSlide}>
            <Styled.SlideImg src={iconDown} />
          </Styled.SlideButton>
        </Styled.ContentWrapper>
      </div>
    );
  }
}

HomePage.getInitialProps = async ctx => {
  if (ctx.res) {
    ctx.res.writeHead(301, {
      Location: 'https://welcome.thecapital.co.za/',
    });
    ctx.res.end();
  }

  return {};

  // if (!ctx.store.getState().global.content.data.home_page) {
  //   const homeData = await db
  //     .ref('/content/home_page')
  //     .once('value')
  //     .then(snapshot => snapshot.val());
  //   ctx.store.dispatch(HomeDataLoaded(homeData));
  // }
  // return {};
};

HomePage.propTypes = {
  calendar: PropTypes.object,
  content: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  calendar: makeSelectCalendar(),
  content: makeSelectContent(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(HomePage);

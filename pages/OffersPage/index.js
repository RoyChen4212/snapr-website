import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Head from 'next/head';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import moment from 'moment';

import { db } from '~utils/service/firebase';
import { DivColumn, CalendarPicker, ButtonLabel } from '~components';
import { makeSelectCalendar, makeSelectContent } from '~utils/redux/selectors';
import { OffersDataLoaded } from '~utils/redux/actions';
import { Router } from '~utils/config/routes';

import OfferModal from './Components/OfferModal/OfferModal';
import * as Styled from './styled';

export class OffersPage extends React.Component {
  state = {
    isModalOpen: false,
    selectedOffer: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.asPath !== prevState.asPath) {
      const { offers: offersData } = nextProps.content.data;
      const { offerName } = nextProps;

      let offers = _.filter(offersData, offer => {
        if (!offer.expiry_date) {
          return true;
        }
        return moment(offer.expiry_date, 'YYYY-MM-DD').isSameOrAfter(moment().startOf('date'));
      });
      offers = _.orderBy(offers, 'publish_date', 'asc');

      let selectedOffer;
      if (offerName) {
        selectedOffer = _.filter(
          offers,
          offer => offer.title.replace(/\s/g, '_').toLowerCase() === offerName.toLowerCase(),
        );
        if (selectedOffer.length > 0) {
          return { isModalOpen: true, selectedOffer: selectedOffer[0], offers };
        }

        if (process.browser) {
          Router.pushRoute('offers');
        }
      } else {
        return { isModalOpen: false, offers };
      }
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.asPath !== prevProps.asPath) {
      // Router.pushRoute('offers');
    }
  }

  onAvailability = () => {
    const url = `https://booking.thecapital.co.za/?checkIn=${moment(this.props.calendar.checkInDate).format(
      'YYYY-MM-DD',
    )}&checkOut=${moment(this.props.calendar.checkOutDate).format('YYYY-MM-DD')}`;
    const win = window.open(url, '_blank');
    win.focus();
  };

  onOfferClicked = selectedOffer => {
    Router.pushRoute(`/offers/${encodeURIComponent(selectedOffer.title.replace(/\s/g, '_')).toLowerCase()}`);
  };

  onCloseModal = () => {
    Router.pushRoute('offers');
  };

  onBook = link => {
    const win = window.open(link, '_self');
    win.focus();
  };

  render() {
    const { offers } = this.state;

    return (
      <DivColumn style={{ flex: 'none' }}>
        <Head>
          <title>{this.props.isWelcome ? 'WiFi - Welcome' : 'Offers Page'}</title>
          <meta name="description" content="Offers View" />
        </Head>

        {this.props.isWelcome && (
          <Styled.TitleWrapper>
            <Styled.H1>YOU'RE NOW CONNECTED TO OUR UNCAPPED HIGH-SPEED WIFI!</Styled.H1>
            <Styled.H2>Why don't you have a browse at some of our great deals below:</Styled.H2>
          </Styled.TitleWrapper>
        )}

        <Styled.ImageContainer isWelcome={this.props.isWelcome}>
          {_.map(offers, (offer, index) => (
            <Styled.ContentWrapper key={index} onClick={() => this.onOfferClicked(offer)}>
              <Styled.ImgWrapper>
                <Styled.Img src={offer.featured_image.src} />
              </Styled.ImgWrapper>

              <Styled.ContentContainer>
                <Styled.OfferTitle>{offer.title}</Styled.OfferTitle>
                <Styled.OfferDescription>{offer.description}</Styled.OfferDescription>
                <Styled.ReadButton>
                  <ButtonLabel>MORE</ButtonLabel>
                </Styled.ReadButton>
              </Styled.ContentContainer>
            </Styled.ContentWrapper>
          ))}
        </Styled.ImageContainer>

        <Styled.CalendarWrapper>
          <CalendarPicker onAvailability={this.onAvailability} />
        </Styled.CalendarWrapper>

        <OfferModal
          isOpen={this.state.isModalOpen}
          offer={this.state.selectedOffer}
          onClose={this.onCloseModal}
          onBook={this.onBook}
        />
      </DivColumn>
    );
  }
}

OffersPage.getInitialProps = async ctx => {
  const promises = [];

  if (!ctx.store.getState().global.content.data.offers) {
    promises.push(
      db
        .ref('/content/offers')
        .once('value')
        .then(snapshot => snapshot.val()),
    );
  }

  const [offersData] = await Promise.all(promises);
  if (offersData) {
    ctx.store.dispatch(OffersDataLoaded(offersData));
  }

  return { asPath: ctx.asPath, ...ctx.query, isWelcome: ctx.asPath === '/welcome' };
};

OffersPage.propTypes = {
  calendar: PropTypes.object,
  isWelcome: PropTypes.bool,
  asPath: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  calendar: makeSelectCalendar(),
  content: makeSelectContent(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(OffersPage);

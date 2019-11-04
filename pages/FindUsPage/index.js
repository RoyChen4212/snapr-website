import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import _ from 'lodash';

import { H1, H2, DivColumn, ButtonLabel } from '~components';
import { db } from '~utils/service/firebase';
import { generateRandomString } from '~utils/utils';
import { makeSelectContent } from '~utils/redux/selectors';
import { AreasDataLoaded, FindDataLoaded, HotelsDataLoaded } from '~utils/redux/actions';
import { Router } from '~utils/config/routes';
import iconPhone from '~resources/icons/icon_phone.png';
import iconEmail from '~resources/icons/icon_email.png';
import iconAddress from '~resources/icons/icon_address.png';
import iconPromotion from '~resources/icons/icon_promotion.png';

import * as Styled from './styled';

export class FindUsPage extends React.Component {
  state = {
    renderKey: 'random',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.asPath !== prevState.asPath) {
      const { hotels } = nextProps.content.data.find_us_page;
      const sortedHotels = _.orderBy(hotels, 'publish_date', 'asc');

      return {
        hotels: sortedHotels,
        asPath: nextProps.asPath,
        renderKey: generateRandomString(5, prevState.renderKey),
      };
    }
    return null;
  }

  onAddressClicked(address) {
    const win = window.open(address, '_blank');
    win.focus();
  }

  onBookClicked(areaId, name) {
    if (name === 'The Capital Melrose') {
      const win = window.open('https://thecapital.co.za/The_Capital_Melrose_E-fact%20sheet.jpg', '_self');
      win.focus();
      return;
    }
    if (!areaId) {
      const win = window.open('https://booking.thecapital.co.za', '_self');
      win.focus();
    } else {
      const findArea = _.find(this.props.content.data.areas, area => area.id === areaId);
      const findHotel = _.find(this.props.content.data.hotels, hotel => hotel.name === name);
      Router.pushRoute(`/hotels/${findArea.name.replace(/\s/g, '_')}/${findHotel.menu_title.replace(/\s/g, '_')}`);
    }
  }

  getPhoneNumber = phone => {
    let number = phone.replace(/ *\([^)]*\) */g, '');
    number = number.split(' ').join('');
    return number;
  };

  render() {
    const { hotels, renderKey } = this.state;
    const findUsPage = this.props.content.data.find_us_page[0];

    return (
      <DivColumn style={{ flex: 'none' }} key={renderKey}>
        <Head>
          <title>Find Us</title>
          <meta name="description" content="Find Us View" />
        </Head>

        <Styled.ContentWrapper>
          <Styled.Img src={findUsPage.background.src} />

          <Styled.TitleWrapper>
            <Styled.TitleCenterWrapper>
              <Styled.TitleContentWrapper>
                <H1>{findUsPage.title}</H1>
                <H2>{findUsPage.description}</H2>
              </Styled.TitleContentWrapper>
            </Styled.TitleCenterWrapper>
          </Styled.TitleWrapper>
        </Styled.ContentWrapper>

        <Styled.ContentContainer>
          {_.map(hotels, hotel => (
            <Styled.PanelWrapper key={hotel.name}>
              <Styled.PanelContainer>
                <Styled.PanelImg src={hotel.image.src} onClick={() => this.onBookClicked(hotel.area_id, hotel.name)} />

                <Styled.Panel>
                  <Styled.PanelContent>
                    <Styled.TitleButton onClick={() => this.onBookClicked(hotel.area_id, hotel.name)}>
                      <Styled.H1>{hotel.name}</Styled.H1>
                      <Styled.H2>{hotel.description}</Styled.H2>
                    </Styled.TitleButton>

                    <Styled.VenueIconWrapper>
                      <Styled.PhoneWrapper>
                        <Styled.PhoneIcon src={iconPhone} />
                        <Styled.H5>
                          <a href={`tel:${this.getPhoneNumber(hotel.phone)}`}>{hotel.phone}</a>
                        </Styled.H5>
                      </Styled.PhoneWrapper>
                      <Styled.PhoneWrapper>
                        <Styled.PhoneIcon src={iconEmail} />
                        <Styled.H5>
                          <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
                        </Styled.H5>
                      </Styled.PhoneWrapper>
                    </Styled.VenueIconWrapper>

                    <Styled.AddressWrapper onClick={() => this.onAddressClicked(hotel.address_link)}>
                      <Styled.PhoneIcon src={iconAddress} />
                      <Styled.H5>{hotel.address}</Styled.H5>
                    </Styled.AddressWrapper>

                    <Styled.ConfTitle>{hotel.conf_title}</Styled.ConfTitle>

                    <Styled.VenueIconWrapper style={{ marginTop: 7 }}>
                      {hotel.conf_phone && (
                        <Styled.PhoneWrapper>
                          <Styled.PhoneIcon src={iconPhone} />
                          <Styled.H5>
                            <a href={`tel:${this.getPhoneNumber(hotel.conf_phone)}`}>{hotel.conf_phone}</a>
                          </Styled.H5>
                        </Styled.PhoneWrapper>
                      )}
                      {hotel.conf_email && (
                        <Styled.PhoneWrapper style={{ flex: 1 }}>
                          <Styled.PhoneIcon src={iconEmail} />
                          <Styled.EmailWrapper>
                            {hotel.conf_email.map((email, index) => (
                              <Styled.H5 key={index}>
                                <a href={`mailto:${email.email}`}>{email.email}</a>
                                {index !== hotel.conf_email.length - 1 && '  /  '}
                              </Styled.H5>
                            ))}
                          </Styled.EmailWrapper>
                        </Styled.PhoneWrapper>
                      )}
                    </Styled.VenueIconWrapper>
                  </Styled.PanelContent>

                  {hotel.name !== 'The Capital Support Office' && (
                    <Styled.BookWrapper>
                      <Styled.BookLabel onClick={() => this.onBookClicked(hotel.area_id, hotel.name)}>
                        <ButtonLabel>BOOK</ButtonLabel>
                      </Styled.BookLabel>

                      <Styled.PromotionWrapper>
                        <Styled.PromotionImg src={iconPromotion} />
                        <Styled.H3>TODAY</Styled.H3>
                      </Styled.PromotionWrapper>
                    </Styled.BookWrapper>
                  )}
                </Styled.Panel>
              </Styled.PanelContainer>
            </Styled.PanelWrapper>
          ))}
        </Styled.ContentContainer>
      </DivColumn>
    );
  }
}

FindUsPage.getInitialProps = async ctx => {
  const promises = [];

  if (!ctx.store.getState().global.content.data.hotels) {
    promises.push(
      db
        .ref('/content/hotels')
        .once('value')
        .then(snapshot => snapshot.val()),
    );
  } else {
    promises.push(null);
  }
  if (!ctx.store.getState().global.content.data.areas) {
    promises.push(
      db
        .ref('/content/areas')
        .once('value')
        .then(snapshot => snapshot.val()),
    );
  } else {
    promises.push(null);
  }
  if (!ctx.store.getState().global.content.data.find_us_page) {
    promises.push(
      db
        .ref('/content/find_us_page')
        .once('value')
        .then(snapshot => snapshot.val()),
    );
  }

  const [hotelData, areaData, findData] = await Promise.all(promises);
  if (hotelData) {
    ctx.store.dispatch(HotelsDataLoaded(hotelData));
  }
  if (areaData) {
    ctx.store.dispatch(AreasDataLoaded(areaData));
  }
  if (findData) {
    ctx.store.dispatch(FindDataLoaded(findData));
  }
  return { asPath: ctx.asPath };
};

FindUsPage.propTypes = {
  content: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  content: makeSelectContent(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(FindUsPage);

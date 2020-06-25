import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import moment from 'moment';

import { H1, H2, ImageSlider, DivColumn, CalendarPicker, ButtonLabel } from '~components';
import iconDown from '~resources/icons/icon_down.png';
import { db } from '~utils/service/firebase';
import { Router } from '~utils/config/routes';
import { generateRandomString } from '~utils/utils';

import * as Styled from './styled';
import { makeSelectCalendar, makeSelectContent } from '~utils/redux/selectors';
import { HotelsDataLoaded, AreasDataLoaded } from '~utils/redux/actions';
import CovidModal from './CovidModal/CovidModal';

export class HotelsPage extends React.Component {
  state = {
    windowHeight: 0,
    sliderKey: 'random',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.asPath !== prevState.asPath) {
      const {
        content: {
          data: { areas, hotels },
        },
        isConference,
      } = nextProps;
      let cities = Object.values(areas);
      if (isConference) {
        cities = _.reduce(
          cities,
          (result, area) => {
            const confHotels = HotelsPage.getSelectedHotels(area.id, hotels, true);
            if (confHotels.length > 0) {
              result.push(area);
            }

            return result;
          },
          [],
        );
      }

      const selectedCity = cities[0];
      const selectedHotels = HotelsPage.getSelectedHotels(cities[0].id, hotels, isConference);

      return {
        selectedCity,
        selectedHotels,
        cities,
        asPath: nextProps.asPath,
        sliderKey: generateRandomString(5, prevState.sliderKey),
        isCovidModalOpen: isConference,
      };
    }
    return null;
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentDidUpdate(prevProps) {
    if (this.props.asPath !== prevProps.asPath) {
      this.refSlider.slickGoTo(0, true);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  onAvailability = () => {
    const url = `https://booking.thecapital.co.za/?city=${this.state.selectedCity.name}&checkIn=${moment(
      this.props.calendar.checkInDate,
    ).format('YYYY-MM-DD')}&checkOut=${moment(this.props.calendar.checkOutDate).format('YYYY-MM-DD')}`;
    const win = window.open(url, '_blank');
    win.focus();
  };

  onDownSlide = () => {
    window.scrollTo({ top: this.state.windowHeight - (window.innerWidth > 768 ? 115 : 85), behavior: 'smooth' });
  };

  onTitleClicked = title => {
    if (title === 'ivy') {
      const url = 'https://theivyvillahotel.co.za';
      const win = window.open(url, '_blank');
      win.focus();
    } else if (this.props.isConference) {
      Router.push(`/conferences/${this.state.selectedCity.name.replace(/\s/g, '_')}/${title.replace(/\s/g, '_')}`);
    } else {
      Router.push(`/hotels/${this.state.selectedCity.name.replace(/\s/g, '_')}/${title.replace(/\s/g, '_')}`);
    }
  };

  static getSelectedHotels = (areaId, hotels, isConference) => {
    let selectedHotels;
    if (isConference) {
      selectedHotels = _.filter(
        hotels,
        hotel =>
          hotel.has_conference && hotel.background && hotel.area_id === areaId && hotel.name !== 'The Capital Moloko',
      );
    } else {
      selectedHotels = _.filter(
        hotels,
        hotel => hotel.background && hotel.area_id === areaId && hotel.name !== 'The Capital Moloko',
      );
    }

    if (areaId === '-LDjgX2MPzZNgDNwPyTd') {
      selectedHotels = [
        {
          name: 'THE IVY Villa Hotel & Spa',
          background: { src: 'https://theivyvillahotel.co.za/wp-content/uploads/2019/06/TEXTURE2-610x610.jpg' },
          menu_title: 'ivy',
        },
      ].concat(selectedHotels);
    }
    return selectedHotels;
  };

  onCloseModal = modal => {
    this.setState({ [modal]: false });
  };

  updateWindowDimensions = () => {
    this.setState({ windowHeight: window.innerHeight });
  };

  selectArea = selectedCity => {
    const { hotels } = this.props.content.data;
    const selectedHotels = HotelsPage.getSelectedHotels(selectedCity.id, hotels, this.props.isConference);
    this.setState({ selectedCity, selectedHotels });
  };

  render() {
    const { cities, sliderKey } = this.state;

    return (
      <DivColumn key={sliderKey} style={{ flex: 'none' }}>
        <Head>
          <title>Hotels Page</title>
          <meta name="description" content="Hotels View" />
        </Head>

        <Styled.SliderWrapper>
          <ImageSlider
            style={{
              afterChange: index => this.selectArea(cities[index]),
              currentSlide: 0,
              ref: ref => {
                this.refSlider = ref;
              },
            }}
          >
            {_.map(cities, city => (
              <Styled.ContentWrapper key={city.name}>
                <Styled.Img src={city.background.src} />

                <Styled.TitleWrapper>
                  <Styled.TitleCenterWrapper>
                    <Styled.TitleContentWrapper>
                      <H1>{city.name}</H1>
                      <H2>{this.props.isConference ? city.conf_description : city.description}</H2>
                    </Styled.TitleContentWrapper>
                  </Styled.TitleCenterWrapper>
                </Styled.TitleWrapper>
              </Styled.ContentWrapper>
            ))}
          </ImageSlider>
        </Styled.SliderWrapper>

        <Styled.CalendarWrapper>
          <CalendarPicker onAvailability={this.onAvailability} />
        </Styled.CalendarWrapper>

        <Styled.ContentContainer>
          {this.state.selectedHotels.map(hotel => (
            <Styled.PanelWrapper key={hotel.name}>
              <Styled.PanelContainer>
                <Styled.PanelImg src={hotel.background.src} onClick={() => this.onTitleClicked(hotel.menu_title)} />

                <Styled.Panel>
                  <Styled.PanelContent>
                    <Styled.TitleButton onClick={() => this.onTitleClicked(hotel.menu_title)}>
                      <Styled.H1>{hotel.name}</Styled.H1>
                      <Styled.H2>{hotel.description}</Styled.H2>
                    </Styled.TitleButton>

                    {/* <Styled.H5 style={{ marginLeft: '0px', fontSize: '16px', marginTop: '25px' }}>from R{hotel.price_floor} per night</Styled.H5> */}
                  </Styled.PanelContent>

                  <Styled.BookWrapper>
                    <Styled.BookLabel onClick={() => this.onTitleClicked(hotel.menu_title)}>
                      <ButtonLabel>VIEW</ButtonLabel>
                    </Styled.BookLabel>

                    <Styled.H3>{hotel.today}</Styled.H3>
                  </Styled.BookWrapper>
                </Styled.Panel>
              </Styled.PanelContainer>
            </Styled.PanelWrapper>
          ))}
        </Styled.ContentContainer>

        <Styled.SlideButton onClick={this.onDownSlide}>
          <Styled.SlideImg src={iconDown} />
        </Styled.SlideButton>

        <CovidModal isOpen={this.state.isCovidModalOpen} onClose={() => this.onCloseModal('isCovidModalOpen')} />
      </DivColumn>
    );
  }
}

HotelsPage.getInitialProps = async ctx => {
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
  }

  const [hotelData, areaData] = await Promise.all(promises);
  if (hotelData) {
    ctx.store.dispatch(HotelsDataLoaded(hotelData));
  }
  if (areaData) {
    ctx.store.dispatch(AreasDataLoaded(areaData));
  }
  return { isConference: ctx.asPath.startsWith('/conferences'), asPath: ctx.asPath };
};

HotelsPage.propTypes = {
  calendar: PropTypes.object,
  content: PropTypes.object,
  asPath: PropTypes.string,
  isConference: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  calendar: makeSelectCalendar(),
  content: makeSelectContent(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(HotelsPage);

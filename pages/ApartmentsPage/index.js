import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Head from 'next/head';
import _ from 'lodash';
import moment from 'moment';

import { db } from '~utils/service/firebase';
import { H1, H2, ImageSlider, DivColumn, CalendarPicker, ButtonLabel, GoogleMap } from '~components';
import reubenButton from '~resources/images/reuben-button.png';
import reubenImage from '~resources/images/reubens-image.jpg';
import { makeSelectCalendar, makeSelectContent, makeSelectMobileCheck } from '~utils/redux/selectors';
import {
  AreasDataLoaded,
  ConfservicesDataLoaded,
  FacilitiesDataLoaded,
  HotelsDataLoaded,
  RoomsDataLoaded,
} from '~utils/redux/actions';
import { generateRandomString } from '~utils/utils';

import * as Styled from './styled';
import { BookModal, VideoModal, FacilityTab } from './Components';

export class ApartmentsPage extends React.Component {
  state = {
    descriptionLines: 3,
    txtReadMore: '',
    isModalOpen: false,
    isVideoModalOpen: false,
    randomKey: 'random',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.asPath !== prevState.asPath) {
      let { cityName, hotelName } = nextProps;
      cityName = cityName.replace(/_/g, ' ');
      hotelName = hotelName.replace(/_/g, ' ');
      const selectedCity = _.find(
        nextProps.content.data.areas,
        city => city.name && city.name.toLowerCase() === cityName.toLowerCase(),
      );
      let selectedHotels;
      if (!nextProps.isConference) {
        selectedHotels = _.filter(
          nextProps.content.data.hotels,
          hotel => hotel.background && hotel.area_id === selectedCity.id && hotel.name !== 'The Capital Moloko',
        );
      } else {
        selectedHotels = _.filter(
          nextProps.content.data.hotels,
          hotel => hotel.has_conference && hotel.name !== 'The Capital Moloko',
        );
      }

      const initialSlide = selectedHotels.findIndex(
        hotel => hotel.menu_title.toLowerCase() === hotelName.toLowerCase(),
      );
      const selectedHotel = selectedHotels[initialSlide];

      let selectedRooms = _.filter(nextProps.content.data.rooms, room => room.hotel_id === selectedHotel.id);
      selectedRooms = _.orderBy(selectedRooms, 'publish_date', 'asc');

      let reubenField;
      if (selectedHotel.name === 'The Capital Moloko') {
        reubenField = {
          name: 'RESTAURANT BOOKINGS',
          description:
            "The first restaurant was founded in 2004 by chef Reuben Riffel in Franschhoek, where its current headquarters and flagship restaurant still serves his fine food. Chef Reuben has teamed up with The Capital Moloko in his first move outside the Western Cape, to offer Reuben's unique experience in Sandton.\n\nWe're excited to have Reuben's as part of The Capital family, and can't wait for you to indulge in this experience",
        };
      }

      return {
        selectedCity,
        selectedHotels,
        selectedHotel,
        selectedRooms,
        initialSlide,
        selectedRoom: selectedRooms[0],
        selectedFacilities: ApartmentsPage.getSelectedFacilities(nextProps, selectedHotel.id),
        reubenField,
        randomKey: generateRandomString(5, prevState.randomKey),
        activeFacilityKey: nextProps.isConference ? 'venues' : 'facilities',
        asPath: nextProps.asPath,
      };
    }
    return null;
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    if (this.refLongDescription && this.refLongDescription.offsetHeight < this.refLongDescription.scrollHeight) {
      setTimeout(() => {
        this.setState({ txtReadMore: 'Read more' });
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.asPath !== prevProps.asPath) {
      if (this.refLongDescription && this.refLongDescription.offsetHeight < this.refLongDescription.scrollHeight) {
        setTimeout(() => {
          this.setState({ txtReadMore: 'Read more' });
        });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  onAvailability = withDate => {
    const hotelName = this.state.selectedHotel.name.replace(/The Capital /g, '');
    let url = `https://booking.thecapital.co.za/?city=${this.state.selectedCity.name}&hotel=${hotelName}`;
    if (withDate) {
      url = `${url}&checkIn=${moment(this.props.calendar.checkInDate).format('YYYY-MM-DD')}&checkOut=${moment(
        this.props.calendar.checkOutDate,
      ).format('YYYY-MM-DD')}`;
    }
    const win = window.open(url, '_blank');
    win.focus();
  };

  onBookClicked = room => {
    this.setState({ selectedRoom: room, isModalOpen: true });
  };

  onVideoClicked = () => {
    this.setState({ isVideoModalOpen: true });
  };

  onCloseModal = modal => {
    this.setState({ [modal]: false });
  };

  onFacilityClick = key => {
    this.setState({ activeFacilityKey: key });
  };

  onReadMoreClick() {
    if (this.state.descriptionLines === 3) {
      this.setState({ descriptionLines: 0, txtReadMore: 'Show less' });
    } else {
      this.setState({ descriptionLines: 3, txtReadMore: 'Read more' });
    }
  }

  onTour = tour => {
    if (!tour) {
      alert('Virtual tour is coming soon');
    } else {
      const win = window.open(tour, '_blank');
      win.focus();
    }
  };

  onReuben = () => {
    const win = window.open('https://reubens.co.za/#contact', '_blank');
    win.focus();
  };

  onMolokoBook = () => {
    const win = window.open('https://thecapital.co.za/offers/offer/Moloko_Date_Night', '_blank');
    win.focus();
  };

  static getSelectedFacilities = (props, hotelID) => {
    if (!props.isConference) {
      return _.find(props.content.data.facilities, facility => facility.hotel_id === hotelID).categories;
    }
    return _.find(props.content.data.conf_services, conference => conference.hotel_id === hotelID).categories;
  };

  selectHotel = hotel => {
    let selectedRooms = _.filter(this.props.content.data.rooms, room => room.hotel_id === hotel.id);
    selectedRooms = _.orderBy(selectedRooms, 'publish_date', 'asc');
    const selectedFacilities = ApartmentsPage.getSelectedFacilities(this.props, hotel.id);

    this.setState({ selectedHotel: hotel, selectedRooms, selectedFacilities });
  };

  updateWindowDimensions = () => {
    let slidesToShow;
    if (window.innerWidth > 991) {
      slidesToShow = 4;
    } else if (window.innerWidth > 767) {
      slidesToShow = 2;
    } else {
      slidesToShow = 1;
    }

    this.setState({ slidesToShow });
  };

  render() {
    const {
      selectedHotel,
      selectedHotels,
      initialSlide,
      selectedFacilities,
      selectedRooms,
      reubenField,
      randomKey,
    } = this.state;
    const subImages = this.props.isConference ? selectedHotel.conferenceImages : selectedHotel.hotelImages;
    const windowTitle = this.props.isConference
      ? `The Capital - Conferences - ${selectedHotel.conf_title}`
      : selectedHotel.name;
    const videoUrl = this.props.isConference ? selectedHotel.conf_video_url : selectedHotel.video_url;

    return (
      <DivColumn id="hotel" style={{ flex: 'none' }} key={randomKey}>
        <Head>
          <title>{windowTitle}</title>
          <meta name="description" content="Apartments View" />
        </Head>

        <Styled.SliderWrapper>
          <ImageSlider style={{ afterChange: index => this.selectHotel(selectedHotels[index]), initialSlide }}>
            {selectedHotels.map(hotel => (
              <Styled.ContentWrapper key={hotel.name}>
                <Styled.Img src={this.props.isConference ? hotel.conf_background.src : hotel.background.src} />

                <Styled.TitleWrapper>
                  <Styled.TitleCenterWrapper>
                    <Styled.TitleContentWrapper>
                      <H1>{hotel.name}</H1>
                      <H2>
                        {this.props.isConference
                          ? hotel.conf_description.toUpperCase()
                          : hotel.description.toUpperCase()}
                      </H2>
                    </Styled.TitleContentWrapper>
                  </Styled.TitleCenterWrapper>
                </Styled.TitleWrapper>
              </Styled.ContentWrapper>
            ))}
          </ImageSlider>
        </Styled.SliderWrapper>

        <Styled.DescriptionWrapper>
          <Styled.H1>
            {this.props.isConference ? selectedHotel.conf_title_description : selectedHotel.title_description}
          </Styled.H1>
          <Styled.LongDescriptionWrapper>
            <DivColumn>
              <Styled.H6>
                {this.props.isConference ? selectedHotel.conf_short_description : selectedHotel.short_description}
              </Styled.H6>

              <Styled.LongDescription
                lines={this.state.descriptionLines}
                ref={ref => {
                  this.refLongDescription = ref;
                }}
              >
                {this.props.isConference ? selectedHotel.conf_long_description : selectedHotel.long_description}
              </Styled.LongDescription>

              <Styled.ReadMore onClick={() => this.onReadMoreClick()} isActive={this.state.txtReadMore}>
                {this.state.txtReadMore}
              </Styled.ReadMore>

              {(videoUrl || reubenField) && (
                <Styled.VideoButtonWrapper>
                  {videoUrl && (
                    <Styled.VideoLabel onClick={this.onVideoClicked}>
                      <ButtonLabel>WATCH VIDEO</ButtonLabel>
                    </Styled.VideoLabel>
                  )}
                  {reubenField && (
                    <Styled.VideoLabel onClick={this.onReuben} style={{ height: 'unset', padding: '3px 10px' }}>
                      <Styled.ReubenButtonLabel>
                        <Styled.ReubenImage src={reubenButton} />
                        MAKE RESERVATION
                      </Styled.ReubenButtonLabel>
                    </Styled.VideoLabel>
                  )}
                  {!this.props.isConference && reubenField && (
                    <Styled.VideoLabel onClick={this.onMolokoBook}>
                      <ButtonLabel>BOOK A DISCOUNTED DATE NIGHT PACKAGE</ButtonLabel>
                    </Styled.VideoLabel>
                  )}
                </Styled.VideoButtonWrapper>
              )}
            </DivColumn>
            <Styled.CalendarWrapper>
              <CalendarPicker onAvailability={() => this.onAvailability(true)} />
            </Styled.CalendarWrapper>
          </Styled.LongDescriptionWrapper>
        </Styled.DescriptionWrapper>

        <GoogleMap zoom={14} center={selectedHotel.location} />

        <ImageSlider
          style={{
            slidesToShow: this.state.slidesToShow,
            touchThreshold: 30,
            swipeToSlide: this.state.slidesToShow > 1,
          }}
        >
          {subImages.map((image, index) => (
            <Styled.ContentWrapper height={200} key={index} style={{ paddingRight: '1px' }}>
              <Styled.SubImg src={image.src} />
            </Styled.ContentWrapper>
          ))}
        </ImageSlider>

        <Styled.ContentContainer>
          <FacilityTab
            facilities={selectedFacilities}
            isConference={this.props.isConference}
            onFacilityClick={this.onFacilityClick}
            activeFacilityKey={this.state.activeFacilityKey}
          />

          {selectedRooms.map(room => (
            <Styled.PanelWrapper key={room.name}>
              <Styled.PanelImg src={room.images[0] ? room.images[0].src : room.images.src}>
                <Styled.ExploreButton onClick={() => this.onBookClicked(room)}>
                  <ButtonLabel>EXPLORE</ButtonLabel>
                </Styled.ExploreButton>
              </Styled.PanelImg>
              <Styled.PanelContentWrapper>
                <Styled.PanelContent>
                  <Styled.TitleButton onClick={() => this.onBookClicked(room)}>
                    <Styled.H1>{room.name}</Styled.H1>
                  </Styled.TitleButton>
                  <Styled.H2>{room.description}</Styled.H2>
                </Styled.PanelContent>
                <div style={{ backgroundColor: '#fff', height: 6 }} />
                <DivColumn>
                  <Styled.BookWrapper>
                    <Styled.PromotionLabel>Sign Up & Get 12% Off Today</Styled.PromotionLabel>
                    <Styled.BookLabel onClick={() => this.onAvailability(false)}>
                      <ButtonLabel>View Rates</ButtonLabel>
                    </Styled.BookLabel>
                  </Styled.BookWrapper>
                </DivColumn>
              </Styled.PanelContentWrapper>
            </Styled.PanelWrapper>
          ))}

          {reubenField && (
            <Styled.PanelWrapper>
              <Styled.PanelImg src={reubenImage} />
              <Styled.PanelContentWrapper>
                <Styled.PanelContent>
                  <Styled.H1>{reubenField.name}</Styled.H1>
                  <Styled.H2>{reubenField.description}</Styled.H2>
                </Styled.PanelContent>
                <div style={{ backgroundColor: '#fff', height: 6 }} />
                <DivColumn>
                  <Styled.BookWrapper>
                    <Styled.H3 style={{ padding: '5px' }}>Make a reservation for lunch or dinner</Styled.H3>
                    <Styled.BookLabel onClick={this.onReuben}>
                      <ButtonLabel>BOOK</ButtonLabel>
                    </Styled.BookLabel>
                  </Styled.BookWrapper>
                </DivColumn>
              </Styled.PanelContentWrapper>
            </Styled.PanelWrapper>
          )}
        </Styled.ContentContainer>

        <BookModal
          isOpen={this.state.isModalOpen}
          room={this.state.selectedRoom}
          onClose={() => this.onCloseModal('isModalOpen')}
          onTour={this.onTour}
          onBook={() => this.onAvailability(false)}
          onVideo={videoUrl && this.onVideoClicked}
        />

        {videoUrl && (
          <VideoModal
            isOpen={this.state.isVideoModalOpen}
            videoUrl={videoUrl}
            onClose={() => this.onCloseModal('isVideoModalOpen')}
          />
        )}
      </DivColumn>
    );
  }
}

ApartmentsPage.getInitialProps = async ctx => {
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
  if (!ctx.store.getState().global.content.data.rooms) {
    promises.push(
      db
        .ref('/content/rooms')
        .once('value')
        .then(snapshot => snapshot.val()),
    );
  } else {
    promises.push(null);
  }
  if (!ctx.store.getState().global.content.data.facilities) {
    promises.push(
      db
        .ref('/content/facilities')
        .once('value')
        .then(snapshot => snapshot.val()),
    );
  } else {
    promises.push(null);
  }

  if (!ctx.store.getState().global.content.data.conf_services) {
    promises.push(
      db
        .ref('/content/conf_services')
        .once('value')
        .then(snapshot => snapshot.val()),
    );
  }

  const [hotelData, areaData, roomData, facilities, confServices] = await Promise.all(promises);
  if (hotelData) {
    ctx.store.dispatch(HotelsDataLoaded(hotelData));
  }
  if (areaData) {
    ctx.store.dispatch(AreasDataLoaded(areaData));
  }
  if (roomData) {
    ctx.store.dispatch(RoomsDataLoaded(roomData));
  }
  if (facilities) {
    ctx.store.dispatch(FacilitiesDataLoaded(facilities));
  }
  if (confServices) {
    ctx.store.dispatch(ConfservicesDataLoaded(confServices));
  }

  return { isConference: ctx.asPath.startsWith('/conferences'), asPath: ctx.asPath, ...ctx.query };
};

ApartmentsPage.propTypes = {
  calendar: PropTypes.object,
  asPath: PropTypes.string,
  content: PropTypes.object,
  isConference: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  calendar: makeSelectCalendar(),
  content: makeSelectContent(),
  isMobileDevice: makeSelectMobileCheck(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(ApartmentsPage);

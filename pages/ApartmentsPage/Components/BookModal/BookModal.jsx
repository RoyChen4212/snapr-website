import React from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';

import { ImageSlider, ButtonLabel, DivRow } from '~components';
import icon360 from '~resources/icons/icon_360.png';
import iconVideo from '~resources/icons/icon_video.png';
import iconSquare from '~resources/icons/icon_square.png';
import iconBedRoom from '~resources/icons/icon_bedroom.png';
import iconPromotionBlack from '~resources/icons/icon_promotion_black.png';

import * as Styled from './styled';

class BookModal extends React.Component {
  state = {
    facilityHeight: undefined,
  };

  onEnter = () => {
    this.setState({ facilityHeight: this.facilityWrapper.clientHeight / 2 + 28 });
  };

  onExit = () => {
    this.setState({ facilityHeight: undefined });
    this.props.onClose();
  };

  render() {
    const { room, isOpen } = this.props;
    if (!room) return null;

    const images = this.props.room.images.src ? [this.props.room.images] : this.props.room.images;

    return (
      <AriaModal
        className={this.props.className}
        titleText="RoomModal"
        onExit={this.onExit}
        mounted={isOpen}
        initialFocus="#button"
        verticallyCenter
        underlayStyle={{ cursor: 'default' }}
        onEnter={this.onEnter}
      >
        <Styled.Content id="button">
          <ImageSlider>
            {images.map((image, index) => (
              <Styled.ImageWrapper key={index}>
                <Styled.Img src={image.src} />
              </Styled.ImageWrapper>
            ))}
          </ImageSlider>

          <Styled.ContentContainer>
            <Styled.TitleContainer>
              <Styled.TitleWrapper>
                <Styled.Title>{this.props.room.name}</Styled.Title>
                {/* <H2 style={{ color: 'black', margin: '2px 50px 0', fontSize: '25px' }}>a contemporary aesthetic for a short or long-stay.</H2> */}
                <Styled.Description>{this.props.room.description}</Styled.Description>
              </Styled.TitleWrapper>

              <DivRow style={{ justifyContent: 'center', flex: 'none' }}>
                <Styled.VirtualWrapper>
                  <Styled.VirtualButton onClick={() => this.props.onTour(this.props.room.tour)}>
                    <Styled.IconVirtual src={icon360} />
                    <Styled.VirtualText>{'360\nVIRTUAL\nTOUR'}</Styled.VirtualText>
                  </Styled.VirtualButton>
                </Styled.VirtualWrapper>

                {this.props.onVideo && (
                  <Styled.VirtualWrapper>
                    <Styled.VirtualButton style={{ marginLeft: 20 }} onClick={this.props.onVideo}>
                      <Styled.IconVirtual src={iconVideo} />
                      <Styled.VirtualText>{'EXPERIENCE\nMORE'}</Styled.VirtualText>
                    </Styled.VirtualButton>
                  </Styled.VirtualWrapper>
                )}
              </DivRow>
            </Styled.TitleContainer>

            <Styled.InfoWrapper>
              {this.props.room.size && (
                <Styled.Info>
                  <Styled.InfoIcon src={iconSquare} width={50} height={55} />
                  <Styled.InfoText>{this.props.room.size}sqm</Styled.InfoText>
                </Styled.Info>
              )}

              {this.props.room.bedroom && (
                <Styled.Info>
                  <Styled.InfoIcon src={iconBedRoom} width={65} height={47} />
                  <Styled.InfoText>{this.props.room.bedroom} Bedroom</Styled.InfoText>
                </Styled.Info>
              )}
            </Styled.InfoWrapper>

            <Styled.FacilityWrapper
              ref={ref => {
                this.facilityWrapper = ref;
              }}
              height={this.state.facilityHeight}
            >
              {this.props.room.facilities &&
                this.props.room.facilities.map((facility, index) => (
                  <Styled.FacilityItemWrapper key={index}>
                    -&nbsp;&nbsp;
                    <Styled.FacilityItem>{facility.title}</Styled.FacilityItem>
                  </Styled.FacilityItemWrapper>
                ))}
            </Styled.FacilityWrapper>

            {this.props.room.floor_plan && <Styled.FloorImg src={this.props.room.floor_plan.src} />}

            <Styled.ButtonWrapper>
              <Styled.PromotionImg src={iconPromotionBlack} />
              <Styled.BookButton onClick={this.props.onBook}>
                <ButtonLabel>BOOK</ButtonLabel>
              </Styled.BookButton>
            </Styled.ButtonWrapper>
          </Styled.ContentContainer>

          <Styled.CloseButton onClick={this.onExit}>
            <Styled.CloseButtonText>X CLOSE</Styled.CloseButtonText>
          </Styled.CloseButton>
        </Styled.Content>
      </AriaModal>
    );
  }
}

BookModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  room: PropTypes.object,
  onClose: PropTypes.func,
  onTour: PropTypes.func,
  onBook: PropTypes.func,
  onVideo: PropTypes.any,
};

export default BookModal;

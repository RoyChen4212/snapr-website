import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLabel } from '~components';
import AriaModal from 'react-aria-modal';

import * as Styled from './styled';

const OfferModal = ({ offer, isOpen, onBook, className, onClose }) => {
  if (!offer) return null;

  return (
    <AriaModal
      className={className}
      titleText="RoomModal"
      onExit={onClose}
      mounted={isOpen}
      initialFocus="#button"
      verticallyCenter
      underlayStyle={{ cursor: 'default' }}
    >
      <Styled.Content id="button">
        <Styled.ImageWrapper>
          <Styled.Img src={offer.main_image.src} />
        </Styled.ImageWrapper>

        <Styled.ContentContainer>
          <Styled.TitleContainer>
            <Styled.TitleWrapper>
              <Styled.Title>{offer.title}</Styled.Title>
            </Styled.TitleWrapper>

            <Styled.BookButton onClick={() => onBook(offer.link)}>
              <ButtonLabel>
                {offer.button_label}
              </ButtonLabel>
            </Styled.BookButton>
          </Styled.TitleContainer>

          <Styled.HtmlContent dangerouslySetInnerHTML={{ __html: offer.blog }} />

        </Styled.ContentContainer>

        <Styled.CloseButton onClick={onClose}>
          <Styled.CloseButtonText>X CLOSE</Styled.CloseButtonText>
        </Styled.CloseButton>
      </Styled.Content>
    </AriaModal>
  );
};

OfferModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  offer: PropTypes.object,
  onClose: PropTypes.func,
  onBook: PropTypes.func,
};

export default OfferModal;

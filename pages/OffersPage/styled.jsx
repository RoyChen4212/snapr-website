import styled from 'styled-components';
import { DivColumn, DivRow, H1 as NormalH1, H2 as NormalH2, H6 as NormalH6 } from '~components';
import { Media } from '~utils/constants';
import { CalendarWrapper as NormalCalendarWrapper } from '../HotelsPage/styled';

// region Title
export const TitleWrapper = styled(DivColumn)`
  margin: 200px 100px 0;

  ${Media.phone`
    margin: 200px 10px 0;
  `}
`;

export const H1 = styled(NormalH1)`
  font-size: 38px;
`;

export const H2 = styled(NormalH2)`
  margin-top: 10px;
  font-size: 27px;
`;
// endregion

// region Slider
export const ImageContainer = styled(DivRow)`
  flex: none;
  flex-wrap: wrap;
  margin-top: ${props => (props.isWelcome ? '80px' : '140px')};
  padding: 0 80px;

  ${Media.phone`
    flex-direction: column;
    margin-top: ${props => (props.isWelcome ? '40px' : '100px')};
    padding: 0 10px;
  `}
`;

export const Img = styled.img`
  width: 100%;
`;

export const ImgWrapper = styled(DivColumn)`
  flex: none;
  justify-content: center;
`;

export const ContentContainer = styled(DivColumn)`
  background: #fff;
  padding: 15px;
`;

export const ReadButton = styled(DivColumn)`
  flex: none;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  min-width: 140px;

  background-color: black;
  margin-top: 20px;
  padding: 9px 11px;

  label {
    font-size: 20px;
    color: white;
  }
`;

export const OfferTitle = styled(NormalH1)`
  color: black;
  font-size: 30px;
  word-break: break-word;
`;

export const OfferDescription = styled(NormalH6)`
  flex: 1;
  color: black;
  margin-top: 7px;
  font-size: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.3333333% - 50px);
  margin: 30px 0;
  padding: 2px;

  ${Media.phone`
    width: 100%;
  `}

  &:nth-child(3n + 2) {
    margin: 30px 60px;

    ${Media.phone`
      margin: 30px 0;
    `}
  }

  &,
  & * {
    cursor: pointer;
  }

  body.hasHover &:hover {
    ${Img} {
      opacity: 0.7;
    }
    ${ContentContainer} {
      background: black;
    }
    ${OfferTitle}, ${OfferDescription} {
      color: white;
    }
    ${ReadButton} {
      background-color: white;
      label {
        color: black;
      }
    }
  }

  &:focus,
  &:active {
    opacity: 0.5 !important;
  }
`;
// endregion

// region Calendar
export const CalendarWrapper = styled(NormalCalendarWrapper)`
  position: inherit;
  align-self: center;
  margin-top: 100px;

  ${Media.phone`
    margin: 0;
  `}
`;
// endregion

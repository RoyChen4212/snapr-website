import styled from 'styled-components';
import { H1 as NormalH1, H2 as NormalH2, H3 as NormalH3, H5 as NormalH5, DivColumn, DivRow, Button } from '~components';
import { CheckTitle, CheckContent, AvailabilityButton, PickerWrapper } from '~components/CalendarPicker/styled';
import { Media } from '~utils/constants';

export { TitleWrapper, SlideButton, SlideImg } from '../HomePage/styled';

export const Img = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.src});
  transition: transform 8s linear;
`;

export const SliderWrapper = styled.div`
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  body.hasHover &:hover {
    ${Img} {
      transform: scale(1.3);
    }
  }
`;

export const TitleCenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
`;

export const TitleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const H1 = styled(NormalH1)`
  font-size: 48px;

  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
`;

export const H2 = styled(NormalH2)`
  margin-top: 7px;
  font-size: 24px;

  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
`;

export const BookLabel = styled(Button)`
  background-color: #fff;
  padding: 10px 15px;

  label {
    font-size: 24px;
    color: #000;
  }
`;

export const H5 = styled(NormalH5)`
  font-size: 18px;
  margin-left: 8px;
`;

export const Panel = styled(DivColumn)`
  ${Media.phone`
    flex: none;
    align-items: center;
  `}
`;

export const PanelContent = styled(DivColumn)`
  margin: 100px 10px 15px 60px;

  ${Media.tablet`
    margin: 50px 10px 15px 40px;
  `}
  ${Media.phone`
    margin: 20px 10px;
    align-items: center;
    ${H1}, ${H2} {
      text-align: center;
    }
  `}
`;

export const PanelImg = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  flex: 1;
  width: 100%;
  min-height: 390px;

  ${Media.phone`
    flex: none;
  `}
`;

export const BookWrapper = styled(DivRow)`
  flex: none;
  margin-bottom: 38px;
  height: 40px;
  align-items: center;
`;

export const H3 = styled(NormalH3)`
  margin: 0 0 0 15px;
`;

export const PanelContainer = styled(DivRow)`
  flex: none;
  max-width: 1200px;
  width: 100%;

  ${Media.phone`
    flex-direction: column;
  `}
`;

export const PanelWrapper = styled(DivRow)`
  flex: none;
  justify-content: center;

  &:not(:first-child) {
    border-top: 4px solid white;
  }

  &:nth-child(even) {
    ${PanelContainer} {
      flex-direction: row-reverse;
      ${Media.phone`
        flex-direction: column;
      `}
    }
    ${BookWrapper} {
      align-self: flex-end;
      flex-direction: row-reverse;
      ${H3} {
        margin: 0 15px 0 0;
        ${Media.phone`
          margin: 0 0 0 15px !important;
        `};
      }

      ${Media.phone`
        align-self: unset;
        flex-direction: row;
      `}
    }
    ${PanelContent} {
      margin: 100px 60px 15px 20px;

      ${Media.tablet`
        margin: 50px 10px 15px 40px;
      `}
      ${Media.phone`
        align-self: normal;
        margin: 20px 10px;
      `}
    }
  }
`;

export const ContentContainer = styled(DivColumn)`
  flex: none;
  margin-top: 15px;
`;

export const PromotionIcon = styled.img`
  margin-left: 15px;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  width: 270px;
  right: 130px;
  top: calc(100vh - 250px);

  ${PickerWrapper} {
    padding: 10px 25px;
  }
  ${CheckTitle} {
    font-size: 15px;
  }
  ${CheckContent} {
    font-size: 35px;
    font-family: 'Proxima Nova';
    padding: 30px 5px;
  }
  ${AvailabilityButton} {
    border: none;
    margin: 0;
    padding: 5px;
    min-height: auto;
    label {
      font-size: 15px;
    }
  }

  ${Media.phone`
    width: auto;
    position: inherit;
    display: flex;
    justify-content: center;
    padding-top: 15px;
    
    ${PickerWrapper} {
      padding: 15px;
    }
    
    ${AvailabilityButton} {
      border: 1px solid black;
    }
    
    ${CheckTitle} {
      font-size: 20px;
    }
    ${CheckContent} {
      font-size: 55px;
      font-family: 'proxima_nova_ltthin';
      padding: 30px 10px;
    }
    ${AvailabilityButton} {
      padding: 10px;
      min-height: 80px;
      margin: 10px;
      label {
        font-size: 25px;
      }
    }
  `}
`;

export const TitleButton = styled(Button)`
  align-items: unset;
  justify-content: unset;
`;

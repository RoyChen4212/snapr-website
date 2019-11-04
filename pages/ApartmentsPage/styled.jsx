import styled from 'styled-components';
import {
  A,
  H1 as NormalH1,
  H2 as NormalH2,
  H3 as NormalH3,
  H4 as NormalH4,
  H5 as NormalH5,
  H6 as NormalH6,
  DivColumn,
  DivRow,
  Button,
  ButtonLabel,
} from '~components';
import { Media } from '~utils/constants';
import { CalendarWrapper as NormalCalendarWrapper } from '../HotelsPage/styled';

export { TitleWrapper } from '../HomePage/styled';

// region Slider
export const Img = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${props => props.src});
  background-position: center;
  transition: transform 8s linear;
`;

export const SliderWrapper = styled.div`
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  height: ${({ height }) => (height ? `${height}px` : '100vh')};
  position: relative;
  overflow: hidden;

  body.hasHover &:hover {
    ${Img} {
      transform: scale(1.3);
    }
  }
`;

export const SubImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${props => props.src});
  background-position: center;
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
// endregion

// region ContentWrapper
export const PanelContentWrapper = styled(DivColumn)``;

export const PanelContent = styled(DivColumn)`
  flex: none;
  margin: 30px;
`;

export const PanelWrapper = styled(DivRow)`
  flex: none;
  ${Media.phone`
    flex-direction: column;
  `}
`;

export const PanelImg = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 444px;
  min-height: 276px;

  ${Media.phone`
    width: 100%;
  `}
`;

export const ExploreButton = styled(Button)`
  flex: none;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 24px 84px;
  border: 2px solid #fff;

  label {
    font-size: 25px;
    color: #fff;
  }
`;

export const BookWrapper = styled(DivRow)`
  flex: none;
  margin: 0 30px;
  justify-content: flex-end;
  align-items: center;

  ${Media.phonePortrait`
    margin: 0;
  `}
`;

export const H3 = styled(NormalH3)`
  display: inline-block;
`;

export const PromotionLabel = styled(NormalH1)`
  font-size: 24px;
  padding: 5px;
`;

export const ContentContainer = styled(DivColumn)`
  flex: none;
  align-self: center;
  margin-top: 30px;
  max-width: 1200px;
  width: 100%;
  
  ${PanelWrapper} + ${PanelWrapper} {
    margin-top: 15px;
  }
  
  ${Media.phone`
    ${PanelWrapper} + ${PanelWrapper} {
      margin-top: 30px;
    }
  `}
`;

export const H1 = styled(NormalH1)`
  font-size: 48px;
`;

export const H2 = styled(NormalH2)`
  margin-top: 7px;
  font-size: 24px;
`;

export const BookLabel = styled(Button)`
  display: inline-block;
  height: 44px;
  background-color: #fff;
  padding: 10px 15px;
  margin-left: 15px;

  label {
    font-size: 24px;
    color: #000;
  }
`;

export const VideoButtonWrapper = styled(DivColumn)`
  align-items: flex-start;
`;

export const VideoLabel = styled(Button)`
  height: 44px;
  background-color: #fff;
  padding: 10px 15px;
  margin-top: 30px;
  margin-right: 40px;

  label {
    font-size: 20px;
    color: #000;
  }
`;

export const ReubenButtonLabel = styled(ButtonLabel)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ReubenImage = styled.img`
  height: 37px;
  margin-bottom: 5px;
`;

export const H4 = styled(NormalH4)`
  font-size: 18px;
`;

export const H5 = styled(NormalH5)`
  font-size: 18px;
`;

export const H6 = styled(NormalH6)``;

export const PromotionIcon = styled.img`
  margin-left: 15px;
`;

export const TitleButton = styled(Button)`
  align-items: unset;
  justify-content: unset;
`;

// endregion

// region DescriptionWrapper
export const ReadMore = styled(A)`
  margin-top: 25px;
  align-self: flex-start;
  display: ${props => (props.isActive ? 'unset' : 'none')};
`;

export const LongDescription = styled(H5)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => (props.lines === 0 ? 'none' : props.lines)}; /* number of lines to show */
  line-height: 24px;
  max-height: ${props => (props.lines === 0 ? 'none' : 24 * props.lines)}px; /* fallback */

  font-size: 19px;
  text-align: justify;
  margin: 25px 170px 0 0;

  ${Media.phone`
    margin: 25px 0 0;
  `}
`;

export const DescriptionWrapper = styled(DivColumn)`
  flex: none;
  margin: -110px 0 100px 80px;
  z-index: 1;

  ${H1} {
    font-size: 36px;
  }
  ${H6} {
    font-size: 36px;
    margin-right: 170px;
  }

  ${Media.phone`
    margin: 15px 15px 30px;
    
    ${H1} {
      font-size: 25px;
      margin-right: 10px;
    }
    ${H6} {
      font-size: 20px;
      margin-right: 10px;
      margin-top: 5px;
    }
  `}
`;

export const CalendarWrapper = styled(NormalCalendarWrapper)`
  position: inherit;
  margin: 40px 120px 0 0;

  ${Media.phone`
    margin: 0;
  `}
`;

export const LongDescriptionWrapper = styled(DivRow)`
  flex: none;
  ${Media.phone`
    flex-direction: column;
  `}
`;
// endregion

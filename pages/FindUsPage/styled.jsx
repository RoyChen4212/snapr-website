import styled from 'styled-components';
import { H1 as NormalH1, H2 as NormalH2, H3 as NormalH3, H5 as NormalH5, DivColumn, DivRow, Button } from '~components';
import { Media } from '~utils/constants';

export { TitleWrapper } from '../HomePage/styled';

export const Img = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.src});
  transition: transform 8s linear;
`;

export const ContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
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

export const PhoneIcon = styled.div`
  background-size: contain;
  background-position: center;
  background-image: url(/${props => props.src});
  margin-bottom: 1px;

  min-width: 35px;
  min-height: 35px;
  width: 35px;
  height: 35px;
`;

export const H5 = styled(NormalH5)`
  font-size: 18px;
  margin-left: 18px;

  a {
    font-family: 'proxima_nova_ltsemibold';
    color: #fff;
    text-decoration: none;
    -webkit-touch-callout: none;
    user-select: none;
  }
`;

export const PhoneWrapper = styled(DivRow)`
  flex: none;
  align-items: center;
  margin: 3px 0 3px 30px;
  
  ${H5} + ${H5} {
    margin-left: 0px;
  }
`;

export const AddressWrapper = styled(DivRow)`
  flex: none;
  align-items: center;
  margin: 8px 0 8px 4px;
  &,
  & * {
    cursor: pointer;
  }

  ${PhoneIcon} {
    width: 27px;
    height: 27px;
    min-width: 27px;
    min-height: 27px;

    margin-right: 4px;
  }
`;

export const VenueIconWrapper = styled(DivRow)`
  flex: none;
  flex-wrap: wrap;
  align-items: baseline;
  margin: 25px 0 0 -30px;
`;

export const H1 = styled(NormalH1)`
  font-size: 40px;

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

export const PanelContent = styled(DivColumn)`
  justify-content: center;
  margin: 10px 10px 10px 25px;

  ${Media.tablet`
    margin: 10px 10px 0px 25px;
  `}
  ${Media.phone`
    align-self: flex-start;
    margin: 20px 10px;
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
  margin: 10px 0 25px;
  height: 40px;
  align-items: center;
`;

export const H3 = styled(NormalH3)`
  margin: 0 0 0 15px;
`;

export const PromotionWrapper = styled(DivRow)`
  flex: none;
  align-items: center;
`;

export const PromotionImg = styled.div`
  width: 80px;
  height: 40px;
  min-width: 80px;
  margin: 0 0 0 15px;
  background-image: url(/${props => props.src});
  background-size: contain;
  background-position: center;
`;

export const Panel = styled(DivColumn)`
  ${Media.phone`
    flex: none;
    align-items: center;
  `}
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
      ${PromotionImg} {
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
      align-self: flex-end;
      justify-content: center;
      margin: 10px 25px 10px 10px;

      ${Media.tablet`
        margin: 10px 10px 0px 25px;
      `}
      ${Media.phone`
        align-self: flex-start;
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

export const TitleButton = styled(Button)`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ConfTitle = styled(H2)`
  cursor: default;
`;

export const EmailWrapper = styled(DivRow)`
  flex-wrap: wrap;
  padding-left: 18px;

  ${H5} {
    margin-left: 0;
  }
`;

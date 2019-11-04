import styled from 'styled-components';
import {
  Button,
  ButtonLabel as NormalButtonLabel,
  DivColumn,
  DivRow,
  H1 as NormalH1,
  H2 as NormalH2,
  H5 as NormalH5,
} from '~components';
import { Media } from '~utils/constants';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// region ImageWrapper
export const SliderWrapper = styled.div`
  min-height: 100vh;
`;
export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.src});
  transition: transform 8s linear;
`;

export const ImageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  flex: 1;
  overflow: hidden;
  position: relative;

  body.hasHover &:hover {
    ${BackgroundImg} {
      transform: scale(1.3);
    }
  }
`;

export const H2 = styled(NormalH2)`
  line-height: 1em;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% - 132px);
  padding: 0 170px;
  font-size: 32px;

  @media (max-width: 960px) {
    font-size: 25px;
    padding: 0 20px;
  }

  ${Media.phone`
    font-size: 20px;
  `}
`;

export const TitleWrapper = styled.div`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  padding: 0 170px;

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.35) 100px,
    rgba(0, 0, 0, 0.07) 150px,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.07) calc(100% - 200px),
    rgba(0, 0, 0, 0.35) calc(100% - 150px),
    rgba(0, 0, 0, 1) 100%
  );

  ${NormalH1} {
    font-size: 64px;
  }

  ${Media.phone`
    padding: 0 45px;
    
    ${NormalH1} {
      font-size: 40px;
    }
  `}
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

// region Main Content
export const VenueTitle = styled(NormalH5)`
  font-size: 35px;
  p {
    margin: 0;
  }
  strong {
    font-family: 'proxima_nova_altbold';
  }
`;
export const VenueDescription = styled(VenueTitle)`
  font-size: 20px;
  margin-top: 25px;
`;

export const LeftPanelContent = styled(DivColumn)`
  flex: none;
  padding: 40px 80px 40px 40px;

  ${Media.phone`
    padding: 20px 20px 50px;
    ${VenueTitle}, ${VenueDescription} {
      text-align: center;
    }
  `}
`;

export const LeftPanelWrapper = styled(DivColumn)`
  border-top: 4px solid white;

  ${Media.phone`
    flex: none;
    border-top: none;
  `}
`;

export const LeftPanel = styled(DivColumn)`
  flex: none;
  align-self: flex-end;
  max-width: 600px;
  width: 100%;

  ${Media.phone`
    max-width: none;
  `}
`;

export const PanelImg = styled.img`
  max-width: 600px;
  cursor: pointer;

  ${Media.desktop`
    width: 100%;
    max-width: unset;
  `}
`;

export const LoginWrapper = styled(DivRow)`
  flex: none;
  margin: 0 35px;
  
  ${NormalH5} {
    flex: 1;
    padding: 10px 5px 12px;
    background-color: #2D2D2D;
    font-size: 20px;
    text-align: center;
  }
  
  ${Button} {
    background-color: white;
    padding: 0 30px;
    border: 2px solid #2D2D2D;
  }
  
  ${Button} + ${Button} {
    margin-left: -2px;
  }
  
  ${Media.desktop`
    margin: 0 35px;
    flex-direction: column;
    
    ${Button} {
      height: 40px;
    }
    
    ${Button} + ${Button} {
      margin-left: 0;
      margin-top: -2px;
    }
  `}
  
  ${Media.phone`
    margin: 0 25px;
    flex-direction: column;
  `}
`;

export const RightPanelContent = styled(DivColumn)`
  flex: none;
  background-color: #fff;
  padding-bottom: 20px;

  ${Media.phone`
    padding: 20px 20px 50px;
    ${NormalH1}, ${NormalH5} {
      text-align: center;
    }
  `}
`;

export const RightPanelContainer = styled(DivColumn)`
  align-self: flex-start;

  ${Media.phone`
    flex: none;
    align-self: stretch;
  `}
`;
export const RightPanelWrapper = styled(DivColumn)`
  flex: none;
  border-bottom: 4px solid white;
  border-left: 4px solid white;
  ${Media.phone`
    border-bottom: none;
    border-top: 4px solid white;
    border-left: none;
  `}
`;

export const RightPanel = styled(LeftPanel)`
  flex: none;
  align-self: flex-start;
  padding-left: 30px;
  padding-bottom: 30px;

  ${Media.phone`
    padding-left: 0;
    padding-bottom: 0;
    max-width: none;
  `}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;

  ${Media.phone`
    flex-direction: column-reverse;
  `}
`;

export const ButtonLabel = styled(NormalButtonLabel)`
  color: #030303;
  font-size: 13px;
  letter-spacing: 1.5px;

  ${Media.phone`
    font-size: 22px;
  `}
`;

export const JoinDescription = styled(NormalH5)`
  background-color: #2d2d2d;
  text-align: center;
  margin: 1px 35px;
  padding: 10px 5px 12px;
  &,
  & * {
    color: white;
    font-size: 22px;
  }
  ${Media.desktop`
    margin: 15px 35px;
  `}
  ${Media.phone`
    margin: 15px 25px;
  `}
`;
// endregion

export const SlideButton = styled(Button)`
  position: absolute;
  left: calc(50% - 30px);
  top: calc(100% - 210px);
`;

export const SlideImg = styled.div`
  width: 60px;
  height: 60px;
  background-size: cover;
  background-position: center;
  background-image: url(/${props => props.src});
`;

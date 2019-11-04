import styled from 'styled-components';

import { H1 as NormalH1, H2 as NormalH2, H3 as NormalH3, H5 as NormalH5, DivColumn, DivRow, Button } from '~components';
import { Media } from '~utils/constants';
import { ReadMoreSection } from './Components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// region ImageWrapper

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.src});
  transition: transform 8s linear;
`;

export const ImageWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  body.hasHover &:hover {
    ${BackgroundImg} {
      transform: scale(1.3);
    }
  }
`;

export const TitleWrapper = styled.div`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  -webkit-touch-callout: none;
  user-select: none;
  pointer-events: none;

  padding: 0 170px;

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.35) 100px,
    rgba(0, 0, 0, 0.07) 150px,
    transparent 50%,
    rgba(0, 0, 0, 0.07) calc(100% - 150px),
    rgba(0, 0, 0, 0.35) calc(100% - 100px),
    rgba(0, 0, 0, 0.8) 100%
  );

  ${NormalH1} {
    font-size: 64px;
  }
  ${NormalH2} {
    font-size: 36px;
  }

  ${Media.phone`
    padding: 0 45px;
    
    ${NormalH1} {
      font-size: 40px;
    }
    ${NormalH2} {
      font-size: 20px;
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

export const VenueIcon = styled(DivColumn)`
  flex: none;
  align-items: center;

  ${NormalH5} {
    margin-top: 10px !important;
    font-size: 15px !important;
  }
`;

export const VenueIconWrapper = styled(DivRow)`
  justify-content: space-between;
  ${VenueIcon} img {
    width: 50px;
  }

  ${VenueIcon} ${NormalH3} {
    margin-top: 10px;
  }
`;
// endregion

// region Main Content
export const LeftPanel = styled(DivColumn)`
  margin-left: 150px;
  
  ${Media.tablet`
    margin-left: 30px;
  `}
  
  ${Media.phone`
    margin: 50px 0 0;
    max-width: none;
    width: unset;
  `}
  
  ${ReadMoreSection} + ${ReadMoreSection} {
    margin-top: 55px;
  };
`;

export const RightPanel = styled(DivColumn)`
  flex: none;
  align-self: flex-start;
  width: 513px;

  ${Media.phone`
    margin: 50px 0 0;
    max-width: none;
    width: 100%;
  `}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: -230px;
  max-width: 1200px;
  width: 100%;
  z-index: 1;
  padding: 0 30px;

  ${Media.phone`
    flex-direction: column;
    max-width: none;
    padding: 0 5px;
    margin-top: 30px;
  `}
`;

export const DropZone = styled(Button)`
  border-color: #dedede;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding: 10px 15px;
  background-color: rgba(0, 0, 0, 0.43);
`;

export const DropLabel = styled(NormalH5)`
  font-size: 19px;
  text-align: center;
`;

export const DropImg = styled.div`
  align-self: stretch;
  height: 30px;
  margin-top: 10px;
  background-size: contain;
  background-position: center;
  background-image: url(/${props => props.src});
`;

export const AvailableButton = styled(Button)`
  border-color: #dedede;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.43);
  height: 200px;

  label {
    font-size: 37px;
    color: white;
  }
`;

// endregion

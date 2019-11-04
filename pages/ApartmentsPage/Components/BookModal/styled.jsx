import styled from 'styled-components';
import { Media } from '~utils/constants';

import { DivRow, DivColumn, Button, H1, H5, ButtonLabel } from '~components';

export const Content = styled(DivColumn)`
  flex: none;
  background: #fff;
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 25px 0;
  border-radius: 0;

  ${Media.phone`
    margin: 0;
  `}
`;

export const Img = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${props => props.src});
  background-position: center;
  transition: transform 8s linear;
`;

export const ImageWrapper = styled.div`
  height: 500px;
  position: relative;
  overflow: hidden;

  body.hasHover &:hover {
    ${Img} {
      transform: scale(1.3);
    }
  }
`;

export const ContentContainer = styled(DivColumn)`
  flex: none;
  margin: 35px 30px 20px 70px;

  ${Media.phone`
    margin: 15px;
  `}
`;

export const ButtonWrapper = styled(DivRow)`
  flex: none;
  margin: 30px 0 0;
  justify-content: flex-end;
`;

export const PromotionImg = styled.div`
  width: 80px;
  height: 40px;
  margin-right: 30px;
  min-width: 80px;
  background-image: url(/${props => props.src});
  background-size: contain;
  background-position: center;
`;

export const BookButton = styled(Button)`
  background-color: black;
  padding: 10px 15px;
  margin-left: 15px;

  label {
    font-size: 24px;
    color: white;
  }
`;

export const Title = styled(H1)`
  color: black;
  font-size: 50px;
`;

export const Description = styled(H5)`
  margin-top: 25px;
  color: black;
  font-size: 20px;
`;

export const TitleContainer = styled(DivRow)`
  flex: none;
  ${Media.phone`
    flex-direction: column;
  `}
`;

export const TitleWrapper = styled(DivColumn)`
  margin-right: 80px;

  ${Media.phone`
    margin-right: 0;
  `}
`;

export const VirtualWrapper = styled(DivColumn)`
  flex: none;

  ${Media.phone`
    margin-top: 20px;
  `}
`;

export const VirtualButton = styled(Button)`
  & * {
    cursor: pointer;
  }
`;

export const IconVirtual = styled.div`
  width: 75px;
  height: 60px;
  background-size: contain;
  background-image: url(/${props => props.src});
  background-position: center;
`;

export const VirtualText = styled(H1)`
  margin-top: 13px;
  color: black;
  font-size: 19px;
  text-align: center;
  line-height: 22px;

  -webkit-touch-callout: none;
  user-select: none;
`;

export const Info = styled(DivRow)`
  flex: none;
  align-items: center;
`;

export const InfoWrapper = styled(DivRow)`
  flex: none;
  margin-top: 30px;
  
  ${Info} + ${Info} {
    margin-left: 50px;
  }
  
  ${Media.phone`
    flex-direction: column;
    
    ${Info} + ${Info} {
      margin-left: 0;
      margin-top: 10px;
    }
  `}
`;

export const InfoIcon = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-size: contain;
  background-image: url(/${props => props.src});
  background-position: center;
`;

export const InfoText = styled(H5)`
  margin-left: 25px;
  color: black;
  font-size: 25px;
`;

export const FacilityWrapper = styled(DivColumn)`
  flex: none;
  height: ${props => props.height}px;
  margin-top: 40px;
  max-width: 750px;
  flex-wrap: wrap;

  ${Media.phone`
    flex-direction: column;
  `}
`;

export const FacilityItem = styled(H1)`
  font-size: 20px;
  line-height: 28px;
  color: black;
`;

export const FacilityItemWrapper = styled(H1)`
  font-size: 20px;
  line-height: 28px;
  color: black;
  display: inline-flex;
  padding: 0 20px;
  width: 50%;

  ${Media.phone`
    width: 100%;
  `}
`;

export const FloorImg = styled.img`
  width: 100%;
  margin-top: 20px;
  align-self: center;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const CloseButtonText = styled(ButtonLabel)`
  font-size: 22px;
  color: white;
`;

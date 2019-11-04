import styled from 'styled-components';
import iconHeaderLogo from '~resources/icons/icon_header_logo.png';
import iconCapital from '~resources/icons/icon_capital.png';

import { Media } from '~utils/constants';
import DivColumn from '../DivColumn';

export const HeaderWrapper = styled(DivColumn)`
  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background: black;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: -100;
  }

  &:before {
    opacity: ${props => props.alpha};
  }
`;

export const IconImage = styled.img`
  height: 80px;
  cursor: pointer;
  content: url(/${iconHeaderLogo});

  ${Media.desktop`
    height: 70px;
  `}
  ${Media.tablet`
    content: url(/${iconCapital});
  `}
`;

export const ContentWrapper = styled.div`
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Media.phone`
    height: 100px;
  `}
`;

export const LeftContainer = styled(DivColumn)`
  align-items: center;
`;

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 450px;
  
  ${Media.desktop`
    min-width: 370px;
  `}
  ${Media.tablet`
    min-width: 350px;
  `}
  ${Media.phone`
    display: none;
  `}
`;

export const RightWrapper = styled(LeftWrapper)`
  padding-left: 30px;
  padding-right: 40px;
  ${Media.desktop`
    padding-left: 15px;
    padding-right: 30px;
  `}
  ${Media.tablet`
    padding-left: 20px;
  `}
`;

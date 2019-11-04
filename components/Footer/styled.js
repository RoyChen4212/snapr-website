import styled from 'styled-components';
import { Media } from '~utils/constants';
import DivColumn from '../DivColumn';
import DivRow from '../DivRow';
import ButtonLabel from '../Button/ButtonLabel';
import Button from '../Button/Button';
import H1 from '../H1';

export const Container = styled(DivRow)`
  flex: none;
  margin: 100px 100px 70px 70px;

  ${Media.desktop`
    margin: 100px 30px 70px 10px;
  `}
  ${Media.phone`
    margin: 50px 15px 30px;
    flex-direction: column;
  `}
`;

// region InfoWrapper
export const InfoWrapper = styled(DivColumn)`
  flex: none;
`;

export const LogoImg = styled.div`
  width: 70px;
  height: 75px;
  background-size: contain;
  background-position: center;
  background-image: url(/${props => props.src});
`;

export const InfoPhone = styled(H1)`
  margin-top: 45px;
  font-size: 20px;
  a {
    margin-left: 10px;
    font-family: 'proxima_nova_ltsemibold';
    color: #fff;
    text-decoration: none;
    -webkit-touch-callout: none;
    user-select: none;
  }
`;
export const InfoEmail = styled(InfoPhone)`
  margin-top: 3px;
  overflow-wrap: break-word;
`;
// endregion

// region Content Wrapper
export const ContentWrapper = styled(DivColumn)`
  margin-top: 85px;
  margin-left: 20px;
  align-items: flex-end;

  ${Media.desktop`
    margin-top: 30px;
  `}
  ${Media.phone`
    margin-left: 0;
    align-items: center;
  `}
`;

export const ExternalLink = styled.a`
  display: inline-flex;

  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'proxima_nova_ltsemibold';
  font-size: 16px;
  letter-spacing: 2px;

  color: #fff;

  body.hasHover &:hover,
  &:active {
    opacity: 0.5;
  }

  ${Media.desktop`
    font-size: 14px;
  `}
  ${Media.tablet`
    font-size: 14px;
  `}
`;

export const HeaderWrapper = styled(DivRow)`
  flex: none;
  align-items: center;
  justify-content: space-between;
  min-width: 900px;

  @media (max-width: 1440px) {
    min-width: 770px;
  }

  ${Media.desktop`
    flex-wrap: wrap;
    min-width: unset;
    a {
      margin-top: 15px;
      margin-right: 15px;
    }
    ${ExternalLink} {
      margin-top: 15px;
      margin-right: 15px;
    }
  `}
  ${Media.phone`
    flex-direction: column;
    align-self: flex-start;
    align-items: flex-start;
    a {
      font-size: 22px;
    }
    ${ExternalLink} {
      font-size: 22px;
    }
  `}
`;

export const JoinWrapper = styled(DivRow)`
  flex: none;
  margin-top: 25px;

  ${Media.phone`
    flex-direction: column;
  `}
`;

export const InputEmail = styled.input`
  width: 230px;
  font-family: 'Proxima Nova';
  font-size: 15px;
  padding: 10px 14px;
  background-color: #2d2d2d;
  color: white;
`;

export const JoinButton = styled(Button)`
  background-color: white;

  ${Media.phone`
    margin-top: 10px;
    height: 36px;    
  `}
`;

export const JoinButtonLabel = styled(ButtonLabel)`
  color: #030303;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  padding: 0 15px;
`;

export const SocialWrapper = styled(DivRow)`
  flex: none;
  margin-top: 25px;
  align-items: center;

  a + a {
    margin-left: 15px;
  }
`;

export const SocialImg = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  background-position: center;
  background-image: url(/${props => props.src});
`;

// endregion

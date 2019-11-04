import styled from 'styled-components';
import { Media } from '~utils/constants';

import { DivRow, DivColumn, Button, H1, ButtonLabel } from '~components';
import { HtmlContent as OriginalHtmlContent } from '../../BlogPage/styled';

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

export const BookButton = styled(Button)`
  align-self: flex-start;
  background-color: black;
  padding: 10px 15px;

  label {
    font-size: 24px;
    color: white;
  }

  ${Media.phone`
    margin-top: 10px;
  `}
`;

export const Title = styled(H1)`
  color: black;
  font-size: 50px;
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

export const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const CloseButtonText = styled(ButtonLabel)`
  font-size: 22px;
  color: white;
`;

export const HtmlContent = styled(OriginalHtmlContent)`
  margin: 10px 0 0;
  max-width: unset;
  &,
  & * {
    color: unset;
  }

  p {
    img {
      max-width: 100%;
    }
  }

  ${Media.phone`
    margin: 0;
  `}
`;

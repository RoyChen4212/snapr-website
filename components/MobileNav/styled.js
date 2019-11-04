import styled from 'styled-components';

import { Media } from '~utils/constants';
import Button from '../Button/Button';
import DivRow from '../DivRow';

export const ContentWrapper = styled.div`
  display: none;

  ${Media.phone`
    display: block;    
  `};
`;

export const BookButton = styled(Button)`
  background-color: #fff;
  padding: 10px;

  label {
    font-size: 30px;
    color: #000;
  }

  ${Media.phone`
    margin: 15px 25px 5px;
  `}
`;

export const LinkWrapper = styled(DivRow)`
  flex: none;
  color: white;

  padding: 12px;
  text-decoration: none;
  display: flex !important;
  align-items: center;

  span {
    margin-left: 15px;
    font-weight: 700;
    font-family: 'proxima_nova_ltthin';
  }

  i {
    width: 50px;
    text-align: center;
    font-size: 40px;
  }

  body.hasHover &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

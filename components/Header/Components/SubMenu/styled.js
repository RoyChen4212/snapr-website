import styled from 'styled-components';

import DivColumn from '../../../DivColumn';
import DivRow from '../../../DivRow';
import ButtonLabel from '../../../Button/ButtonLabel';
import Button from '../../../Button/Button';
import H6 from '../../../H6';

export const SubMenuWrapper = styled(DivColumn)`
  flex: none;
  background: #121212;
  opacity: ${props => props.alpha};
  transition: opacity 0.3s ease-in-out;
  padding: ${props => (props.alpha ? '30px 0' : 0)};
`;

export const MenuRow = styled(DivRow)`
  flex: none;
  padding: 23px 60px;
  align-items: center;

  body.hasHover &:hover {
    background-color: #232323;
  }

  ${props =>
    props.isClickable &&
    `
    &:focus,
    &:active {
      background-color: #232323;
      opacity: 0.5 !important;
    }
    &, & * {
      cursor: pointer !important;
    }
  `}
`;

export const MenuTitle = styled(H6)`
  min-width: 270px;

  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
`;

export const PromotionImg = styled.div`
  width: 80px;
  height: 40px;
  margin-right: 30px;
  min-width: 80px;
  background-image: url(/${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const Item = styled(Button)`
  align-items: flex-start;
  padding-right: 70px;
`;

export const ItemTitle = styled(ButtonLabel)`
  color: white;
  text-align: left;
  font-size: 21px;

  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;

export const ItemDescription = styled(ButtonLabel)`
  color: #586e65;
  text-align: left;
  font-size: 14px;

  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;

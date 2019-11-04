import styled from 'styled-components';
import { Media } from '~utils/constants';

import NormalH6 from '../H6';
import DivColumn from '../DivColumn';
import DivRow from '../DivRow';
import Button from '../Button/Button';
import ButtonLabel from '../Button/ButtonLabel';

export const CheckTitle = styled(NormalH6)`
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;

  background-color: #000;
  padding: 10px 0;
  text-align: center;
  font-size: 20px;
`;

export const CheckContent = styled(NormalH6)`
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;

  color: #000;
  padding: 30px 10px;
  text-align: center;
  font-size: 55px;
`;

export const CheckInWrapper = styled(DivColumn)`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  margin: 10px;
  cursor: pointer;
  border: 1px solid #000;
`;

export const PickerWrapper = styled.div`
  background-color: #fff;
  padding: 25px;

  ${Media.phone`
    padding: 15px;
  `}
`;

export const AvailabilityButton = styled(Button)`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: stretch;
  margin: 10px;
  border: 1px solid #000;
  padding: 10px;
  min-height: 80px;
`;

export const AvailabilityLabel = styled(ButtonLabel)`
  width: 100%;
  white-space: pre-wrap;
  font-size: 25px;
`;

export const ContentWrapper = styled(DivRow)`
  flex-wrap: wrap;

  ${Media.phone`
    justify-content: center;
  `}
`;

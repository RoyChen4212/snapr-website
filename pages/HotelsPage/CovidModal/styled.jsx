import styled from 'styled-components';

import { Media } from '~utils/constants';
import { DivRow, DivColumn, Button, H1, H5 } from '~components';

export const Content = styled(DivColumn)`
  flex: none;
  background: #fff;
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 25px 0;
  border-radius: 0;
  padding: 30px;

  ${Media.phone`
    margin: 0;
  `}
`;

export const TitleContainer = styled(DivRow)`
  flex: none;
  align-items: center;
  justify-content: space-between;

  ${Media.phone`
    flex-direction: column;
  `}
`;

export const ContentContainer = styled(H5)`
  flex: none;
  color: black;
  margin-top: 15px;
  font-size: 20px;
  line-height: 1.3em;

  ${Media.phone`
    margin: 15px;
  `}
`;

export const BookButton = styled(Button)`
  background-color: black;
  padding: 10px 15px;
  margin-left: 15px;

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
  font-size: 35px;
  text-align: center;
`;

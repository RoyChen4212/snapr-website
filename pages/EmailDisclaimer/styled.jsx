import styled from 'styled-components';
import { DivColumn, H6 as NormalH6 } from '~components';
import { Media } from '~utils/constants';

export const Container = styled(DivColumn)`
  flex: none;
  align-items: center;
`;

export const Content = styled(NormalH6)`
  flex: none;
  margin: 130px 10px 0;
  max-width: 900px;
  color: white;
  line-height: unset;
  font-size: unset;

  h1,
  h2,
  h3 {
    font-family: 'proxima_nova_ltsemibold';
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 28px;
  }
  h4 {
    font-family: 'Proxima Nova';
    font-size: 24px;
    font-weight: normal;
  }

  a {
    color: white;
  }

  ${Media.phone`
    margin: 100px 10px 0;
  `}
`;

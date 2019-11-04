import styled from 'styled-components';
import { DivColumn, H6 as NormalH6 } from '~components';
import { Media } from '~utils/constants';

export const Container = styled(DivColumn)`
  flex: none;
  align-items: center;
`;

export const HtmlContent = styled(NormalH6)`
  flex: none;
  margin: 150px 0 0;
  max-width: 900px;
  color: white;
  line-height: unset;
  font-size: unset;

  iframe {
    height: 500px;
  }

  h1,
  h2,
  h3,
  h4 {
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
    font-size: 24px;
  }

  p {
    font-size: 20px;
    max-width: 100%;

    strong {
      font-family: 'proxima_nova_ltsemibold';
    }
  }

  ul {
    font-size: 20px;
  }

  ${Media.phone`
    margin: 200px 10px 0;
  `}
`;

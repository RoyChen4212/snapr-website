import styled from 'styled-components';
import { Media } from '~utils/constants';

import { DivColumn } from '~components';

export const Content = styled(DivColumn)`
  background: #000;
  position: relative;
  width: 1000px;
  max-width: 100%;
  margin: 25px 0;
  border-radius: 0;

  ${Media.phone`
    margin: 0;
  `}
`;

export const ContentContainer = styled(DivColumn)`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${Media.phone`
    margin: 15px;
  `}
`;

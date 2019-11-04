import styled from 'styled-components';

import { A, H6, H1 as NormalH1, DivColumn } from '~components';
import { Media } from '~utils/constants';

export const Content = styled(DivColumn)`
  flex: none;
`;
export const ReadMore = styled(A)`
  margin-top: 38px;
  align-self: flex-start;
  display: ${props => (props.isActive ? 'unset' : 'none')};
  font-size: 20px;
`;

export const H1 = styled(NormalH1)`
  font-size: 40px;
`;

export const LongDescription = styled(H6)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => (props.lines === 0 ? 'none' : props.lines)}; /* number of lines to show */
  line-height: 27px;
  max-height: ${props => (props.lines === 0 ? 'none' : `${27 * props.lines}px`)}; /* fallback */

  font-size: 22px;
  margin: 10px 0 0;

  ${Media.phone`
    margin: 25px 0 0;
  `}
`;

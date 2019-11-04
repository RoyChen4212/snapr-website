import styled from 'styled-components';

import DivColumn from '../DivColumn';

const Button = styled(DivColumn)`
  flex: none;
  body.hasHover &:hover {
    opacity: 0.8;
  }

  &:focus,
  &:active {
    opacity: 0.5 !important;
  }

  &,
  & * {
    cursor: pointer;
  }

  align-items: center;
  justify-content: center;
`;

export default Button;

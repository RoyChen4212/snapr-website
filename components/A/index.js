import styled from 'styled-components';

const A = styled.a`
  color: #fff;

  body.hasHover &:hover,
  &:focus,
  &:active {
    opacity: 0.5;
  }

  cursor: pointer;

  font-family: 'proxima_nova_altbold';
  font-size: 18px;

  text-decoration: none;
  -webkit-touch-callout: none;
  user-select: none;
`;

export default A;

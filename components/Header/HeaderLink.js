import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '~utils/config/routes';
import styled from 'styled-components';
import { Media } from '~utils/constants';

const LinkA = styled.a`
  display: inline-flex;

  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'proxima_nova_ltsemibold';
  font-size: 16px;
  letter-spacing: 2px;

  color: #fff;

  body.hasHover &:hover,
  &:active {
    opacity: 0.5;
  }

  ${Media.desktop`
    font-size: 14px;
  `}
  ${Media.tablet`
    font-size: 14px;
  `}
`;

const HeaderLink = ({ className, route, children, ...rest }) => (
  <Link route={route}>
    <LinkA className={className} {...rest}>
      {children}
    </LinkA>
  </Link>
);

HeaderLink.propTypes = {
  route: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default HeaderLink;

import React from 'react';
import HeaderLink from '../Header/HeaderLink';
import * as Styled from './styled';
import AppConfig from '~utils/config/config';

import iconCapital from '~resources/icons/icon_capital.png';
import iconFacebook from '~resources/icons/icon_facebook.png';
import iconInstagram from '~resources/icons/icon_instagram.png';
import iconLinkedIn from '~resources/icons/icon_linkedin.png';

class Footer extends React.Component {
  onJoinClicked = () => {
    const url = 'https://booking.thecapital.co.za/';
    const win = window.open(url, '_blank');
    win.focus();
  };

  onChangeEmail = () => {};

  render() {
    return (
      <Styled.Container>
        <Styled.InfoWrapper>
          <Styled.LogoImg src={iconCapital} />
          <Styled.InfoPhone>
            PHONE<a href="tel:270112909700">+27 (0)11 290 9700</a>
          </Styled.InfoPhone>
          <Styled.InfoEmail>
            EMAIL<a href="mailto:reservations@thecapital.co.za">reservations@thecapital.co.za</a>
          </Styled.InfoEmail>
        </Styled.InfoWrapper>

        <Styled.ContentWrapper>
          <Styled.HeaderWrapper>
            <HeaderLink route="/hotels">
              HOTELS
              <br />& APARTMENTS
            </HeaderLink>
            <HeaderLink
              route={`/conferences/${AppConfig.Menu.CONFERENCES[0].title}/${
                AppConfig.Menu.CONFERENCES[0].items[0].route
              }`}
            >
              EVENTS
              <br />& CONFERENCES
            </HeaderLink>
            <HeaderLink route="/offers">
              GREAT
              <br /> DEALS
            </HeaderLink>
            <HeaderLink route="/join">
              LOGIN
              <br />
              SIGNUP
            </HeaderLink>
            <HeaderLink route="/careers">CAREERS</HeaderLink>
            <Styled.ExternalLink href="http://invest.thecapital.co.za">INVEST</Styled.ExternalLink>
            <HeaderLink route="/find-us">
              ABOUT US
              <br />
              FIND US
            </HeaderLink>
          </Styled.HeaderWrapper>

          <Styled.JoinWrapper>
            <Styled.InputEmail onChange={this.onChangeEmail} placeholder="Your email address" />
            <Styled.JoinButton onClick={this.onJoinClicked}>
              <Styled.JoinButtonLabel>JOIN OUR LIST</Styled.JoinButtonLabel>
            </Styled.JoinButton>
          </Styled.JoinWrapper>

          <Styled.SocialWrapper>
            <HeaderLink route="/PrivacyPolicy.pdf">Privacy Policy</HeaderLink>

            <a href="https://www.facebook.com/TheCapitalHotelsandApartments" target="_blank">
              <Styled.SocialImg src={iconFacebook} />
            </a>
            <a href="https://www.instagram.com/thecapitalhotelsandapartments" target="_blank">
              <Styled.SocialImg src={iconInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/the-capital-hotel-group" target="_blank">
              <Styled.SocialImg src={iconLinkedIn} />
            </a>
          </Styled.SocialWrapper>
        </Styled.ContentWrapper>
      </Styled.Container>
    );
  }
}

export default Footer;

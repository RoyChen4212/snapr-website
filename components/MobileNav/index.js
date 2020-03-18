import React from 'react';

import { slide as BurgerMenu } from 'react-burger-menu';
import { Router } from '~utils/config/routes';

import AppConfig from '~utils/config/config';
import * as Styled from './styled';
import ButtonLabel from '../Button/ButtonLabel';
import './BurgerMenu.scss';

class MobileNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };

    // AppConfig.Menu.HOTELS = _.map(props.content.data.areas, (area) => {
    //   const hotels = _.filter(props.content.data.hotels, (hotel) => hotel.area_id === area.id);
    //   const items = _.map(hotels, (hotel) => ({ title: hotel.menu_title, description: hotel.menu_description, route: hotel.menu_title.replace(/\s/g, '_') }));
    //   return { title: area.name, items };
    // });
    // AppConfig.Menu.CONFERENCES = _.reduce(props.content.data.areas, (result, value, key) => {
    //   const hotels = _.filter(props.content.data.hotels, (hotel) => (hotel.area_id === value.id) && hotel.has_conference);
    //   if (hotels.length > 0) {
    //     const items = _.map(hotels, (hotel) => ({ title: hotel.menu_title, description: hotel.menu_description, route: hotel.menu_title.replace(/\s/g, '_') }));
    //     result.push({ title: value.name, items });
    //   }
    //   return result;
    // }, []);
  }

  onBookClicked = () => {
    const url = 'https://booking.thecapital.co.za/';
    const win = window.open(url, '_blank');
    win.focus();
  };

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ isMenuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  handleMenuClicked = route => {
    Router.pushRoute(route);
    this.setState({ isMenuOpen: false });
  };

  render() {
    return (
      <Styled.ContentWrapper>
        <BurgerMenu
          id="slide"
          isOpen={this.state.isMenuOpen}
          onStateChange={state => this.handleStateChange(state)}
          right
        >
          <div>
            <Styled.BookButton onClick={this.onBookClicked}>
              <ButtonLabel>BOOK NOW</ButtonLabel>
            </Styled.BookButton>
          </div>
          <Styled.LinkWrapper onClick={() => this.handleMenuClicked('/hotels')}>
            <i className="fas fa-h-square" />
            <span>
              HOTELS
              <br />& APARTMENTS
            </span>
          </Styled.LinkWrapper>
          <Styled.LinkWrapper
            onClick={() =>
              this.handleMenuClicked(
                `/conferences/${AppConfig.Menu.CONFERENCES[0].title}/${AppConfig.Menu.CONFERENCES[0].items[0].route}`,
              )
            }
          >
            <i className="fas fa-building" />
            <span>
              EVENTS
              <br />& CONFERENCES
            </span>
          </Styled.LinkWrapper>
          <Styled.LinkWrapper onClick={() => this.handleMenuClicked('/offers')}>
            <i className="fas fa-street-view" />
            <span>
              GREAT
              <br /> DEALS
            </span>
          </Styled.LinkWrapper>
          <Styled.LinkWrapper onClick={() => this.handleMenuClicked('/join')}>
            <i className="fas fa-money-bill-alt" />
            <span>
              LOGIN
              <br />
              SIGNUP
            </span>
          </Styled.LinkWrapper>
          <Styled.LinkWrapper onClick={() => this.handleMenuClicked('/careers')}>
            <i className="fas fa-gift" />
            <span>CAREERS</span>
          </Styled.LinkWrapper>
          <Styled.LinkWrapper onClick={() => this.handleMenuClicked('/find-us')}>
            <i className="fas fa-user" />
            <span>FIND US</span>
          </Styled.LinkWrapper>
          <Styled.LinkWrapper onClick={() => this.handleMenuClicked('/find-us/about')}>
            <i className="fas fa-address-card" />
            <span>ABOUT US</span>
          </Styled.LinkWrapper>
        </BurgerMenu>
      </Styled.ContentWrapper>
    );
  }
}

MobileNav.propTypes = {
  // content: PropTypes.object,
};

export default MobileNav;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '~utils/config/routes';

import HeaderLink from './HeaderLink';
import * as Styled from './styled';
import SubMenu from './Components/SubMenu';
import AppConfig from '~/utils/config/config';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: '',
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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onMenuHover = menu => {
    this.setState({ selectedMenu: menu });
  };

  onMenuLeave = () => {
    this.setState({ selectedMenu: '' });
  };

  onSubClicked = () => {
    this.setState({ selectedMenu: '' });
  };

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    this.setState({ alpha: scrollTop > 100 ? 1 : 0 });
  };

  render() {
    return (
      <Styled.HeaderWrapper alpha={this.state.alpha} onMouseLeave={this.onMenuLeave}>
        <Styled.ContentWrapper>
          <Styled.LeftContainer>
            <Styled.LeftWrapper>
              <HeaderLink route="/hotels" onMouseEnter={() => this.onMenuHover('HOTELS')} onClick={this.onSubClicked}>
                HOTELS
                <br />& APARTMENTS
              </HeaderLink>
              <HeaderLink
                route="/conferences"
                onMouseEnter={() => this.onMenuHover('CONFERENCES')}
                onClick={this.onSubClicked}
              >
                EVENTS
                <br />& CONFERENCES
              </HeaderLink>
              <HeaderLink route="/offers" onMouseEnter={() => this.onMenuHover('OFFERS')} onClick={this.onSubClicked}>
                GREAT
                <br /> DEALS
              </HeaderLink>
            </Styled.LeftWrapper>
          </Styled.LeftContainer>

          <Link route="/">
            <Styled.IconImage alt="TheCapital - Icon" onClick={this.onSubClicked} />
          </Link>

          <Styled.LeftContainer>
            <Styled.RightWrapper>
              <HeaderLink route="/join" onMouseEnter={() => this.onMenuHover('LOGIN')} onClick={this.onSubClicked}>
                LOGIN
                <br />
                SIGNUP
              </HeaderLink>
              <HeaderLink route="/careers" onMouseEnter={() => this.onMenuHover('CAREERS')} onClick={this.onSubClicked}>
                CAREERS
              </HeaderLink>
              <HeaderLink route="/find-us" onMouseEnter={() => this.onMenuHover('FINDUS')} onClick={this.onSubClicked}>
                ABOUT US
                <br />
                FIND US
              </HeaderLink>
            </Styled.RightWrapper>
          </Styled.LeftContainer>
        </Styled.ContentWrapper>

        <SubMenu
          menu={this.state.selectedMenu}
          menus={AppConfig.Menu[this.state.selectedMenu] || []}
          onItemClicked={this.onSubClicked}
          {...this.props}
        />
      </Styled.HeaderWrapper>
    );
  }
}

Header.propTypes = {
  content: PropTypes.object,
};

export default Header;

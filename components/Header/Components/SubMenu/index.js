import React from 'react';
import PropTypes from 'prop-types';

import { Router } from '~utils/config/routes';
import iconPromotion from '~resources/icons/icon_promotion.png';

import DivColumn from '../../../DivColumn';
import * as Styled from './styled';

const SubMenu = props => {
  const onItemRoute = (route, isSub) => {
    props.onItemClicked();

    let navRoute = route;
    if (isSub) {
      if (props.menu === 'HOTELS') {
        navRoute = `/hotels/${route.replace(/\s/g, '_')}`;
      } else if (props.menu === 'CONFERENCES') {
        navRoute = `/conferences/${route.replace(/\s/g, '_')}`;
      }
    }
    Router.pushRoute(navRoute);
  };

  const onItemLink = link => {
    props.onItemClicked();

    const win = window.open(link, '_blank');
    win.focus();
  };

  return (
    <Styled.SubMenuWrapper alpha={props.menus.length === 0 ? 0 : 1}>
      {props.menus.map(menu => (
        <Styled.MenuRow
          key={menu.title}
          isClickable={!!(menu.route || menu.link)}
          onClick={menu.route ? () => onItemRoute(menu.route) : menu.link && (() => onItemLink(menu.link))}
        >
          <Styled.MenuTitle>{menu.title}</Styled.MenuTitle>
          {menu.isPromotion && <Styled.PromotionImg src={iconPromotion} />}
          {menu.items.map(item => (
            <DivColumn style={{ flex: 'none' }} key={item.title}>
              {item.route || item.link ? (
                <Styled.Item
                  onClick={
                    item.route ? () => onItemRoute(`${menu.title}/${item.route}`, true) : () => onItemLink(item.link)
                  }
                >
                  <Styled.ItemTitle>{item.title}</Styled.ItemTitle>
                  <Styled.ItemDescription>{item.description}</Styled.ItemDescription>
                </Styled.Item>
              ) : (
                <DivColumn style={{ flex: 'none' }}>
                  <Styled.ItemTitle disabled>{item.title}</Styled.ItemTitle>
                  <Styled.ItemDescription disabled>{item.description}</Styled.ItemDescription>
                </DivColumn>
              )}
            </DivColumn>
          ))}
        </Styled.MenuRow>
      ))}
    </Styled.SubMenuWrapper>
  );
};

SubMenu.propTypes = {
  menu: PropTypes.string.isRequired,
  menus: PropTypes.array.isRequired,
  onItemClicked: PropTypes.func.isRequired,
};

export default SubMenu;

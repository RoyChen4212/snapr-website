import { css } from 'styled-components';

export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

const sizes = {
  desktop: 1199, // original desktop
  tablet: 991, // tablet portrait
  phone: 768, // phone landscape && iPad Portrait = 768
  phonePortrait: 575, // phone portrait
};

// iterate through the sizes and create a media template
const TempMedia = Object.keys(sizes).reduce((accumulator, label) => {
  // eslint-disable-next-line no-param-reassign
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const Media = { ...TempMedia };

export const AryRedirects = [
  { path: '/paul', url: 'https://hack.thecapital.co.za/paul/' },
  { path: '/sorbet', url: 'https://hack.thecapital.co.za/sorbet/' },
  { path: '/laser-beautique', url: 'https://hack.thecapital.co.za/laser-beautique/' },
  { path: '/eyeconik', url: 'https://hack.thecapital.co.za/eyeconik/' },
  { path: '/loccitane', url: 'https://hack.thecapital.co.za/loccitane/' },
  { path: '/aldo', url: 'https://hack.thecapital.co.za/aldo/' },
  { path: '/moyo', url: 'https://hack.thecapital.co.za/moyo/' },
  { path: '/tashas', url: 'https://hack.thecapital.co.za/tashas/' },
  { path: '/sorbet-man', url: 'https://hack.thecapital.co.za/sorbet-man/' },
  { path: '/vilebrequin', url: 'https://hack.thecapital.co.za/vilebrequin/' },
  { path: '/cavalier', url: 'https://hack.thecapital.co.za/cavalier/' },
  { path: '/camelot-spa', url: 'https://hack.thecapital.co.za/camelot-spa/' },
  { path: '/fabiani', url: 'https://hack.thecapital.co.za/fabiani/' },
  { path: '/tea-merchant', url: 'https://hack.thecapital.co.za/tea-merchant/' },
  { path: '/brow-studio', url: 'https://hack.thecapital.co.za/brow-studio/' },
  { path: '/flower-market', url: 'https://hack.thecapital.co.za/flower-market/' },
  { path: '/izipizi-sunglassses', url: 'https://hack.thecapital.co.za/izipizi-sunglassses/' },
];

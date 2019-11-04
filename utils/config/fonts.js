import '~resources/fonts/Mark Simonson - Proxima Nova Alt Black-webfont.woff2';
import '~resources/fonts/Mark Simonson - Proxima Nova Alt Black-webfont.woff';
import '~resources/fonts/Mark Simonson - Proxima Nova Alt Black-webfont.ttf';
import '~resources/fonts/Mark Simonson - Proxima Nova Alt Black-webfont.svg';

import '~resources/fonts/Mark Simonson - Proxima Nova Semibold-webfont.eot';
import '~resources/fonts/Mark Simonson - Proxima Nova Semibold-webfont.woff2';
import '~resources/fonts/Mark Simonson - Proxima Nova Semibold-webfont.ttf';
import '~resources/fonts/Mark Simonson - Proxima Nova Semibold-webfont.svg';

import '~resources/fonts/Mark Simonson - Proxima Nova Alt Bold-webfont.eot';
import '~resources/fonts/Mark Simonson - Proxima Nova Alt Bold-webfont.woff2';
import '~resources/fonts/Mark Simonson - Proxima Nova Alt Bold-webfont.woff';
import '~resources/fonts/Mark Simonson - Proxima Nova Alt Bold-webfont.ttf';
import '~resources/fonts/Mark Simonson - Proxima Nova Alt Bold-webfont.svg';

import '~resources/fonts/Mark Simonson - Proxima Nova Alt Regular-webfont.eot';
import '~resources/fonts/Mark Simonson - Proxima Nova Alt Regular-webfont.woff';
import '~resources/fonts/Mark Simonson - Proxima Nova Alt Regular-webfont.ttf';
import '~resources/fonts/Mark Simonson - Proxima Nova Alt Regular-webfont.svg';

import '~resources/fonts/Mark Simonson - Proxima Nova ScOsf Thin-webfont.eot';
import '~resources/fonts/Mark Simonson - Proxima Nova ScOsf Thin-webfont.woff';
import '~resources/fonts/Mark Simonson - Proxima Nova ScOsf Thin-webfont.ttf';
import '~resources/fonts/Mark Simonson - Proxima Nova ScOsf Thin-webfont.svg';

import '~resources/fonts/Mark Simonson - Proxima Nova Thin-webfont.eot';
import '~resources/fonts/Mark Simonson - Proxima Nova Thin-webfont.woff2';
import '~resources/fonts/Mark Simonson - Proxima Nova Thin-webfont.woff';
import '~resources/fonts/Mark Simonson - Proxima Nova Thin-webfont.ttf';
import '~resources/fonts/Mark Simonson - Proxima Nova Thin-webfont.svg';

const fontFace = `
@font-face {
    font-family: 'proxima_nova_altblack';
    /*src: url('/_next/static/Mark Simonson - Proxima Nova Alt Black-webfont.eot');*/
    /*src: url('/_next/static/Mark Simonson - Proxima Nova Alt Black-webfont.eot?#iefix') format('embedded-opentype'),*/
    src:  url('/_next/static/Mark Simonson - Proxima Nova Alt Black-webfont.woff2') format('woff2'),
          url('/_next/static/Mark Simonson - Proxima Nova Alt Black-webfont.woff') format('woff'),
          url('/_next/static/Mark Simonson - Proxima Nova Alt Black-webfont.ttf') format('truetype'),
          url('/_next/static/Mark Simonson - Proxima Nova Alt Black-webfont.svg#proxima_nova_altblack') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'proxima_nova_altbold';
    src: url('/_next/static/Mark Simonson - Proxima Nova Alt Bold-webfont.eot');
    src: url('/_next/static/Mark Simonson - Proxima Nova Alt Bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/_next/static/Mark Simonson - Proxima Nova Alt Bold-webfont.woff2') format('woff2'),
         url('/_next/static/Mark Simonson - Proxima Nova Alt Bold-webfont.woff') format('woff'),
         url('/_next/static/Mark Simonson - Proxima Nova Alt Bold-webfont.ttf') format('truetype'),
         url('/_next/static/Mark Simonson - Proxima Nova Alt Bold-webfont.svg#proxima_nova_altbold') format('svg');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'Proxima Nova';
    src: url('/_next/static/Mark Simonson - Proxima Nova Alt Regular-webfont.eot');
    src: url('/_next/static/Mark Simonson - Proxima Nova Alt Regular-webfont.eot?#iefix') format('embedded-opentype'),
         /*url('/_next/static/Mark Simonson - Proxima Nova Alt Regular-webfont.woff2') format('woff2'),*/
         url('/_next/static/Mark Simonson - Proxima Nova Alt Regular-webfont.woff') format('woff'),
         url('/_next/static/Mark Simonson - Proxima Nova Alt Regular-webfont.ttf') format('truetype'),
         url('/_next/static/Mark Simonson - Proxima Nova Alt Regular-webfont.svg#proxima_nova_altregular') format('svg');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'proxima_nova_scosfthin';
    src: url('/_next/static/Mark Simonson - Proxima Nova ScOsf Thin-webfont.eot');
    src: url('/_next/static/Mark Simonson - Proxima Nova ScOsf Thin-webfont.eot?#iefix') format('embedded-opentype'),
         /*url('/_next/static/Mark Simonson - Proxima Nova ScOsf Thin-webfont.woff2') format('woff2'),*/
         url('/_next/static/Mark Simonson - Proxima Nova ScOsf Thin-webfont.woff') format('woff'),
         url('/_next/static/Mark Simonson - Proxima Nova ScOsf Thin-webfont.ttf') format('truetype'),
         url('/_next/static/Mark Simonson - Proxima Nova ScOsf Thin-webfont.svg#proxima_nova_scosfthin') format('svg');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'proxima_nova_ltsemibold';
    src: url('/_next/static/Mark Simonson - Proxima Nova Semibold-webfont.eot');
    src: url('/_next/static/Mark Simonson - Proxima Nova Semibold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/_next/static/Mark Simonson - Proxima Nova Semibold-webfont.woff2') format('woff2'),
         /*url('/_next/static/Mark Simonson - Proxima Nova Semibold-webfont.woff') format('woff'),*/
         url('/_next/static/Mark Simonson - Proxima Nova Semibold-webfont.ttf') format('truetype'),
         url('/_next/static/Mark Simonson - Proxima Nova Semibold-webfont.svg#proxima_nova_ltsemibold') format('svg');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'proxima_nova_ltthin';
    src: url('/_next/static/Mark Simonson - Proxima Nova Thin-webfont.eot');
    src: url('/_next/static/Mark Simonson - Proxima Nova Thin-webfont.eot?#iefix') format('embedded-opentype'),
         url('/_next/static/Mark Simonson - Proxima Nova Thin-webfont.woff2') format('woff2'),
         url('/_next/static/Mark Simonson - Proxima Nova Thin-webfont.woff') format('woff'),
         url('/_next/static/Mark Simonson - Proxima Nova Thin-webfont.ttf') format('truetype'),
         url('/_next/static/Mark Simonson - Proxima Nova Thin-webfont.svg#proxima_nova_ltthin') format('svg');
    font-weight: normal;
    font-style: normal;

}
`;

export default fontFace;

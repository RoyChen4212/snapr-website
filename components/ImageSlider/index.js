import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import iconLeftArrow from '~resources/icons/icon_left_arrow.png';
import iconRightArrow from '~resources/icons/icon_right_arrow.png';

import './styles.scss';

const SliderComponentWithNoSSR = dynamic(() => import('./ForwardedSlider'), {
  ssr: false,
});
const ForwardedRefComponent = React.forwardRef((props, ref) => (
  <SliderComponentWithNoSSR {...props} forwardedRef={ref} />
));

const NextArrow = props => {
  const { onClick } = props;
  return <div className="rightArrowWrapper" onClick={onClick} style={{ backgroundImage: `url(/${iconRightArrow})` }} />;
};

const PrevArrow = props => {
  const { onClick } = props;
  return <div className="leftArrowWrapper" onClick={onClick} style={{ backgroundImage: `url(/${iconLeftArrow})` }} />;
};

class ImageSlider extends React.Component {
  render() {
    const settings = {
      dotsClass: 'slick-dots dotsWrapper',
      className: 'sliderWrapper',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchThreshold: 5,
      swipeToSlide: false,
      pauseOnHover: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    const props = { ...settings, ...this.props.style };

    return <ForwardedRefComponent {...props}>{this.props.children}</ForwardedRefComponent>;
  }
}

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};
NextArrow.propTypes = {
  onClick: PropTypes.func,
};
ImageSlider.propTypes = {
  children: PropTypes.array,
  style: PropTypes.object,
};

export default ImageSlider;

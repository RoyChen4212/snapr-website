import React from 'react';
import PropTypes from 'prop-types';
import SliderComponent from 'react-slick';

const ForwardedSlider = ({ forwardedRef, ...props }) => <SliderComponent ref={forwardedRef} {...props} />;

ForwardedSlider.propTypes = {
  forwardedRef: PropTypes.func,
};

export default ForwardedSlider;

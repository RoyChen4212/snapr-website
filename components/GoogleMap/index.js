import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import PropTypes from 'prop-types';

import * as Styled from './styled';

const MyGoogleMap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDW3GBMDFSZoV-NEsb4fT8r4vEewgZVMTo',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <Styled.Container />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    zoom={props.zoom}
    center={props.center}
    defaultOptions={{
      // these following 7 options turn certain controls off see link below
      streetViewControl: false,
      scaleControl: false,
      mapTypeControl: false,
      panControl: false,
      rotateControl: false,
      fullscreenControl: false,
    }}
  >
    <Marker position={props.center} />
  </GoogleMap>
));

MyGoogleMap.propTypes = {
  zoom: PropTypes.number,
  center: PropTypes.object,
};

export default MyGoogleMap;

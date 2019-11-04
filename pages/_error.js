import React from 'react';

import { H1 } from '~components';

export default class Error extends React.Component {
  static getInitialProps({ res, err, ctx }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '250px' }}>
        <H1 style={{ fontSize: '40px' }}>Page not found.</H1>
      </div>
    );
  }
}

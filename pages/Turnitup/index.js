import React from 'react';

class Turnitup extends React.Component {
  render() {
    return null;
  }
}

Turnitup.getInitialProps = async ctx => {
  if (ctx.res) {
    ctx.res.writeHead(301, {
      Location: 'https://welcome.thecapital.co.za/turnitup',
    });
    ctx.res.end();
  }

  return {};
};

Turnitup.propTypes = {};

export default Turnitup;

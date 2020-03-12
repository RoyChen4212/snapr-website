import React from 'react';
import Head from 'next/head';

import * as Styled from './styled';

class EmailDisclaimer extends React.Component {
  render() {
    return (
      <Styled.Container>
        <Head>
          <title>Disclaimer</title>
          <meta name="description" content="Disclaimer" />
        </Head>
        <Styled.Content>
          <h1>Disclaimer</h1>
          <h4>
            The information contained in this communication from the sender is confidential. It is intended solely for
            use by the recipient and others authorized to receive it. If you are not the recipient, you are hereby
            notified that any disclosure, copying, distribution or taking action in relation of the contents of this
            information is strictly prohibited and may be unlawful.
            <br />
            <br />
            This email has been scanned for viruses and malware, and may have been automatically archived by Mimecast
            Ltd, an innovator in Software as a Service (SaaS) for business. Providing a safer and more useful place for
            your human generated data. Specializing in; Security, archiving and compliance. To find out more{' '}
            <a href="https://www.mimecast.com/products/" target="_blank">
              Click Here.
            </a>
          </h4>
          <br />
          <br />
        </Styled.Content>
      </Styled.Container>
    );
  }
}

EmailDisclaimer.getInitialProps = ctx => ({ asPath: ctx.asPath });

EmailDisclaimer.propTypes = {};

export default EmailDisclaimer;

import React from 'react';
import PropTypes from 'prop-types';

import AriaModal from 'react-aria-modal';

import * as Styled from './styled';

class PositionModal extends React.Component {
  onExit = () => {
    this.props.onClose();
  };

  render() {
    const { isOpen, title, src } = this.props;
    return (
      <AriaModal
        className={this.props.className}
        titleText={title}
        onExit={this.onExit}
        mounted={isOpen}
        initialFocus="#button"
        verticallyCenter
        underlayStyle={{ cursor: 'default' }}
      >
        <Styled.Content>
          <Styled.ContentContainer>
            <iframe id="button" title={title} src={src} frameBorder="0" allowFullScreen />
          </Styled.ContentContainer>
        </Styled.Content>
      </AriaModal>
    );
  }
}

PositionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
  onClose: PropTypes.func,
};

export default PositionModal;

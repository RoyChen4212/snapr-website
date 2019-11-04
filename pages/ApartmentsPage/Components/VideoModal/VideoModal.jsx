import React from 'react';
import PropTypes from 'prop-types';

import AriaModal from 'react-aria-modal';

import * as Styled from './styled';

class VideoModal extends React.Component {
  onExit = () => {
    this.props.onClose();
  };

  getId = url => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    }
    return 'error';
  };

  render() {
    const { isOpen, videoUrl } = this.props;
    const embedUrl = `https://www.youtube.com/embed/${this.getId(videoUrl)}`;
    return (
      <AriaModal
        className={this.props.className}
        titleText="VideoModal"
        onExit={this.onExit}
        mounted={isOpen}
        initialFocus="#button"
        verticallyCenter
        underlayStyle={{ cursor: 'default' }}
      >
        <Styled.Content>
          <Styled.ContentContainer>
            <iframe id="button" title="Hotel Video" src={embedUrl} frameBorder="0" allowFullScreen />
          </Styled.ContentContainer>
        </Styled.Content>
      </AriaModal>
    );
  }
}

VideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func,
  videoUrl: PropTypes.string,
};

export default VideoModal;

import React from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';

import { ButtonLabel } from '~components';

import * as Styled from './styled';

class CovidModal extends React.Component {
  onViewMore = () => {
    const win = window.open('https://welcome.thecapital.co.za/meetings-and-conferences/', '_blank');
    win.focus();
  };

  render() {
    const { isOpen } = this.props;

    return (
      <AriaModal
        className={this.props.className}
        titleText="CovidModal"
        onExit={this.props.onClose}
        mounted={isOpen}
        initialFocus="#button"
        verticallyCenter
        underlayStyle={{ cursor: 'default' }}
      >
        <Styled.Content id="button">
          <Styled.TitleContainer>
            <Styled.Title>COVID-19 Compliant Events & Conferences</Styled.Title>
            <Styled.BookButton onClick={this.onViewMore}>
              <ButtonLabel>VIEW MORE</ButtonLabel>
            </Styled.BookButton>
          </Styled.TitleContainer>
          <Styled.ContentContainer>
            We’ve adapted our conference and meetings spaces to comply with Government COVID - 19 regulations.
            <br />
            For more please{' '}
            <a href="https://welcome.thecapital.co.za/meetings-and-conferences/" target="_blank">
              click here.
            </a>
          </Styled.ContentContainer>
        </Styled.Content>
      </AriaModal>
    );
  }
}

CovidModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default CovidModal;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as Styled from './styled';

class ReadMoreSection extends React.Component {
  state = {
    txtReadMore: '',
    descriptionLines: 4,
  };

  componentDidMount() {
    if (this.refLongDescription.offsetHeight < this.refLongDescription.scrollHeight) {
      setTimeout(() => {
        this.setState({ txtReadMore: 'Read more' });
      });
    }
  }

  onReadMoreClick() {
    if (this.state.descriptionLines === 4) {
      this.setState({
        descriptionLines: 0,
        txtReadMore: 'Show less',
      });
    } else {
      this.setState({
        descriptionLines: 4,
        txtReadMore: 'Read more',
      });
    }
  }

  render() {
    return (
      <Styled.Content className={this.props.className}>
        <Styled.H1>{this.props.title}</Styled.H1>

        <Styled.LongDescription
          lines={this.state.descriptionLines}
          ref={ref => {
            this.refLongDescription = ref;
          }}
        >
          {this.props.description}
        </Styled.LongDescription>

        <Styled.ReadMore onClick={() => this.onReadMoreClick()} isActive={this.state.txtReadMore}>
          {this.state.txtReadMore}
        </Styled.ReadMore>
      </Styled.Content>
    );
  }
}

ReadMoreSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default styled(ReadMoreSection)``;

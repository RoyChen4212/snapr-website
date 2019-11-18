import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import moment from 'moment';
import Head from 'next/head';
import styled from 'styled-components';

import { Footer, InlineCalendar, DivColumn, Header, MobileNav } from '~components';
import { makeSelectCalendar } from '~utils/redux/selectors';
import { SetCalendarOpen, SetCalendarDate } from '~utils/redux/actions';

const HeaderWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

class RootContainer extends React.Component {
  onChangeDate = date => {
    this.props.setCalendarDate(moment(date), this.props.calendar.isCheckIn);
    if (this.props.calendar.isCheckIn) {
      this.props.setCalendarDate(moment(date).add(1, 'days'), false);
      this.props.setCalendarOpen(true, false);
    } else {
      this.props.setCalendarOpen(false, this.props.calendar.isCheckIn);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <DivColumn>
        <Head>
          <title>The Capital Hotels and Apartments - Hotels and Apartments</title>
          <meta
            name="description"
            content="The Capital hotels and apartments in Sandton, Rosebank, Menlyn, Cape Town and Durban offers serviced apartments and hotel accommodation. Experience luxury  accommodation in self catering apartments & luxury hotel rooms."
          />
        </Head>

        <HeaderWrapper>
          <MobileNav {...this.props} />
          <Header {...this.props} />
        </HeaderWrapper>

        {children}
        <Footer {...this.props} />

        <div style={{ position: 'relative' }}>
          {this.props.calendar.isOpen && (
            <InlineCalendar
              date={this.props.calendar.isCheckIn ? this.props.calendar.checkInDate : this.props.calendar.checkOutDate}
              isCheckIn={this.props.calendar.isCheckIn}
              onChangeDate={this.onChangeDate}
              handleClickOutside={() => this.props.setCalendarOpen(false)}
              outsideClickIgnoreClass="CheckButton"
              minDate={
                this.props.calendar.isCheckIn
                  ? moment(new Date())
                  : moment(this.props.calendar.checkInDate).add(1, 'days')
              }
            />
          )}
        </div>
      </DivColumn>
    );
  }
}

RootContainer.propTypes = {
  children: PropTypes.any,
  calendar: PropTypes.object,
  setCalendarOpen: PropTypes.func,
  setCalendarDate: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  calendar: makeSelectCalendar(),
});

function mapDispatchToProps(dispatch) {
  return {
    setCalendarOpen: (isOpen, isCheckIn) => dispatch(SetCalendarOpen(isOpen, isCheckIn)),
    setCalendarDate: (date, isCheckIn) => dispatch(SetCalendarDate(date, isCheckIn)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootContainer);

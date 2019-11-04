import React from 'react';
import PropTypes from 'prop-types';
import DatePicker, { CalendarContainer as OriginalContainer } from 'react-datepicker';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import { SetCalendarOpen, SetCalendarDate } from '~utils/redux/actions';
import { makeSelectCalendar } from '~utils/redux/selectors';
import onClickOutside from 'react-onclickoutside';

import * as Styled from './styled';
import './styles.scss';

class CheckInButton extends React.Component {
  render() {
    const { onClick, value } = this.props;
    return (
      <Styled.CheckInWrapper className="CheckButton" onClick={onClick}>
        <Styled.CheckTitle>CHECK IN</Styled.CheckTitle>
        <Styled.CheckContent>{moment(value, 'MM/DD/YYYY').format('D/M')}</Styled.CheckContent>
      </Styled.CheckInWrapper>
    );
  }
}

class CheckOutButton extends React.Component {
  render() {
    const { onClick, value } = this.props;
    return (
      <Styled.CheckInWrapper onClick={onClick} className="CheckButton">
        <Styled.CheckTitle>CHECK OUT</Styled.CheckTitle>
        <Styled.CheckContent>{moment(value, 'MM/DD/YYYY').format('D/M')}</Styled.CheckContent>
      </Styled.CheckInWrapper>
    );
  }
}

const InlineCalendar = props => (
  <DatePicker
    calendarClassName={`custom-date-picker inlined ${props.isCheckIn ? 'checkin' : 'checkout'}`}
    selected={moment(props.date).toDate()}
    onChange={props.onChangeDate}
    minDate={moment(props.minDate).toDate()}
    inline
    calendarContainer={getCalendarContainer(props.isCheckIn ? 'Check-In' : 'Check-Out')}
  />
);

const getCalendarContainer = factor => (
  { className, children }, // eslint-disable-line react/prop-types
) => (
  <OriginalContainer className={className}>
    <div className="calendar__title_container">
      Choose
      <div className="calendar__title_description">{factor} Day</div>
    </div>
    <div style={{ position: 'relative' }}>{children}</div>
  </OriginalContainer>
);

class CalendarPicker extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    withInline: false,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    if (this.props.calendar.isOpen && window.innerWidth > 768) {
      this.props.setCalendarOpen(false);
    }

    if (this.refContainer) {
      this.setState({
        withInline: window.innerWidth < 769,
      });
    }
  };

  handleChangeDate = (date, isCheckIn) => {
    this.props.setCalendarDate(moment(date), isCheckIn);
    if (isCheckIn) {
      this.props.setCalendarDate(moment(date).add(1, 'days'), false);
      setTimeout(() => {
        this.refOutCalendar.setOpen(true);
      });
    }
  };

  render() {
    return (
      <Styled.PickerWrapper
        ref={ref => {
          this.refContainer = ref;
        }}
      >
        {this.state.withInline && (
          <Styled.ContentWrapper>
            <CheckInButton
              onClick={() => this.props.setCalendarOpen(true, true)}
              value={moment(this.props.calendar.checkInDate).format('MM/DD/YYYY')}
            />
            <CheckOutButton
              onClick={() => this.props.setCalendarOpen(true, false)}
              value={moment(this.props.calendar.checkOutDate).format('MM/DD/YYYY')}
            />
            <Styled.AvailabilityButton onClick={this.props.onAvailability}>
              <Styled.AvailabilityLabel>CHECK AVAILABILITY</Styled.AvailabilityLabel>
            </Styled.AvailabilityButton>
          </Styled.ContentWrapper>
        )}

        {!this.state.withInline && (
          <Styled.ContentWrapper>
            <div className="custom-calendar-wrapper">
              <DatePicker
                calendarClassName="custom-date-picker checkin"
                customInput={<CheckInButton />}
                selected={moment(this.props.calendar.checkInDate).toDate()}
                onChange={date => this.handleChangeDate(date, true)}
                minDate={moment().toDate()}
                popperPlacement="bottom-end"
                calendarContainer={getCalendarContainer('Check-In')}
              />
            </div>

            <div className="custom-calendar-wrapper">
              <DatePicker
                ref={ref => {
                  this.refOutCalendar = ref;
                }}
                calendarClassName="custom-date-picker checkout"
                customInput={<CheckOutButton />}
                selected={moment(this.props.calendar.checkOutDate).toDate()}
                onChange={date => this.handleChangeDate(date, false)}
                minDate={moment(this.props.calendar.checkInDate)
                  .add(1, 'days')
                  .toDate()}
                popperPlacement="bottom-end"
                calendarContainer={getCalendarContainer('Check-Out')}
              />
            </div>

            <Styled.AvailabilityButton onClick={this.props.onAvailability}>
              <Styled.AvailabilityLabel>CHECK AVAILABILITY</Styled.AvailabilityLabel>
            </Styled.AvailabilityButton>
          </Styled.ContentWrapper>
        )}
      </Styled.PickerWrapper>
    );
  }
}

InlineCalendar.propTypes = {
  date: PropTypes.object,
  onChangeDate: PropTypes.func,
  minDate: PropTypes.object,
  isCheckIn: PropTypes.bool,
};

CheckInButton.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

CheckOutButton.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

CalendarPicker.propTypes = {
  calendar: PropTypes.object,
  setCalendarOpen: PropTypes.func,
  setCalendarDate: PropTypes.func,
  onAvailability: PropTypes.func,
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

export const InlineCalendarWrapper = onClickOutside(InlineCalendar);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarPicker);

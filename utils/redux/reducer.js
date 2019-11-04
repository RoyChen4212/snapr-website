import moment from 'moment';

import { actionTypes } from './actions';

const initialState = {
  content: {
    loading: false,
    error: false,
    data: {},
  },
  calendar: {
    isOpen: false,
    isCheckIn: false,
    checkInDate: moment(),
    checkOutDate: moment().add(1, 'days'),
  },
  isMobileDevice: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.API_FAILURE:
      return { ...state, content: { ...state.content, error: action.error, loading: false } };
    case actionTypes.SET_CALENDAR_OPEN:
      return { ...state, calendar: { ...state.calendar, isOpen: action.isOpen, isCheckIn: action.isCheckIn } };
    case actionTypes.SET_CALENDAR_DATE:
      if (action.isCheckIn) {
        return { ...state, calendar: { ...state.calendar, checkInDate: action.date } };
      }
      return { ...state, calendar: { ...state.calendar, checkOutDate: action.date } };
    case actionTypes.SET_MOBILE_CHECK:
      return { ...state, isMobileDevice: action.isMobile };
    case actionTypes.HOME_DATA_REQUEST:
      return {
        ...state,
        content: { ...state.content, loading: true, error: false, data: { ...state.content.data, home_page: false } },
      };
    case actionTypes.HOME_DATA_SUCCESS:
      return {
        ...state,
        content: { ...state.content, loading: false, data: { ...state.content.data, home_page: action.data } },
      };

    case actionTypes.HOTELS_DATA_REQUEST:
      return {
        ...state,
        content: { ...state.content, loading: true, error: false, data: { ...state.content.data, hotels: false } },
      };
    case actionTypes.HOTELS_DATA_SUCCESS:
      return {
        ...state,
        content: { ...state.content, loading: false, data: { ...state.content.data, hotels: action.data } },
      };

    case actionTypes.AREAS_DATA_REQUEST:
      return {
        ...state,
        content: { ...state.content, loading: true, error: false, data: { ...state.content.data, areas: false } },
      };
    case actionTypes.AREAS_DATA_SUCCESS:
      return {
        ...state,
        content: { ...state.content, loading: false, data: { ...state.content.data, areas: action.data } },
      };

    case actionTypes.ROOMS_DATA_REQUEST:
      return {
        ...state,
        content: { ...state.content, loading: true, error: false, data: { ...state.content.data, rooms: false } },
      };
    case actionTypes.ROOMS_DATA_SUCCESS:
      return {
        ...state,
        content: { ...state.content, loading: false, data: { ...state.content.data, rooms: action.data } },
      };

    case actionTypes.FACILITIES_DATA_REQUEST:
      return {
        ...state,
        content: { ...state.content, loading: true, error: false, data: { ...state.content.data, facilities: false } },
      };
    case actionTypes.FACILITIES_DATA_SUCCESS:
      return {
        ...state,
        content: { ...state.content, loading: false, data: { ...state.content.data, facilities: action.data } },
      };

    case actionTypes.CONFSERVICES_DATA_REQUEST:
      return {
        ...state,
        content: {
          ...state.content,
          loading: true,
          error: false,
          data: { ...state.content.data, conf_services: false },
        },
      };
    case actionTypes.CONFSERVICES_DATA_SUCCESS:
      return {
        ...state,
        content: { ...state.content, loading: false, data: { ...state.content.data, conf_services: action.data } },
      };

    case actionTypes.OFFERS_DATA_REQUEST:
      return {
        ...state,
        content: { ...state.content, loading: true, error: false, data: { ...state.content.data, offers: false } },
      };
    case actionTypes.OFFERS_DATA_SUCCESS:
      return {
        ...state,
        content: { ...state.content, loading: false, data: { ...state.content.data, offers: action.data } },
      };

    case actionTypes.JOIN_DATA_REQUEST:
      return {
        ...state,
        content: {
          ...state.content,
          loading: true,
          error: false,
          data: { ...state.content.data, join_us_page: false },
        },
      };
    case actionTypes.JOIN_DATA_SUCCESS:
      return {
        ...state,
        content: { ...state.content, loading: false, data: { ...state.content.data, join_us_page: action.data } },
      };

    case actionTypes.ABOUT_DATA_REQUEST:
      return {
        ...state,
        content: {
          ...state.content,
          loading: true,
          error: false,
          data: { ...state.content.data, about_us_page: false },
        },
      };
    case actionTypes.ABOUT_DATA_SUCCESS:
      return {
        ...state,
        content: { ...state.content, loading: false, data: { ...state.content.data, about_us_page: action.data } },
      };

    case actionTypes.FIND_DATA_REQUEST:
      return {
        ...state,
        content: {
          ...state.content,
          loading: true,
          error: false,
          data: { ...state.content.data, find_us_page: false },
        },
      };
    case actionTypes.FIND_DATA_SUCCESS:
      return {
        ...state,
        content: { ...state.content, loading: false, data: { ...state.content.data, find_us_page: action.data } },
      };

    case actionTypes.CAREERS_DATA_REQUEST:
      return {
        ...state,
        content: { ...state.content, loading: true, error: false, data: { ...state.content.data, careers: false } },
      };
    case actionTypes.CAREERS_DATA_SUCCESS:
      return {
        ...state,
        content: { ...state.content, loading: false, data: { ...state.content.data, careers: action.data } },
      };
    default:
      return state;
  }
}

export default appReducer;

export const actionTypes = {
  HOME_DATA_REQUEST: 'HOME_DATA_REQUEST',
  HOME_DATA_SUCCESS: 'HOME_DATA_SUCCESS',
  API_FAILURE: 'API_FAILURE',
  SET_CALENDAR_OPEN: 'SET_CALENDAR_OPEN',
  SET_CALENDAR_DATE: 'SET_CALENDAR_DATE',
  SET_MOBILE_CHECK: 'SET_MOBILE_CHECK',
  HOTELS_DATA_REQUEST: 'HOTELS_DATA_REQUEST',
  HOTELS_DATA_SUCCESS: 'HOTELS_DATA_SUCCESS',
  AREAS_DATA_REQUEST: 'AREAS_DATA_REQUEST',
  AREAS_DATA_SUCCESS: 'AREAS_DATA_SUCCESS',
  ROOMS_DATA_REQUEST: 'ROOMS_DATA_REQUEST',
  ROOMS_DATA_SUCCESS: 'ROOMS_DATA_SUCCESS',
  FACILITIES_DATA_REQUEST: 'FACILITIES_DATA_REQUEST',
  FACILITIES_DATA_SUCCESS: 'FACILITIES_DATA_SUCCESS',
  CONFSERVICES_DATA_REQUEST: 'CONFSERVICES_DATA_REQUEST',
  CONFSERVICES_DATA_SUCCESS: 'CONFSERVICES_DATA_SUCCESS',
  OFFERS_DATA_REQUEST: 'OFFERS_DATA_REQUEST',
  CAREERS_DATA_SUCCESS: 'CAREERS_DATA_SUCCESS',
  CAREERS_DATA_REQUEST: 'CAREERS_DATA_REQUEST',
  FIND_DATA_SUCCESS: 'FIND_DATA_SUCCESS',
  FIND_DATA_REQUEST: 'FIND_DATA_REQUEST',
  ABOUT_DATA_SUCCESS: 'ABOUT_DATA_SUCCESS',
  ABOUT_DATA_REQUEST: 'ABOUT_DATA_REQUEST',
  JOIN_DATA_SUCCESS: 'JOIN_DATA_SUCCESS',
  JOIN_DATA_REQUEST: 'JOIN_DATA_REQUEST',
  OFFERS_DATA_SUCCESS: 'OFFERS_DATA_SUCCESS',
};

export function LoadingError(error) {
  return {
    type: actionTypes.API_FAILURE,
    error,
  };
}

export function SetCalendarOpen(isOpen, isCheckIn) {
  return { type: actionTypes.SET_CALENDAR_OPEN, isOpen, isCheckIn };
}

export function SetCalendarDate(date, isCheckIn) {
  return { type: actionTypes.SET_CALENDAR_DATE, date, isCheckIn };
}

export function SetMobileCheck(isMobile) {
  return { type: actionTypes.SET_MOBILE_CHECK, isMobile };
}

export function LoadHomeData() {
  return {
    type: actionTypes.HOME_DATA_REQUEST,
  };
}
export function HomeDataLoaded(data) {
  return {
    type: actionTypes.HOME_DATA_SUCCESS,
    data,
  };
}

export function LoadHotelsData() {
  return {
    type: actionTypes.HOTELS_DATA_REQUEST,
  };
}
export function HotelsDataLoaded(data) {
  return {
    type: actionTypes.HOTELS_DATA_SUCCESS,
    data,
  };
}

export function LoadAreasData() {
  return {
    type: actionTypes.AREAS_DATA_REQUEST,
  };
}
export function AreasDataLoaded(data) {
  return {
    type: actionTypes.AREAS_DATA_SUCCESS,
    data,
  };
}

export function LoadRoomsData() {
  return {
    type: actionTypes.ROOMS_DATA_REQUEST,
  };
}
export function RoomsDataLoaded(data) {
  return {
    type: actionTypes.ROOMS_DATA_SUCCESS,
    data,
  };
}

export function LoadFacilitiesData() {
  return {
    type: actionTypes.FACILITIES_DATA_REQUEST,
  };
}
export function FacilitiesDataLoaded(data) {
  return {
    type: actionTypes.FACILITIES_DATA_SUCCESS,
    data,
  };
}

export function LoadConfservicesData() {
  return {
    type: actionTypes.CONFSERVICES_DATA_REQUEST,
  };
}
export function ConfservicesDataLoaded(data) {
  return {
    type: actionTypes.CONFSERVICES_DATA_SUCCESS,
    data,
  };
}

export function LoadOffersData() {
  return {
    type: actionTypes.OFFERS_DATA_REQUEST,
  };
}
export function OffersDataLoaded(data) {
  return {
    type: actionTypes.OFFERS_DATA_SUCCESS,
    data,
  };
}

export function LoadJoinData() {
  return {
    type: actionTypes.JOIN_DATA_REQUEST,
  };
}
export function JoinDataLoaded(data) {
  return {
    type: actionTypes.JOIN_DATA_SUCCESS,
    data,
  };
}

export function LoadAboutData() {
  return {
    type: actionTypes.ABOUT_DATA_REQUEST,
  };
}
export function AboutDataLoaded(data) {
  return {
    type: actionTypes.ABOUT_DATA_SUCCESS,
    data,
  };
}

export function LoadFindData() {
  return {
    type: actionTypes.FIND_DATA_REQUEST,
  };
}
export function FindDataLoaded(data) {
  return {
    type: actionTypes.FIND_DATA_SUCCESS,
    data,
  };
}

export function LoadCareersData() {
  return {
    type: actionTypes.CAREERS_DATA_REQUEST,
  };
}
export function CareersDataLoaded(data) {
  return {
    type: actionTypes.CAREERS_DATA_SUCCESS,
    data,
  };
}

import { call, put, takeLatest } from 'redux-saga/effects';

import { db } from '~utils/service/firebase';

import {
  actionTypes,
  HomeDataLoaded,
  LoadingError,
  HotelsDataLoaded,
  AreasDataLoaded,
  RoomsDataLoaded,
  FacilitiesDataLoaded,
  ConfservicesDataLoaded,
  OffersDataLoaded,
  JoinDataLoaded,
  FindDataLoaded,
  AboutDataLoaded,
  CareersDataLoaded,
} from './actions';

export function* getHomeData() {
  const request = () =>
    db
      .ref('/content/home_page')
      .once('value')
      .then(snapshot => snapshot.val());

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request);
    yield put(HomeDataLoaded(content));
  } catch (err) {
    yield put(LoadingError(err));
  }
}

export function* getHotelsData() {
  const request = () =>
    db
      .ref('/content/hotels')
      .once('value')
      .then(snapshot => snapshot.val());

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request);
    yield put(HotelsDataLoaded(content));
  } catch (err) {
    yield put(LoadingError(err));
  }
}

export function* getAreasData() {
  const request = () =>
    db
      .ref('/content/areas')
      .once('value')
      .then(snapshot => snapshot.val());

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request);
    yield put(AreasDataLoaded(content));
  } catch (err) {
    yield put(LoadingError(err));
  }
}

export function* getRoomsData() {
  const request = () =>
    db
      .ref('/content/rooms')
      .once('value')
      .then(snapshot => snapshot.val());

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request);
    yield put(RoomsDataLoaded(content));
  } catch (err) {
    yield put(LoadingError(err));
  }
}

export function* getFacilitiesData() {
  const request = () =>
    db
      .ref('/content/facilities')
      .once('value')
      .then(snapshot => snapshot.val());

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request);
    yield put(FacilitiesDataLoaded(content));
  } catch (err) {
    yield put(LoadingError(err));
  }
}

export function* getConfservicesData() {
  const request = () =>
    db
      .ref('/content/conf_services')
      .once('value')
      .then(snapshot => snapshot.val());

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request);
    yield put(ConfservicesDataLoaded(content));
  } catch (err) {
    yield put(LoadingError(err));
  }
}

export function* getOffersData() {
  const request = () =>
    db
      .ref('/content/offers')
      .once('value')
      .then(snapshot => snapshot.val());

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request);
    yield put(OffersDataLoaded(content));
  } catch (err) {
    yield put(LoadingError(err));
  }
}

export function* getJoinData() {
  const request = () =>
    db
      .ref('/content/join_us_page')
      .once('value')
      .then(snapshot => snapshot.val());

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request);
    yield put(JoinDataLoaded(content));
  } catch (err) {
    yield put(LoadingError(err));
  }
}

export function* getFindData() {
  const request = () =>
    db
      .ref('/content/find_us_page')
      .once('value')
      .then(snapshot => snapshot.val());

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request);
    yield put(FindDataLoaded(content));
  } catch (err) {
    yield put(LoadingError(err));
  }
}

export function* getAboutData() {
  const request = () =>
    db
      .ref('/content/about_us_page')
      .once('value')
      .then(snapshot => snapshot.val());

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request);
    yield put(AboutDataLoaded(content));
  } catch (err) {
    yield put(LoadingError(err));
  }
}

export function* getCareersData() {
  const request = () =>
    db
      .ref('/content/careers')
      .once('value')
      .then(snapshot => snapshot.val());

  try {
    // Call our request helper (see 'utils/request')
    const content = yield call(request);
    yield put(CareersDataLoaded(content));
  } catch (err) {
    yield put(LoadingError(err));
  }
}

export default function*() {
  yield takeLatest(actionTypes.HOME_DATA_REQUEST, getHomeData);
  yield takeLatest(actionTypes.HOTELS_DATA_REQUEST, getHotelsData);
  yield takeLatest(actionTypes.AREAS_DATA_REQUEST, getAreasData);
  yield takeLatest(actionTypes.ROOMS_DATA_REQUEST, getRoomsData);
  yield takeLatest(actionTypes.FACILITIES_DATA_REQUEST, getFacilitiesData);
  yield takeLatest(actionTypes.CONFSERVICES_DATA_REQUEST, getConfservicesData);
  yield takeLatest(actionTypes.OFFERS_DATA_REQUEST, getOffersData);
  yield takeLatest(actionTypes.JOIN_DATA_REQUEST, getJoinData);
  yield takeLatest(actionTypes.ABOUT_DATA_REQUEST, getAboutData);
  yield takeLatest(actionTypes.FIND_DATA_REQUEST, getFindData);
  yield takeLatest(actionTypes.CAREERS_DATA_REQUEST, getCareersData);
}

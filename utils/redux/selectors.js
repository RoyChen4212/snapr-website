/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.global;

const selectRoute = state => state.route;

const makeSelectContent = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.content,
  );

const makeSelectCalendar = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.calendar,
  );

const makeSelectMobileCheck = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.isMobileDevice,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRoute,
    routeState => routeState.location,
  );

export { selectGlobal, makeSelectCalendar, makeSelectContent, makeSelectMobileCheck, makeSelectLocation };

import { takeEvery } from 'redux-saga/effects';

import eventsSaga from './eventsSaga/eventsSaga';

export default function* sagaWatchers() {
  yield takeEvery('GET_EVENTS', eventsSaga);
}

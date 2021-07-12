import { put, takeEvery } from 'redux-saga/effects';

function* refreshPolling() {
  yield put({ type: 'STOP_POLLING' });
  yield put({ type: 'START_POLLING' });
}

export default function* refreshPollingWatcher() {
  yield takeEvery('REFRESH_POLLING', refreshPolling);
}

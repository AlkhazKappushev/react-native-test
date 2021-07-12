import { all } from 'redux-saga/effects';

import eventSagaWatcher from './eventsSaga/eventsSaga';
import refreshPollingWatcher from './Polling/polling';

export default function* sagaWatchers() {
  yield all([
    eventSagaWatcher(),
    refreshPollingWatcher(),
  ]);
}

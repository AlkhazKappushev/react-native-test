import {
  put, call, delay, take, race,
} from 'redux-saga/effects';
import axios from 'axios';

function* eventsSaga() {
  while (true) {
    try {
      const data = yield call(axios.get, 'https://api.github.com/events');
      yield put({ type: 'GET_EVENTS_SUCCESS', data });
      yield delay(60000);
    } catch (error) {
      yield put({ type: 'GET_EVENTS_FAILED', error });
    }
  }
}

export default function* eventSagaWatcher() {
  while (true) {
    yield take('START_POLLING');
    yield race([
      call(eventsSaga),
      take('STOP_POLLING'),
    ]);
  }
}

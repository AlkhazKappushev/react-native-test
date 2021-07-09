import { put, call } from 'redux-saga/effects';
import axios from 'axios';

function* eventsSaga() {
  try {
    const data = yield call(axios.get, 'https://api.github.com/events');
    yield put({ type: 'GET_EVENTS_SUCCESS', data });
  } catch (error) {
    yield put({ type: 'GET_EVENTS_FAILED', error });
  }
}

export default eventsSaga;

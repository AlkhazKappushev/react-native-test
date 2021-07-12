import { createAction } from 'redux-actions';

const refreshPollingAction = createAction('REFRESH_POLLING');
const startPollingAction = createAction('START_POLLING');
const stopPollingAction = createAction('STOP_POLLING');

export {
  stopPollingAction,
  startPollingAction,
  refreshPollingAction,
};

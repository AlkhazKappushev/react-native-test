import { createAction } from 'redux-actions';

const getEventsAction = createAction('GET_EVENTS');
const setCurrentEventAction = createAction('SET_CURRENT_EVENT');

export {
  // eslint-disable-next-line import/prefer-default-export
  getEventsAction,
  setCurrentEventAction,
};

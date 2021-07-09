import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga/';

import rootReducer from './reducers/rootReducer';
import sagaWatchers from './sagas/sagaWatchers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagaWatchers);

export default store;

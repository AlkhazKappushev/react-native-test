/* eslint-disable */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import Router from './src/screens';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <Router />
    </Provider>
  );
}

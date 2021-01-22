// @flow

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reportWebVitals from './reportWebVitals';

import 'styles/app.scss';
import AppContainer from 'containers/AppContainer';
import rootReducer from 'reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const $root = document.getElementById('root');
const store = createStore(persistedReducer);
const persistor = persistStore(store);

if ($root === null) throw new Error('No `root` Element exists in the DOM');

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  $root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

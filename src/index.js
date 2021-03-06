import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import App from './App';
import { Provider } from 'react-redux'
import nasaReducer from './actions/nasaReducer';
import thunk from 'redux-thunk';
import {
  applyMiddleware,
  createStore,
  compose
} from 'redux'

const store = createStore(nasaReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

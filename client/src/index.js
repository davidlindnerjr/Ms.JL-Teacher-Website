import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './bootstrap.min (12).css';
import './App.css'
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


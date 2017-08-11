import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main.jsx'
// import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Provider store={ store } >
    <Main />
  </Provider>,
  document.getElementById('app'),
);

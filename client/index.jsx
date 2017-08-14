import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import store from './store';
import Main from './components/Main.jsx'
const customHistory = createHistory()

ReactDOM.render(
  <Provider store={store} >
    <Router history={customHistory} >
      <Route path="/" component={Main}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);

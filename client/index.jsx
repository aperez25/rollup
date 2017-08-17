import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import store from './store';
import Main from './components/Main.jsx';
import Page from './components/setupPage.jsx';

const customHistory = createBrowserHistory()

ReactDOM.render(
  <Provider store={store} >
    <Router history={customHistory} >
      <div>
        <Route path="/" component={Main} />
        <Switch>
          <Route path="/page" component={Page} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app'),
);

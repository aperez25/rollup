import React from 'react';
import { Switch, Route } from 'react-router'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Sidebar from './SideBar.jsx';
import Setup from './SetupPage.jsx'
import Emails from './EmailsView.jsx'

module.exports = () => (
  <div>
    <Header />
    <div>
      <Sidebar />
      <Switch>
        <Route path="/setup">{Setup}</Route>
        <Route path="/emails">{Emails}</Route>
      </Switch>
    </div>
    <Footer />
  </div>
)

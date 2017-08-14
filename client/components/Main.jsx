import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Sidebar from './SideBar.jsx';
import Emails from './EmailsView.jsx';
import Login from './Login.jsx';

module.exports = () => (
  <div>
    <Header />
    <Login />
    <div>
      <Sidebar />
      <Emails />
    </div>
    <Footer />
  </div>
)

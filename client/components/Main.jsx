import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Sidebar from './SideBar.jsx';
import Emails from './EmailsView.jsx';

module.exports = () => (
  <div>
    <Header />
    <div>
      <Sidebar />
      <Emails />
    </div>
    <Footer />
  </div>
)

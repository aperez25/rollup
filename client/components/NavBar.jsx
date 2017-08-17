import React from 'react';
import { Link } from 'react-router-dom';

module.exports = () => (
  <div>
    <nav>
      <h1><Link to="/"> <img src="./images/toilet-paper-roll-outline.png" alt=""
        className="header-icon" /> Rollup </Link></h1>
      <button className="nav">Home</button>
      <button className="nav">Settings</button>
      <button className="nav"><a href="/login"> Sign-up/Login</a></button>
      <button className="nav"><a href="/mail">Gmail Setup</a></button>
    </nav>
  </div>
)

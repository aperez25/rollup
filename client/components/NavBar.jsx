import React from 'react';
import { Link } from 'react-router-dom';

module.exports = () => (
  <div>
    <nav>
      <h1><Link to="/"> <img src="./images/toilet-paper-roll-outline.png" alt=""
        className="header-icon" /> Rollup </Link></h1>
      <Link to="/emails"><button className="nav">Home</button></Link>
      <button className="nav">Settings</button>
      <a href="/auth"> <button className="nav">Sign-up/Login</button></a>
      <Link to="/setup"><button className="nav">Gmail Setup</button></Link>
    </nav>
  </div>
)

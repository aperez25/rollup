import React from 'react';
import { Link } from 'react-router-dom';

module.exports = () => (
  <div>
    <button>
      { /*  need to add user to props to enable logout : login */}
      <a href="/auth">
        Gmail Sign-up / login
      </a>
    </button>
  </div>
)

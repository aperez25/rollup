const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  googleId: {
    type: Sequelize.STRING,
  },
});

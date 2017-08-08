const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('email', {
  from: {
    type: Sequelize.STRING,
  },
  subject: {
    type: Sequelize.STRING,
  },
  mailingList: {
    type: Sequelize.STRING,
  },
  subscribed: {
    type: Sequelize.BOOLEAN,
  },
  body: {
    type: Sequelize.TEXT,
  },
  labels: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
}, {
  instanceMethods: {
  },
  classMethods: {
  },
  hooks: {
  },
})

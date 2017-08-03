const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/rollup', {
  logging: false,
})

require('./models')

db.sync()
.then(() => require('../index.js'))

module.exports = db

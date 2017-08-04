const db = require('./db')

require('./models')

db.sync({ force: true })
.then(() => require('../index'))
.catch(console.error)
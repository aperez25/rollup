require('dotenv').config()
require('escape-hatch')()
const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const passport = require('passport')
const db = require('./server/db')
const User = require('./server/models/user')

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

app
.use(morgan('dev'))
.use(express.static(path.join(__dirname, './public')))
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))
.use(passport.initialize())
.use(passport.session())
.use('/auth', require('./server/routes/auth'))
.use('/mail', require('./server/routes/gmail'))
.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  if (res.headersSent) {
    return next(err)
  }
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public'))
})

.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
  db.sync()
  .then(() => console.log('Postgres server is connected'))
})

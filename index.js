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
const session = require('express-session')

passport.serializeUser((user, done) => {
  done(null, { id: user.id, token: user.token });
});

passport.deserializeUser((userSession, done) => {
  User.findById(userSession.id)
  .then((user) => {
    done(null, user)
  })
  .catch(done)
});

app
.use(morgan('dev'))
.use(express.static(path.join(__dirname, './public')))
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))
.use(session({
  secret: 'Luna is a big fat tuna',
  saveUninitialized: false,
  resave: false,
}))
.use(passport.initialize())
.use(passport.session())
.use('/', require('./server/routes/'))
.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public'))
})

.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
  db.sync({ force: true })
  .then(() => console.log('Postgres server is connected'))
})

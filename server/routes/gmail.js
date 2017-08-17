const router = require('express').Router();
const User = require('../models/user');
const Email = require('../models/email');
const google = require('googleapis');
const gmail = google.gmail('v1')
// const Gmail = require('node-gmail-api')
require('escape-hatch')()

router
.get('/', (req, res, next) => {
  const token = req.session.passport.user.token
  const userId = req.user.googleId

  gmail.users.messages.list({ access_token: token, userId: 'me' }, (err, response) => {
    res.send(response)
    if (err) return next(err);
  })
})

module.exports = router;

/*
~~~~ ONBOARDING FLOW: ~~~~~
- [x] sign up
- go through email providers for last 2-3 months (need to batch request to gmail API)
  - select who will be in roll up
    - once submit is hit:
     - add all to database
- set a time for rollup email to be delivered in inbox
- at that point, user can view emails on grid

~~~~~ EMAIL GRID FEATURES ~~~~
- hide email from view
- go to gmail
- expand view
- drag & drop ? (what for?  ....)

~~~~~ SETTINGS ~~~~
- delete from rollup
- add more emails

~~~~~ ADDITIONAL FEATURES: ~~~~~
- scoring system for emails to determine ranking in rollup
- set up multiple rollup emails
- email analytics
- filters on the lefthand side
*/


const router = require('express').Router();
const User = require('../models/user');
const Email = require('../models/email');
const Gmail = require('node-gmail-api')
require('escape-hatch')()

router
.get('/', (req, res, next) => {
  const token = req.session.passport.user.token
  const gmail = new Gmail(token)
  const messages = gmail.messages('label:inbox', { max: 10 })

  messages.on('data', (data) => {
    res.send(data.snippet)
  })

})

module.exports = router;

/*
~~~~ ONBOARDING FLOW: ~~~~~
- sign up
- go through email providers for last 2-3 months
  - select who will be in roll up
  - scoring system for emails to determine ranking in rollup
- set a time for rollup email to be delivered in inbox
- at that point, user can view emails on grid

~~~~~ EMAIL GRID FEATURES ~~~~
- hide email from view
- go to gmail
- expand view
- drag & drop ? (what for?  ....)

~~~~~ SETTINGS ~~~~
- add back into email inbox
- change email priority

~~~~~ ADDITIONAL FEATURES: ~~~~~
- set up multiple rollup emails
- email analytics
- filters on the lefthand side
*/


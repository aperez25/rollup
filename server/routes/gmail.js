const router = require('express').Router();
const User = require('../models/user');
const Email = require('../models/email');
const Gmail = require('node-gmail-api')
require('escape-hatch')()
// TODO: will need to send passport token to route via user session & connect to this route
// const gmail = new Gmail('ya29.GlukBFBYqBDPhzihfSzK9AaT5T1lSC6QTBkz0mepp9MljHRoYKI1tImIQufIXVSKBbkZg5Z0wTzXKuswvfwkRnZYtFl8JQgJat2VZDKa4bq3wdyhxLklKSRBnzxM')
// const messages = gmail.messages('label:inbox', { max: 10 })

// messages.on('data', (data) => {
//   console.log(data.snippet)
// })

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


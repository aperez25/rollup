const router = require('express').Router();
const User = require('../models/user');
const Email = require('../models/email');
// const google = require('googleapis');
// const gmail = google.gmail('v1')
const Gmail = require('node-gmail-api')

router
.get('/', (req, res, next) => {
  const token = req.session.passport.user.token
  const gmail = new Gmail(token);
  const stream = gmail.messages('newer_than:2m', { max: 5 });
  var data = [];

  stream.on('data', (message) => {
    const from = message.payload.headers.filter(field => {
      if (field.name === "From" || field.name === "Subject")return field;
    })
    data.push('EMAIL:', from, message.snippet);
  })

  stream.on('end', () => res.send(data))

  // gmail.users.messages.list({ access_token: token, userId: 'me' }, (err, response) => {
  //   res.send(response)
  //   if (err) return next(err);
  // })
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


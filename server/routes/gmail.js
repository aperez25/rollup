const router = require('express').Router();
const User = require('../models/user');
const Email = require('../models/email');
const Gmail = require('node-gmail-api')
// TODO: will need to send passport token to route via user session & connect to this route
const gmail = new Gmail('ya29.GlukBFBYqBDPhzihfSzK9AaT5T1lSC6QTBkz0mepp9MljHRoYKI1tImIQufIXVSKBbkZg5Z0wTzXKuswvfwkRnZYtFl8JQgJat2VZDKa4bq3wdyhxLklKSRBnzxM')
const messages = gmail.messages('label:inbox', { max: 10 })

// messages.on('data', (data) => {
//   console.log(data.snippet)
// })

module.exports = router;

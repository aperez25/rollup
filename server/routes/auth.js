const router = require('express').Router();
const User = require('../models/user');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

const strategy = new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.REDIRECT_URL,
}, (authToken, refreshToken, profile, done) => {
  const name = profile.displayName;
  const email = profile.emails[0].value;
  User.findOrCreate({
    where: { googleId: profile.id },
    defaults: { name, email },
  })
  .spread((user) => {
    user.token = authToken
    done(null, user)
  })
  .catch((err) => {
    console.error(err)
    done(err)
  });
});

passport.use(strategy);

module.exports = router
.get('/', passport.authenticate('google', { scope: ['email', 'https://mail.google.com/'] }))
.get('/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/auth',
  }),
);

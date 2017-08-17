const router = require('express').Router()

module.exports =
// router.use('/path', require('./fileName))
router

.use('/mail', require('./gmail'))
.use('/auth', require('./auth'))
.use((req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404;
  next(err)
});

// Then on each individual page:

// // matches GET requests
// router.get('/', function (req, res, next) { /* etc */});
// // matches POST requests
// router.post('/', function (req, res, next) { /* etc */});
// // matches PUT requests
// router.put('/:puppyId', function (req, res, next) { /* etc */});
// // matches DELETE requests
// router.delete('/:puppyId', function (req, res, next) { /* etc */});

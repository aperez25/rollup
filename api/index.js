const router = require('express').Router()

// router.use('/path', require('./fileName))
router

.use((req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404;
  next(err)
})

module.exports = router;

// Then on each individual page:
// const router = require('express').Router();

// // matches GET requests
// router.get('/', function (req, res, next) { /* etc */});
// // matches POST requests
// router.post('/', function (req, res, next) { /* etc */});
// // matches PUT requests
// router.put('/:puppyId', function (req, res, next) { /* etc */});
// // matches DELTE requests
// router.delete('/:puppyId', function (req, res, next) { /* etc */});

// module.exports = router;
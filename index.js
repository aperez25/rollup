const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

app
.use(morgan('dev'))
.use(express.static(path.join(__dirname, './public')))
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))

.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public'))
})

.listen(3000, () => {
  console.log('Listening on localhost:3000')
})

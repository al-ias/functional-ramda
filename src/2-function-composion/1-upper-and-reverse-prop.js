'use strict'

const R = require('ramda')

const getKeyValue = (key) => (object) => object[key]
const toUpperCase = (string) => string.toUpperCase()



const reverseDIY = (string) => string.length > 0
  ? R.concat(R.last(string), R.pipe(R.init, reverseDIY)(string))
  : ''

const key = 'firstName'
const upperAndReverseFirstName = R.pipe(
    getKeyValue(key),
    toUpperCase,
    reverseDIY
)

module.exports = { upperAndReverseFirstName }
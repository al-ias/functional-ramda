'use strict'

const R = require('ramda')

const debugging = true
const logger = (string) => R.tap((arg) => {
  if (debugging) console.log(string + ' ', { arg })
})

module.exports = { logger }
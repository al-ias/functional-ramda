'use strict'

const R = require('ramda')
const { upperAndReverseFirstName } = require('./1-upper-and-reverse-prop')


const upperAndReverseFirstNameOfObj = (acc, elem) => [...acc, upperAndReverseFirstName(elem)]

const getFirstNamesArray = R.reduce(upperAndReverseFirstNameOfObj)([])

module.exports = { getFirstNamesArray }
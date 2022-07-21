'use strict'

const R = require('ramda');
const { logger } = require('../utils')

const getPrices = R.pluck('price')
const getSum = R.pipe(getPrices, R.sum)

const integerPart = R.memoizeWith(Number, (num) => Math.floor(num))
const centPart = (num) => Math.floor((num - integerPart(num)) * 100)
const divideIntegerFromCents = (number) => ({ 
  integer: integerPart(number),
  cents: centPart(number)
 })

const formatUSD = ({integer, cents}) => R.join('')([
  '$',
  R.toString(integer),
  '.',
  R.toString(cents)
])

const toUSDString = R.pipe(divideIntegerFromCents, formatUSD)

const getTotalPrice = R.pipe(
  getSum,
  logger('The intermediate result is'),
  divideIntegerFromCents,
  logger('After splitting'),
  formatUSD
) 

module.exports = { getTotalPrice, toUSDString }
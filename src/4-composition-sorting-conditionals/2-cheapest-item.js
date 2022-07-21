'use strict'

const R = require('ramda');
const { logger } = require('../utils');

const getPrice = R.prop('price')
const subtractPrice = (a, b) => getPrice(a) - getPrice(b)

const orderByAscendingPrice = R.sort(subtractPrice)

const getCheapestItem = R.pipe(
  orderByAscendingPrice,
  logger('Ordered list'),
  R.head
)

module.exports = { getCheapestItem }
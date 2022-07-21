'use strict'

const R = require('ramda');
const { logger } = require('../utils');

const getPrice = R.prop('price')
const isFristPriceLower = (a, b) => getPrice(a) > getPrice(b)
const getMinElement = (a, b) => isFristPriceLower(a, b) ? a : b

const minimizeArray = (arr) => {
  if (R.isEmpty(arr)) {
    throw new Error('Array must not be empty')
  }
  
  let minEl = R.head(arr)
  let notYetMinimized = R.tail(arr)

  if (!R.isEmpty(notYetMinimized)) {
    minEl = getMinElement(minEl, R.head(notYetMinimized))
    notYetMinimized = R.tail(notYetMinimized)
  }

  return R.isEmpty(notYetMinimized) ? [minEl] : minimizeArray([minEl, ...notYetMinimized])
}

const getCheapestItem = R.pipe(
  minimizeArray,
  logger('This is the minimized array'),
  R.head
)

module.exports = { getCheapestItem }
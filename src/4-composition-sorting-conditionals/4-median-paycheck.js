'use strict'

const R = require('ramda')
const { logger: log } = require("../utils")
const { toUSDString } = require('./1-total-cart-price')

const paycheckGreaterThan = (amount) => R.compose(R.gte(amount), R.prop('salary'))
const keepOnly = R.reject
 
const getMonthlyAmount = R.flip(R.divide)(12)

const getMedianPaycheck = R.pipe(
  log('This is the input'),
  keepOnly(paycheckGreaterThan(100_000)),
  R.pluck('salary'),
  log('Theese is are salaries'),
  R.median,
  log('This is the median'),
  getMonthlyAmount,
  log('This is the montly amount'),
  toUSDString,
  log('This is the the usd montly amount')
)

module.exports = { getMedianPaycheck }
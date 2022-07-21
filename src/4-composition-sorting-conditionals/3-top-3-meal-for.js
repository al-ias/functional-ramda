'use strict'

const R = require('ramda')
const { logger: log } = require("../utils")

const thenThrowError = msg => (() => { throw new Error(msg) })

const defaultDoNothing = [R.T, R.identity]
const throwIfHasInvalidArgoument = R.cond([
  [R.complement(R.is(Array)), thenThrowError('Menu must be an Array')],
  [R.isEmpty, thenThrowError('Menu must not be empty')],
  defaultDoNothing
])

const keepItems = R.reject
const thatHavePriceLesserThan = (price) => R.pipe(R.prop('price'), R.lte(price))

const byBestRating = (a, b) => R.descend(R.prop('rating'), a ,b)

const keepTop = (n) => R.slice(0, n)

const getTop3MealsFor = (price, menu) => R.pipe(
  throwIfHasInvalidArgoument,
  log('The value supplied is'),
  keepItems(thatHavePriceLesserThan(price)),
  log('After filtering'),
  R.sort(byBestRating),
  log('After sorting'),
  keepTop(3),
  log('After keeping top 3')
)(menu)

module.exports = getTop3MealsFor
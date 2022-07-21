'use strict'

const R = require('ramda')

const sayScoreIs = (phrase) => R.replace('{score}', R.__, '{score} is ' + phrase)
const isGreaterThan = R.flip(R.gte)

const scoreToDescription = R.cond([
  [isGreaterThan(800), sayScoreIs('excellent!')],
  [isGreaterThan(700), sayScoreIs('good')],
  [isGreaterThan(650), sayScoreIs('fair')],
  [R.T, sayScoreIs('poor')]
])

const getCreditScoreRatings = R.map(scoreToDescription)

module.exports = { getCreditScoreRatings }
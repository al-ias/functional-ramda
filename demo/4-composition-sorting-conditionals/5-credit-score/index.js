'use strict'

const { getCreditScoreRatings } = require("../../../src/4-composition-sorting-conditionals/5-credit-score")
const scores = require('./scores.json')

const creditScore = getCreditScoreRatings(scores)

console.log({ creditScore })
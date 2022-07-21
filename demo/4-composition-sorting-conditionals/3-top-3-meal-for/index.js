'use strict'

const getTop3MealsFor = require('../../../src/4-composition-sorting-conditionals/3-top-3-meal-for')
const menu = require('./menu')

const top3 = getTop3MealsFor(12, menu)
console.log({top3})
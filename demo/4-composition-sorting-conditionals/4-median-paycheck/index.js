'use strict'

const { getMedianPaycheck } = require('../../../src/4-composition-sorting-conditionals/4-median-paycheck')
const employees = require('./employees')


const medianPaycheck = getMedianPaycheck(employees)
console.log({ medianPaycheck })
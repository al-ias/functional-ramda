'use strict'

const cart = require('./cart-example')
const { getCheapestItem } = require("../../../src/4-composition-sorting-conditionals/2-cheapest-item-2")

const cheapestItem = getCheapestItem(cart)
console.log({ cheapestItem })
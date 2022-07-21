'use strict'

const { getTotalPrice } = require("../../../src/4-composition-sorting-conditionals/1-total-cart-price")
const cart = require("./cart-example")

const totalPrice = getTotalPrice(cart)
console.log(totalPrice)
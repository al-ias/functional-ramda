'use strict'

const { upperAndReverseFirstName } = require("../../src/2-function-composion/1-upper-and-reverse-prop")

const bobo = {
  firstName: 'Bobo',
  lastName: 'Flakes'
}

const boboReversed = upperAndReverseFirstName(bobo)

console.log(boboReversed)
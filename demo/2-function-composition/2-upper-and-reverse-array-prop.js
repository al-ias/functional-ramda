'use strict'

const { getFirstNamesArray } = require("../../src/2-function-composion/2-upper-and-reverse-array-prop");

const users = [{
  firstName: 'Bobo',
  lastName: 'Flakes'
}, {
  firstName: 'Lawrence',
  lastName: 'Shilling'
}, {
  firstName: 'Anon',
  lastName: 'User'
}];

const usersReversed = getFirstNamesArray(users)

console.log(usersReversed)
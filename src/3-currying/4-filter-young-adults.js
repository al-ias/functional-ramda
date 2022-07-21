'use strict'

const R = require('ramda')

/* 
const keepYoungAdults = (people) => people.filter((p) => (
  p.age >= 18 && p.age <= 25
));
*/

const isOlderThan18 = R.gte(18)
const isYoungerThan25 = R.lte(25)
const isYoungerAdult = R.both(isOlderThan18, isYoungerThan25)
const filterYoung = R.propSatisfies(isYoungerAdult, 'age')
const keepYoungAdults = R.filter(filterYoung)

module.exports = { keepYoungAdults }
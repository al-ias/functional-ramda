'use strict'

const R = require('ramda')

/* 
const defaultToBobo = defaultTo('Bobo');

defaultToBobo(null); // 'Bobo'
defaultToBobo('Patrick'); // 'Patrick'
*/

const toCurry = (defaultVal, val) => R.ifElse(
  R.where(R.isNil),
  R.thunkify(defaultVal),
  R.thunkify(R.clone(val))
)

const defaultToBobo = R.curry(toCurry)

module.exports = { defaultToBobo }
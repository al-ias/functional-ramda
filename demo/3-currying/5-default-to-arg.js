'use strict'

const { defaultTo } = require("ramda")


console.log('null\t' + defaultTo('Bobo', null))
console.log('not null\t' + defaultTo('Bobo', 'Gino') + '\n')

console.log('null curryed\t' + defaultTo('Bobo')(null))
console.log('not null curryed\t' + defaultTo('Bobo')('Gino'))
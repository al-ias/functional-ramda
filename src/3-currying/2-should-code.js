'use strict'

const R = require('ramda')

/* 
const shouldCode = (person) => (
  person.lovesTech && person.worksHard ?
    `${person.name} may enjoy a tech career!` :
    `${person.name} wouldn't enjoy a tech career.`
);
 */

const _WillEnjoyTechCareer = R.replace('{name}', R.__, '{name} may enjoy a tech career!')
const _WouldntEnjoyTechCareer = R.replace('{name}', R.__, '{name} wouldn\'t enjoy a tech career.')
const nameOf = R.prop('name')

/* const doesLoveTech = R.propEq('lovesTech', true)
const doesWorkHard = R.propEq('worksHard', true)
const isPerfect = R.both(doesLoveTech, doesWorkHard) */

const couldLikeIt = R.where({ lovesTech: R.equals(true), worksHard: R.equals(true) })
const pipeAferNameOf = (fn) => R.pipe(nameOf, fn)
const theyWillEnjoyCareer = pipeAferNameOf(_WillEnjoyTechCareer)
const theyWoudntEnjoyCareer = pipeAferNameOf(_WouldntEnjoyTechCareer)

/* const shouldCode = (user) => R.ifElse(
  couldLikeIt,
  willEnjoyCareer(user),
  woudntEnjoyCareer(user),
) */

const shouldCode = R.ifElse(
  couldLikeIt,
  theyWillEnjoyCareer,
  theyWoudntEnjoyCareer,
)

module.exports = { shouldCode }

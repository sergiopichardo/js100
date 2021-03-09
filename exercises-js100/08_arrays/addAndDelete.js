/*
We are given the following array of energy sources.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

Remove 'fossil' from the array, then add 'geothermal'
to the end of the array.
*/


/**
 * @param {string[]} energyTypes
 * @param {string} energyToRemove
 * @param {string} energyToAdd
 * @return {string[]} - return updated array
 */
function addAndRemove(energyTypes, itemToRemove, itemToAdd) {
  let index = energyTypes.indexOf(itemToRemove)
  if (index !== -1) {
    energyTypes.splice(index, 1)
    energyTypes.push(itemToAdd)
  }
  return energyTypes
}

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
console.log(addAndRemove(energy, 'fossil', 'geothermal'))
// [solar', 'wind', 'tidal', 'fusion', 'geothermal']

let energy2 = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
console.log(addAndRemove(energy2, 'wind', 'nuclear'))
// ['fossil', 'solar', 'tidal', 'fusion', 'nuclear']
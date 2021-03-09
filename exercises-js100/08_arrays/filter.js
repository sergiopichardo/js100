/*
Count the number of elements in scores that are 100 or above.
*/


/**
 * @param {number[]} scores
 * @param {number} upperlimit
 * @return {number} - numbers greater than limit
 */
function countGreaterThanOrEqualToLimit(scores, upperLimit) {
  let count = 0;
  for (let i = 0; i < scores.length; i++)  {
    if (scores[i] >= upperLimit) {
      count++;
    }
  }
  return count;
}

let scores = [96, 47, 113, 89, 100, 102];
countGreaterThanOrEqualToLimit(scores, 100); // 3
/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * Note:
 * 1. You can use a `for...of` loop to iterate through the characters
 *    of a string one letter at a time.
 * 2. You can access a specific character using string[i], as
 *    if the string were an array.
 *
 * Both of these are enough to complete this exercise.
 *
 * @example
 * countLetter('hello', 'l'); // => 2
 * countLetter('Mississippi', 's'); // => 4
 * countLetter('Mississippi', 'x'); // => 0
 * countLetter('Mississippi', 'm'); // => 0 (no lower-case m's)
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
  let array =[];
  for (l of string) {
    if(letter === l) {
      array.push(1);
    } else {
      //return false;
    }
  }
  return array.length;

}

if (require.main === module) {
  console.log(countletter('Running sanity checks for countLetter:'));
  console.log(countletter('hello', 'l')); // => 2
  console.log(countletter('Mississippi', 's')); // => 4
  console.log(countletter('Mississippi', 'x')); // => 0
  console.log(countletter('Mississippi', 'm')); // => 0 (no lower-case m's) 
}

module.exports = countLetter;

/*  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const lowerStr = str.toLowerCase();

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const vowelCount = Array.from(lowerStr).filter(char => vowels.includes(char)).length;

  return vowelCount;
}

module.exports = countVowels;

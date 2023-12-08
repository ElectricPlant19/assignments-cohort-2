  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const lowerStr = str.toLowerCase();

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const vowelCount = Array.from(lowerStr).filter(char => vowels.includes(char)).length;

  return vowelCount;
}

const testString = "Hello, World!";
const result = countVowels(testString);

console.log(`The number of vowels in "${testString}" is: ${result}`);


module.exports = countVowels;

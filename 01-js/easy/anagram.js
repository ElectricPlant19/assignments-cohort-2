/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length != str2.length) {
    return false;
  }

  let strLength = str1.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < strLength; i++) {
    sum1 = sum1 + str1.charCodeAt(i);
    sum2 = sum2 + str2.charCodeAt(i);
  }

  if (sum1 == sum2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;

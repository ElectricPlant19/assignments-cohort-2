/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let count = 0;
  let len = str.length;
  let str2 = "";

  for (let i = 0; i < len; i++) {
    if (str[i].toLowerCase() != str[i].toUpperCase()) {
      str2 = str2 + str[i];
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] == str2[str2.length - 1 - i]){
      count++;
    }
  }

  if (count != str2.length) {
    return false;
  }
  return true;
}


// my    name       is     aditya
// my name is aditya


function removeSpaces(inputString) {

let cleanedString = '';
let isSpace = false;

for (let i = 0; i < inputString.length; i++) {
  const currentChar = inputString[i];

  if (currentChar === ' ') {
    if (!isSpace) {
      cleanedString += currentChar;
    }
    isSpace = true;
  } else {
    cleanedString += currentChar;
    isSpace = false;
  }
}

return cleanedString;
}

console.log(removeSpaces("my    name       is     aditya"));

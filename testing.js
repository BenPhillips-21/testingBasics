function capitalize(str) {
    let uppercase = str[0].toUpperCase()
    let word = str.slice(1, str.length)
    let result = uppercase + word
    return result
}

let capitalizedWord = capitalize('chungus')
console.log(capitalizedWord)

function reverseString(str) {
    let splitString = str.split("")
    let reversed = splitString.reverse()
    let jointString = reversed.join("")
    return jointString
}

let reversedString = reverseString('reversal')
console.log(reversedString)

function calculator(x, y) {
    const functions = {
    add: function (x, y) {
        return x + y
    },
    subtract: function (x, y) {
        return x - y
    },
    multiply: function (x, y) {
        return x * y
    },
    divide: function (x, y) {
        return x / y
    }
    }
    return functions
}

let calculate = calculator()
let addResult = calculate.add(1, 2)
console.log(addResult)
let subtractResult = calculate.subtract(5, 4)
console.log(subtractResult)

function caesarCipher(string, num) {
  let str = string.toLowerCase();
  let array = [];

  for (let i = 0; i < str.length; i++) {
    let originalCharCode = str.charCodeAt(i);
    let newCharCode = originalCharCode + num;

    if (newCharCode > 122) {
      newCharCode = newCharCode - 26;
    }

    let newChar = String.fromCharCode(newCharCode);
    array.push(newChar);
  }

  let resultString = array.join("");
  let newString = [];

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let originalChar = resultString[i];

    if (currentChar === currentChar.toUpperCase()) {
      let uppercase = originalChar.toUpperCase();
      newString.push(uppercase);
    } else {
      newString.push(originalChar);
    }
  }

  let finalResult = newString.join("");
  return finalResult;
}


let encryptResult = caesarCipher('XylOpHoNE', 6)
console.log(encryptResult)

function analyzeArray(array) {
    let sum = array.reduce((total, current) => total + current, 0);
    let average = sum / array.length;

    let length = array.length

    let min = Math.min(...array)

    let max = Math.max(...array)

    const resultObject = {
      average: average,
      length: length,
      min: min,
      max: max,
    };
    return resultObject;
}

let analyzedArray = analyzeArray([2, 6, 3, 9, 7])
console.log(analyzedArray)


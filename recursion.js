//// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, index = 0, currentMax){
    // This function returns the largest number in a given array.
  if (index === arr.length) {
    return currentMax;
  }
  else if (index === 0) {
    currentMax = arr[index];
  }
  else if (currentMax < arr[index]) {
    currentMax = arr[index];
  }
  return findMax(arr, index + 1, currentMax)
}

function factorial(someNum){
    // This function returns the factorial of a given number.
  let fact = 1;
  function factsTheSome() {
   if (someNum > 0) {
     fact *= someNum;
     someNum = someNum - 1;
     return factsTheSome();
    }
    return fact;
  }
  return factsTheSome();
}

function fibonacci(nthNum){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1

  // NEED TO RETHINK::::::::::
//   below works, and I understand how, but it basically counts by 1 and uses two recursive calls...which is very inefficient
//   seems an iterative solution is more efficient, but not the prescribed task here.
  if (nthNum <= 2) {
    return 1;
  }
  return fibonacci(nthNum - 1) + fibonacci(nthNum - 2);
}

function coinFlips(flipNum){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
  let flipArray = ["H", "T"];

  function helpFlips() {
      if (flipNum == 1) {
        return flipArray;
      } else {
        // need flipArray to drop then concatenate in sequence.
        // console.log(`Before .concat:  ${flipArray}`);
        flipArray.push(...flipArray)
        // console.log(`AFTER .concat:  ${flipArray}`);
        // console.log(`Full array length after concat:  ${flipArray.length}`);
        let halfArrayLen = (flipArray.length / 2)
        for (let i = 0; i < flipArray.length; i++) {
          if (i < halfArrayLen) {
            flipArray[i] += "H"
          } else if (i >= halfArrayLen)
            flipArray[i] += "T"
        }
        flipNum -= 1;
        // console.log(`BEFORE RECURSION:  ${flipArray}`);
        return helpFlips();
      }
    return flipArray
  }
  return helpFlips()
//   basecase is 1 flips = 1 H and 1 T
}

function letterCombinations(arrOfLetts){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

  let comboArray = [];
  comboArray.push(...arrOfLetts); //set base case
  console.log(`this is the combo array at the start: ${comboArray}`);
  let escapeCounter = arrOfLetts.length;

  function helpCombo() {
    if (escapeCounter > 1) {
      let j = 0;
      for (let i = escapeCounter; i < arrOfLetts.length; i++) {
        comboArray[i] += arrOfLetts[j]
        console.log(`this is the combo array at ${i}: ${comboArray}`);
        j++
      }
      escapeCounter -= 1;
      return helpCombo()
    }
    return comboArray
  }
  return helpCombo();
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}

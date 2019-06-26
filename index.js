// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length > 1) {
    return myString[myString.length - 1] + reverseString(myString.substring(0, myString.length - 1))
    // console.log(myString)
  } else {
    return myString[0]
  }
}

function isPalindrome(myString) {
    if (myString[0] === myString[myString.length - 1] && myString.length > 1) {
      isPalindrome(myString.substring(1, myString.length - 1))
      return true
    } else {
      return false
    }
  }

function addUpTo(array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array, index - 1)
  } else {
    return array[0]
  }
}

function maxOf(array) {
  if (array.length > 1) {
    return Math.max(array[0], maxOf(array.slice(1)))
  } else {
    return array[0]
  }
}

function includesNumber(array, number) {
  if (array.length > 0) {
    return array[0] === number ? true : includesNumber(array.slice(1), number)
  } else {
    return false
  }
}

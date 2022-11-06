function isPalindrome(word) {
  // Write your algorithm here
  let reverseTestWord = word.split("").reverse().join("")
  if (word === reverseTestWord){
    return true
  } else {
    return false
  }
}

console.log(isPalindrome(""))


/* 
  Add your pseudocode here
*/ //1. Check to see if the string is equal to the same string but written backwards.
  // 2. If the strings are equal, return true.
  // 3. Otherwise return false.

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

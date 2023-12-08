//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
 let regesentenceOriginal = /[^a-zA-Z0-9]/g
 let sentenceOriginal=s.replace(regesentenceOriginal,"").toLowerCase();
  console.log(sentenceOriginal)
  let reverseSentence = sentenceOriginal.split("").reverse().join("")
  console.log(reverseSentence)
  return sentenceOriginal === reverseSentence ? true:false
};
 
 



const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true

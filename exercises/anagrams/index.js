// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const string1Array = stringA.toLowerCase().trim(" ").split("");

//   const dictionary = {};

//   for (const letter of string1Array) {
//     dictionary[letter] = true;
//   }

//   const string2Array = stringB.toLowerCase().trim(" ").split("");

//   if (string1Array.length !== string2Array.length) {
//     return false;
//   }

//   for (const letter of string2Array) {
//     if (!dictionary[letter]) {
//       return false;
//     }
//   }

//   return true;
// }

function anagrams(stringA, stringB) {
  const a = stringA.toLowerCase().trim(" ").split("").sort().join("");
  const b = stringB.toLowerCase().trim(" ").split("").sort().join("");

  console.log(a, b);

  return a === b;
}

// Lets learn regular expressions now!

module.exports = anagrams;

function test() {
  const str = "Resh ma@bdfg$^&";

  const regex = new RegExp(/\w/gi);

  console.log(regex.exec());

  console.log(str.replace(regex, ""));
}

console.log(test());

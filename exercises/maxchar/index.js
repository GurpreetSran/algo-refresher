// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
function maxChar(str) {
  const result = str.split("").reduce((map, char) => {
    let count = 0;
    for (const c of str) {
      if (c === char) {
        count++;
      }
    }

    map[char] = count;

    return map;
  }, {});

  const sortResult = Object.values(result).sort();
  const maxvalue = sortResult[sortResult.length - 1];

  return Object.keys(result).find((key) => result[key] === maxvalue);
}
*/

function maxChar(str) {
  const map = {};
  for (const char of str) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  let resultKey = "";
  let maxValue = 0;

  for (const key in map) {
    if (map[key] > maxValue) {
      resultKey = key;
      maxValue = map[key];
    }
  }

  return resultKey;
}
module.exports = maxChar;

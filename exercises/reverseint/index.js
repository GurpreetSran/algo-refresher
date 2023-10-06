// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n === 0) {
    return 0;
  }

  const strNo = String(n);

  if (n < 0) {
    const res = strNo.slice(1, strNo.length);
    return Number(-+res.split("").reverse().join(""));
  }

  return Number(strNo.split("").reverse().join(""));
}

module.exports = reverseInt;

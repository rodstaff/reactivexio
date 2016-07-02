//// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var unFiltered = [12, 5, 8, 130, 44];

function isBigEnough(value) {
  return value >= 10;
}
var filtered = unFiltered.filter(isBigEnough);
// filtered is [12, 130, 44]
console.log(filtered);
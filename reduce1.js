//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

var array1 = [0, 1, 2, 3];
var total = array1.reduce(function(a, b) {
  return a + b;
});
console.log(total);
// total == 6
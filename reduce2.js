//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

//var array1 = [[0, 1], [2, 3], [4, 5]];
var array1 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
var array1 = [[0, 1, 2], [2, 4, 5], [3, 7, 8]]

var flattened = array1.reduce(function(a, b) {
  return a.concat(b);
}, []);
console.log(flattened);
// flattened is [0, 1, 2, 3, 4, 5]
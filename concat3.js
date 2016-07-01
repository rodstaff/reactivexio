//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
var alpha = ['a', 'b', 'c'],
    test1 = [1, [2, 3], [4, [5,6,7],]];

var alphaNumeric = alpha.concat(1, [2, 3], [4, [5,6,7],]);
console.log(alphaNumeric);
//[ 'a', 'b', 'c', 1, 2, 3, 4, [ 5, 6, 7 ] ]
var alphaNumeric = alpha.concat(test1);
console.log(alphaNumeric);
//[ 'a', 'b', 'c', 1, [ 2, 3 ], [ 4, [ 5, 6, 7 ] ] ]
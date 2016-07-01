//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3],
    test = [ [1, 2, 3], 4 , 5, [ [6], [7], [8] ],9 , 10];

alpha.push(1,2,3);
console.log(alpha);
//[ 'a', 'b', 'c', 1, 2, 3 ]
var test1 = alpha;
console.log(test1)
//[ 'a', 'b', 'c', 1, 2, 3 ]
alpha.pop();
console.log(alpha);
//[ 'a', 'b', 'c', 1, 2]
console.log(test1);
//[ 'a', 'b', 'c', 1, 2]
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); 
//[ 'a', 'b', 'c', 1, 2, 1, 2, 3 ]
console.log(alpha);
//[ 'a', 'b', 'c', 1, 2]
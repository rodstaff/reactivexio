//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(numbers, doubles);
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]

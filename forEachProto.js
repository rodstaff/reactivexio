//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Note
};

var obj = new Counter();
obj.add([2, 5, 9]);
console.log('obj count:  ' + obj.count);
// 3 
console.log('obj sum:  ' + obj.sum);
// 16
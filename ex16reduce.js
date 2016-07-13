var testArray1 = [1, 3, 5, 4, 2],
//    sumArray;
      sumArray = [];

Array.prototype.reduce = function() {
	var sum = 0;
    for (i=0;i<this.length; ++i) {
    sum += this[i];
    }
//    return sumArray = [sum];
      return sumArray.push(sum);
};
testArray1.reduce();
console.log(sumArray);
var subArrays = [[1,2], [3,4], [5,6]]
var newArray1 = [];

for (var i = 0; i < subArrays.length; i++) {
	for (var j = 0; j < subArrays[i].length; j++) {
		newArray1.push(subArrays[i][j])
		console.log("push", newArray1);
	}
	console.log("\n");
}
var newArray2 = [];
for (var i = 0; i < subArrays.length; i++) {
	newArray2 = newArray2.concat(subArrays[i]);
	console.log("concat", newArray2)
}

console.log("newArray1", newArray1);
console.log("newArray2", newArray2);
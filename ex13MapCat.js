var spanFrenEnglWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
var allWords = [];

Array.prototype.concatAll = function() {
    this.forEach( function(val1) {
        val1.forEach( function (val2) {
                return allWords.push(val2);
        });
    });
};
Array.prototype.concatMap = function() {
	return this.map(function(item) {
			return projectionFunction(item);
		}).concatAll();
		// apply the concatAll function to flatten the two-dimensional array
//		allWords.concatAll();
};
function projectionFunction (value) {
    return value
};
spanFrenEnglWords.concatMap();
console.log(allWords);

// Array.prototype.concatAll = function() {
//     this.forEach( function(arr) {
//         arr.forEach ( function(value){
//             return allWords.push(value);
//         });
//     });
// }; 
// spanFrenEnglWords.concatAll();
// console.log(allWords);
// [ 'cero', 'rien', 'zero', 'uno', 'un', 'one', 'dos', 'deux', 'two' ]
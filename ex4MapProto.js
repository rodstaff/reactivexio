var newReleases = require('./aDataFiles/newReleases');	
var newMapArray = newReleases.map(theProjector);

Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		results.push(projectionFunction(itemInArray));
	});
	return results;
};
function theProjector (prop){
	return {id:prop.id, title: prop.title};
};
console.log(newMapArray);
// [ { id: 70111470, title: 'Die Hard' },
//   { id: 654356453, title: 'Bad Boys' },
//   { id: 65432445, title: 'The Chamber' },
//   { id: 675465, title: 'Fracture' } ]
// console.log(results); //  results is not defined, becuase 'results' is local to the function 'theProjector'!!!
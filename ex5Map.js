var newReleases = require('./aDataFiles/newReleases');		
var videoAndTitlePairs = newReleases.map(theProjector); 

function theProjector (prop) {
	return {id:prop.id, title: prop.title};
//  return {prop.id, prop.title};  // <-- this will not run!
};
console.log(videoAndTitlePairs);
// [ { id: 70111470, title: 'Die Hard' },
//   { id: 654356453, title: 'Bad Boys' },
//   { id: 65432445, title: 'The Chamber' },
//   { id: 675465, title: 'Fracture' } ]
	
var newReleases = require('./aDataFiles/newReleases');	
var videoAndTitlePairs = [];

newReleases.forEach( function(prop) {
    return videoAndTitlePairs.push({id:prop.id, title: prop.title});  // <-placing 'return' here has the same effect !
//	return videoAndTitlePairs;
});
console.log(videoAndTitlePairs);
//[ { id: 70111470, title: 'Die Hard' },
//  { id: 654356453, title: 'Bad Boys' },
//  { id: 65432445, title: 'The Chamber' },
//  { id: 675465, title: 'Fracture' } ]


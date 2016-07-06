var newReleases = require('./aDataFiles/newReleases');	
var videoRatingFive = newReleases.filter(ratingFive).map(findId);	

function ratingFive(prop) {
    return prop.rating == 5.0;       //returns the whole object
};
function findId(prop) { 
//	return {id:arg.id}   //return1   //returns only the 'id' property and/or property value
    return prop.id;      //return2
};
console.log(videoRatingFive);
//[ { id: 654356453 }, { id: 675465 } ]  <-- return1
//[ 654356453, 675465 ]                  <-- return2

var test1 = newReleases.filter(ratingFive); // <-- this is for checking midway results
console.log(test1);
// [ { id: 654356453,
//     title: 'Bad Boys',
//     boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//     uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//     rating: [ 5 ],
//     bookmark: [ [Object] ] },
//   { id: 675465,
//     title: 'Fracture',
//     boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//     uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
//     rating: [ 5 ],
//     bookmark: [ [Object] ] } ]
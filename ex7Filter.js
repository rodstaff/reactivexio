var newReleases = require('./aDataFiles/newReleases');		
var videoRatingFive = newReleases.filter(ratingFive);

// function ratingFive(obj) {
//    	if (obj.rating == 5.0)   
// 	return obj;
// };
console.log(videoRatingFive);
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

function ratingFive(obj) {
   	if (obj.rating == 5.0)   
	return {id:obj.id, title: obj.title};
};
// this still has same result as above, i.e. this still returns the whole object!
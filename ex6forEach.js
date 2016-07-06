var newReleases = require('./aDataFiles/newReleases');	
var videoRatingFive = [];

newReleases.forEach( function(obj) {
   	if (obj.rating == 5.0)    //    if (video.rating === "[5]") <--this is wrong!!??
    return videoRatingFive.push(obj);  // <-- placing 'return' here has the same intended effect!
//	return videoRatingFive;
});
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


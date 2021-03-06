var movieLists = require('./aDataFiles/movieLists4');	
var catResults = [];

//var map3Filter1 = movieLists.map( function(objEntry) {
movieLists.map( function(objEntry) {
    return objEntry.videos.map( function(propVideos) {
	    return propVideos.boxarts.filter( function(propBoxarts) {
	        return propBoxarts.width === 150;}).map( function(propBoxarts) {
               return catResults.push({id: propVideos.id, title: propVideos.title, boxart: propBoxarts.url});
	    }); 
	}); 
});
//console.log(map3Filter1);  //this is just a debugger
//[ [ [ 1 ], [ 2 ] ], [ [ 3 ], [ 4 ] ] ]
console.log(catResults);
// [ { id: 70111470,
//     title: 'Die Hard',
//     boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
//   { id: 654356453,
//     title: 'Bad Boys',
//     boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg' },
//   { id: 65432445,
//     title: 'The Chamber',
//     boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg' },
//   { id: 675465,
//     title: 'Fracture',
//     boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' } ]
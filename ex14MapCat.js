var movieLists = require('./aDataFiles/movieLists4');	
var testResult = [];

Array.prototype.concatAll = function() {
    return this.map(function(value) {
        return testResult.push(value);
    });
};  
Array.prototype.concatMap = function() {
    return this.map(function(item) {
        return projectionFunction(item) 
    });
};
function projectionFunction(objEntry) {
    return objEntry.videos.map( function(propVideos) {
        return propVideos.boxarts.filter( function(propBoxarts) {
            return propBoxarts.width === 150;}).map( function(propBoxarts) {
                 return {id: propVideos.id, title: propVideos.title, boxart: propBoxarts.url};
            }).concatAll();   
    });
};     
movieLists.concatMap();
console.log(testResult);

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

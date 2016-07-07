var freshReleases = require('./aDataFiles/freshReleases');	
var areDramas = require('./aDataFiles/areDramas');
var movieLists = [];
var idResults = [];
movieLists.push(freshReleases, areDramas);

var mapTwice = movieLists.map( function(objEntry) {
    return objEntry.videos.map( function(prop) {
	    return prop.id;
	});
});
//mapTwice.concatAll();   // <-- if placed here, the code will not run! = "TypeError: mapTwice.concatAll is not a function"
Array.prototype.concatAll = function() {
    this.forEach( function(arrEntry) {
        arrEntry.forEach( function(value){
           return idResults.push(value); 
        });
    });
};
mapTwice.concatAll();   // <-- if placed here, works!??
console.log(mapTwice);  // -> [ [ 70111470, 654356453 ], [ 65432445, 675465 ] ]
console.log(idResults); // -> [ 70111470, 654356453, 65432445, 675465 ]
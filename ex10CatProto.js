var freshReleases = require('./aDataFiles/freshReleases');	
var areDramas = require('./aDataFiles/areDramas');
var movieLists = [];
var idResults = [];
movieLists.push(freshReleases, areDramas);

//movieLists.concatAll();  //if placed here:  "TypeError: movieLists.concatAll is not hoisted to the top so is not recognized here

Array.prototype.concatAll = function() {
    this.forEach( function(obj) {
        obj.videos.forEach( function(prop){
           return idResults.push(prop.id); 
        });
    });
};
movieLists.concatAll();  // code runs if placed here!
console.log(idResults);
//->[ 70111470, 654356453, 65432445, 675465 ]





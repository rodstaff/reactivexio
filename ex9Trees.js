var freshReleases = require('./aDataFiles/freshReleases');	
var areDramas = require('./aDataFiles/areDramas');
var movieLists = [];
var idResults = [];
movieLists.push(freshReleases, areDramas);

movieLists.forEach( function(obj){
    obj.videos.forEach( function(prop){
       return idResults.push(prop.id); 
    });
});
console.log(idResults);
//[ 70111470, 654356453, 65432445, 675465 ]
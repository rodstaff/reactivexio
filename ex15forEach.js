var boxarts = [
			{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
			{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
	],
	currentSize,
	maxSize = 0,
	largestBoxart;

boxarts.forEach(function(boxart) {
    currentSize = boxart.width * boxart.height;
	    if (currentSize > maxSize) {
		    largestBoxart = boxart;    // even without 'return largestBoxart' the global 'largestBoxart' is updated!
			maxSize = currentSize;
		};
//    return largestBoxart;
});
console.log(largestBoxart);	
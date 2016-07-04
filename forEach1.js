// Define the callback function.
function ShowResults(value, index, ar) {
    console.log("value: " + value);
    console.log(" index: " + index);
//    console.log("<br />");
}

// Create an array.
var letters = ['ab', 'cd', 'ef'];

// Call the ShowResults callback function for each
// array element.
letters.forEach(ShowResults);

// Output:
//  value: ab index: 0 
//  value: cd index: 1 
//  value: ef index: 2 
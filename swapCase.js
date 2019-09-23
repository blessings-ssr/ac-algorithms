/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at/ DONT USE THIS 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/
//Input: a string
//Output: a string
//Create a variables, to store output of the transformed letters, then create a variable to store the array (once I have split the string into an array)
//Turn string into an array using .split
//You need something to store the output
//Create the FOR Loop: the purpose is to run through the array and look at each letter
//Use a FOR Loop to go thru each letter
//Use .toLowerCase() or .toUpperCase()
//Run a conditioanl state,ent that looks at whether or not the letter I am on is lowercase.
//Use a conditional statement to test if it is lowercase
//If true , add that letter to our output string once we have transformed it to uppercase.
//If false, add that letter to our output string once we have transformed it to lowercase.
//We want to check gthe case of the element in position zero
//Return the output to get the value of the full string


function swapCase(str) {
	var output = "";
	var array = str.split("");
	for (var i = 0; i < array.length; i++){
		if( array[i] === array[i].toLowerCase()) {
			output = output + array[i].toUpperCase();
		} else {
			output = output + array[i].toLowerCase()
		}
	}
	return output;
}

var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"
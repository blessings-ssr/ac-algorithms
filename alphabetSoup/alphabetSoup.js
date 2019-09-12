/* 
Write a function alphabetSoup(str) that takes a string and returns a string with
the letters in alphabetical order. Assume the input will not contain numbers or punctuation.
Hint: Check out split(), sort() and join() methods at 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Bonus:
If there are spaces in the input, do not include them in the result.
Hint: Check out trim() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

/**
Examples:

var result = alphabetSoup("hello");
console.log(result) // "ehllo"

var result = alphabetSoup("");
console.log(result) // ""

var result = alphabetSoup("f");
console.log(result) // "f"

var result = alphabetSoup("my string");
console.log(result) // " gimnrsty"

Bonus:
var result = alphabetSoup("my string oh my");
console.log(result) // "ghimmnorstyy"

**/
//Input: a string
//Output: a string, but with letters in alphabetical order

//Step one: Create a variable to store our output
//Step twp: Split the string into an array, so that each character is its own element.
//Step three: Sort the array.
//Step four: Join the array so that it turns back into a string.
//Step five: Trim the string so that it removes all blank spaces.
//Step six: Return the value of the string output.

function alphabetSoup(str) {
	var output = str.split("").sort().join("").trim();
	return output; 
}
var result = alphabetSoup("whats up!");
console.log(result);

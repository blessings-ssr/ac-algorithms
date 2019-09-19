/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

//Input: a number
//Output: a string, with dashes between the odd numbers.

//Create a variable to store the output string
//Create a variable to store the transformation of the number first to a string and them to an array tools: .toString().split("")
4982
["4", "9", "8", "2"]
//Create a for loop to go thru each of the numbers in the array 
	// Need a conditional statement that will test the number in the loop is odd && if the number after it is odd.
		//If true, I want to add the number and the dash to the string
		//If false I want to just add the number

function dashInsert(num) {
	var output = "";
	var array = num.toString().split("");
	for (var i = 0; i < array.length; i++){
		if( array[i] % 2 === 1 && array[i + 1] % 2 === 1)
		{
			output = output + array[i] + "-";
		} else {
			output = output + array[i];
		}
	}
}
dashInsert(34567);
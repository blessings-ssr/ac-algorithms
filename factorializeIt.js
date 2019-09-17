//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//Input a whole number, Integer

//mean the product of all of the numbers between 1 and that number
// Use a variable to store the output (the product)
// Multiplication operator (*)
// Is there a JavaScript method that calculates a factorial?
// Loop: we need to start at 1 and end at the number that is the parameter, and instead of adding each time in the loop, we can multiply

 function factorialize(num) {
   var output = 1;
   for (var i = 1; i <= num; i++){
     output = output * i; 
   } 
   return output;
 } 
 var result = factorialize(5);
 consule.log(result); 
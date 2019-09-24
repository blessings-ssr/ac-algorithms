//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//Input: is a String
//Output: is a nested array
//Create a variable that stores the transformation of the input string into an array
//Create a conditiona statement that checks to see if the current letter we are on in the loop is equal to one of the 4 letters, 4 conditions to test each of the letters
//If true, push an array with the two strings into our variable storing the array.
//Be advised :
//The letter you are given goes first, then the paired letter goes second
//Split and push is needed
//We will make two variables
//We need an input, one is a variable
//We need an output, one is a variable

function pairElement(str) {
  var output = [];
  var array = str.split("");
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "G"){
      output.push(["G","C"]);
    } else if (array[i] === "C"){
      output.push(["C","G"]);
    } else if (array[i] === "T"){
      output.push(["T","A"]);
    } else {
    output.push(["A","T"]);
    }
  }
  return output;  
}
pairElement("GCG");

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
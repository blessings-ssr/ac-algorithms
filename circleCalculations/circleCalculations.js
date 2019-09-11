//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

//Problem Statement
//Given the radius from the user, we want to find the area and the perimeter of the circle.
//Input: radius, a number
//Create a variable to store the calculated area
//Create a variable to store the calculated perimeter
//Calculater area with PI * radius ^ 2
//Calculate perimeter with 2 * PI * radius
//Return statement that is the string with the variables
//Outputs: area and permeterm two numbers, bonus: output will be concantenated string

function circleCalculation(radius) {
	var area = Math.PI * Math.pow(radius, 2);
	var perimeter = 2 * Math.PI * radius;
	return "The area of the circle is " + area + " and the perimeter of the circle is " + perimeter +"."
}
circleCalculation(10);
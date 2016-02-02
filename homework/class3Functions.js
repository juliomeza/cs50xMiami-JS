/*
The Fortune Teller part 2
Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(children, partner, location, job){
	console.log("You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids.");
}

tellFortune("3", "Carolina", "Miami", "Programer");
tellFortune("1", "Jen", "Venus", "Generalist");
tellFortune("25", "Yngrid", "Earth", "Biologist");

/*
The Age Calculator part 2
Forgot how old you are? Calculate it!
Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

function calculateAge(birth, current){
	console.log("You are either " + (current - birth) + " or " + (current - birth - 1));
}
var d = new Date();
var year = d.getFullYear();

calculateAge(1980, year);
calculateAge(1977, year);
calculateAge(1998, year);

/*
The Lifetime Supply Calculator part 2
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for rest of the life (based on a constant max age).
- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/
var maxAge = 150;
function calculateSupply(age, amount){
	console.log("You will need " + Math.round((maxAge - age) * 365 * amount) + " to last you until the ripe old age of " + maxAge);
}
calculateSupply(35, 1.5);
calculateSupply(149, 1.235);
calculateSupply(21, 2.35);

/*
The Geometrizer part 2
Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm
Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

function calcCircumfrence(radius){
	console.log("The circumference is " + (Math.PI * 2 * radius));
}

function calcArea(radius){
	console.log("The area is " + (Math.PI * radius * radius));
}

calcCircumfrence(13);
calcArea(3);

/*
The Temperature Converter part 2
It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html
Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

function celsiusToFahrenheit(celsius){
	var fahrenheit = (celsius * 9 / 5) + 32;
	console.log(celsius + "\u00B0C is " + fahrenheit + "\u00B0F");
}

celsiusToFahrenheit(100);

function fahrenheitToCelsius(fahrenheit){
	var celsius = (fahrenheit - 32) * 5 / 9;
	console.log(fahrenheit + "\u00B0F is " + celsius + "\u00B0C");
}

fahrenheitToCelsius(212);

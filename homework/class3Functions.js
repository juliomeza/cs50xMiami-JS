// The Fortune Teller part 2

function tellFortune(children, partner, location, job){
	console.log("You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids.");
}

tellFortune("3", "Carolina", "Miami", "Programer");
tellFortune("1", "Jen", "Venus", "Generalist");
tellFortune("25", "Yngrid", "Earth", "Biologist");

// The Age Calculator part 2

function calculateAge(birth, current){
	console.log("You are either " + (current - birth) + " or " + (current - birth - 1));
}
var d = new Date();
var year = d.getFullYear();

calculateAge(1980, year);
calculateAge(1977, year);
calculateAge(1998, year);

// The Lifetime Supply Calculator part 2

var maxAge = 150;
function calculateSupply(age, amount){
	console.log("You will need " + Math.round((maxAge - age) * 365 * amount) + " to last you until the ripe old age of " + maxAge);
}
calculateSupply(35, 1.5);
calculateSupply(149, 1.235);
calculateSupply(21, 2.35);

// The Geometrizer part 2

function calcCircumfrence(radius){
	console.log("The circumference is " + (Math.PI * 2 * radius));
}

function calcArea(radius){
	console.log("The area is " + (Math.PI * radius * radius));
}

calcCircumfrence(13);
calcArea(3);

// The Temperature Converter part 2

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

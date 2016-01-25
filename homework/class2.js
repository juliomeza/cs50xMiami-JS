
// 0. The Fortune Teller
var children = 2;
var partner = "Carolina";
var lugar = "Miami";
var job = "System Coordinator";

alert("You will be a " + job + " in " + lugar + ", and married to " + partner + " with " + children + " kids.");


// 1. The Age Calculator
var thisYear = 2016;
var birthYear = 1980;

alert("They are either " + (thisYear-birthYear) + " or " + (thisYear-birthYear-1));

// 2. The Lifetime Supply Calculator
var myAge = 35;
var maxAge = 150;
var stimate = 2;
var total = (maxAge - myAge) * 365 * 2;

alert("You will need " + total + " to last you until the rip old age of " + maxAge);

// 3. The Geometrizer
var radious = 5;
var circumference = 2 * Math.PI * radious;
var area = Math.PI * radious * radious;

alert("The circumference is " + circumference + "\nThe area is " + area);

// 4. The Temperature Converter
var celsius = 35;
var fahrenheit = 55;

alert(celsius + "C is " + ((celsius * 9 / 5) + 32) + "F\n" + fahrenheit + "F is " + ((fahrenheit - 32) * 5 / 9) + "C");

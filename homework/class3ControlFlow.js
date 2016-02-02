/*
What number's bigger?
Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

function greaterNum(number1, number2){
	var greater = 0;
	if (number1 > number2)
		greater = number1;
	else
		greater = number2;
	console.log("The greater number of " + number1 + " and " + number2 + " is " + greater);
}

greaterNum(10, 5);
greaterNum(3, 4);

/*
The World Translator
Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.
Call that function for each of the supported languages
and log the result to make sure it works.
*/

function helloWorld(language){
	var text = "";

	if (language === "es")
		text = "Hola Planeta";
	else if (language === "en")
		text = "Hello, World";
	else if (language === "po")
		text = "Olá Mundo";
	
	console.log(text);
}

helloWorld("es");
helloWorld("en");
helloWorld("es");

/*
The Grade Assigner
Write a function named assignGrade that:
- takes 1 argument, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

function assignGrade(score){
	var grade = ""
	if (score >89)
		grade = "A";
	else if (score > 79)
		grade = "B";
	else if (score > 69)
		grade = "C";
	else if (score > 59)
		grade = "D";
	else
		grade = "E";

	console.log(score + " = "+ grade);
}

assignGrade(90);
assignGrade(55);
assignGrade(70);

/*
The Pluralizer
Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

function pluralize(noun, number){
	if (number > 1)
		console.log(number + " " + noun + "s");
	else
		console.log(number + " " + noun);
}

pluralize("cat", 2);
pluralize("dog", 1);
pluralize("car", 15);

/*
The even/odd reporter
- Write a for loop that will iterate from 0 to 20.
- For each iteration, it will check if the current number is even or odd,
  and report that to the screen (e.g. "2 is even").
*/

for (var num = 0; num <= 20; num++){
	if (num === 0)
		document.write(num + " --> ZERO<br>");
	else if ((num % 2) > 0)
		document.write(num + " --> ODD<br>");
	else
		document.write(num + " --> EVEN<br>");
}

// What number's bigger?

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

// The World Translator

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

// The Grade Assigner

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

// The Pluralizer

function pluralize(noun, number){
	if (number > 1)
		console.log(number + " " + noun + "s");
	else
		console.log(number + " " + noun);
}

pluralize("cat", 2);
pluralize("dog", 1);
pluralize("car", 15);

// The even/odd reporter

for (var num = 0; num <= 20; num++){
	if (num === 0)
		document.write(num + " --> ZERO<br>");
	else if ((num % 2) > 0)
		document.write(num + " --> ODD<br>");
	else
		document.write(num + " --> EVEN<br>");
}

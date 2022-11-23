var marks = prompt("Enter your marks : ");
if (marks > 100 || marks < 0) console.log("Invalid");
else if (marks >= 80 && marks <= 100) console.log("A+");
else if (marks >= 70 && marks <= 79) console.log("A");
else if (marks >= 60 && marks <= 69) console.log("A-");
else if (marks >= 50 && marks <= 59) console.log("B");
else if (marks >= 40 && marks <= 49) console.log("C");
else if (marks >= 33 && marks <= 39) console.log("D");
else console.log("Fail");

/* var num1 = prompt("Enter num1 : ");
var num2 = prompt("Enter num2 : ");
var num3 = prompt("Enter num3 : ");

if (num1 > num2 && num1 > num3)
    console.log("Large Number = " + num1);

else if (num2 > num1 && num2 > num3)
    console.log("Large Number = " + num2);

else
    console.log("Large Number = " + num3);*/

// var letter = prompt("Enter any letter : ");
// letter = letter.toLocaleLowerCase();
// if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
//     console.log("Vowel");
// else
//     console.log("Consonant");

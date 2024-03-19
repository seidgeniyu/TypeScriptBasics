//if statement
let age: number = 25;

if (age >= 18) {
  console.log("You are eligible to vote!");
}

//if-else statement
let grade: string = "B";

if (grade === "A") {
  console.log("Excellent work!");
} else {
  console.log("Keep practicing, you can do better!");
}


// if-else-if
let score: number = 85;

if (score >= 90) {
  console.log("You got an A!");
} else if (score >= 80) {
  console.log("You got a B!");
} else {
  console.log("Keep studying!");
}


//switch statement
let day: number = 3;

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  default:
    console.log("It's another day of the week!");
}

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

//loops
//for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  //while loop
  let userInput: string;

  function countdown(start: number): void {
    let timeLeft = start;
  
    // Loop while timeLeft is greater than 0
    while (timeLeft > 0) {
      console.log(timeLeft + " seconds remaining...");
      timeLeft--; // Decrement time by 1
    }
  
    console.log("Blast off!");
  }
  
  countdown(5); // Example usage with starting time of 5 seconds
  

//do-while
let coinTossResult: string;

do {
  coinTossResult = Math.random() > 0.5 ? "Heads" : "Tails";
  console.log("Coin toss:", coinTossResult);
} while (coinTossResult !== "Heads");

console.log("Landed on Heads!");



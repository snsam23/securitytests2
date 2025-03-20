// randomScript.js

// Random variables and constants
const greeting = "Hello, world!";
let counter = 0;
let randomNumber = Math.floor(Math.random() * 100);
const isEven = randomNumber % 2 === 0;

console.log(greeting);
console.log(`Random number: ${randomNumber}`);
console.log(`Is the number even? ${isEven ? "Yes" : "No"}`);

// Random function to increment a counter
function incrementCounter() {
  counter++;
  console.log(`Counter value: ${counter}`);
}

// Random array and loop example
let randomArray = [5, 10, 15, 20, 25];

randomArray.forEach((num, index) => {
  console.log(`Element at index ${index}: ${num}`);
  incrementCounter();
});

// Random conditional check
if (randomNumber > 50) {
  console.log("The random number is greater than 50!");
} else {
  console.log("The random number is 50 or less.");
}

// A simple promise example
const promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds!");
  }, 2000);
});

promiseExample.then((message) => {
  console.log(message);
}).catch((error) => {
  console.error("Error:", error);
});

// Random object example
const person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.greet();

// A random event listener (can be tested on a browser)
document.addEventListener('click', () => {
  console.log("You clicked on the document!");
});

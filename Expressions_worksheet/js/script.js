/**
 * Created by CatalinaTitcomb on 12/4/13.
 */
//Catalina Titcomb
//December 4, 2013
//Expressions Worksheet

//Dog years

alert("Exercise # 1: Dog Years");

var sparkysAge; //How old is Sparky the Pit Bull
var dogYears; //How old is Sparky in human years
var human = 7; //One year old in human years is seven years old in dog years

sparkysAge = prompt("Enter Sparky's age: "); //Prompt user to enter Sparky's actual age
dogYears = Number(sparkysAge) * human; //One year old in human years is seven years old in dog years
sparkysAge = dogYears / human; //Seven years old in human is one year old in dog years


alert("Sparky is " + dogYears + " in human years, which is " + sparkysAge + " in dog years.");

console.log("Sparky is " + sparkysAge + " in human years, which is " + sparkysAge + " in dog years.");


//Slice of Pie I

alert("Exercise # 2: Slice of Pie I");

var pizzaSlices = 6; //How many slices are in a pizza
var people; //How many people went to the party
var pizzas; //How many pizzas were ordered
var slicesPerPerson; //How many slices of pizza per person

pizzas = prompt("How many pizzas did you order for the party?"); //Prompt user to enter how many pizzas were ordered
pizzas = pizzaSlices * pizzas; //How many slices total per total amount of pizzas
people = prompt("How many friends did you invite to the party"); //Prompt user to enter how many people he invited
slicesPerPerson = pizzas / people; //How many slices per person;


alert("Each person ate " + slicesPerPerson + " slices of pizza at the party");

console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party");


alert("Exercise # 3: Slice of Pie II");

var pizzaSlices = 6; //How many slices are in a pizza
var people; //How many people went to the party
var pizzas; //How many pizzas were ordered
var slicesPerPerson; //How many slices of pizza per person
var totalSlicesEaten; //Total slices eaten
var sparky; //How many slices for Sparky

pizzas = prompt("How many pizzas did you order for the party?"); //Prompt user to enter how many pizzas were ordered
pizzas = pizzaSlices * pizzas; //How many slices total per total amount of pizzas
people = prompt("How many friends did you invite to the party"); //Prompt user to enter how many people he invited
slicesPerPerson = pizzas / people; //How many slices per person
totalSlicesEaten = (pizzas - slicesPerPerson); //Slices for Sparky

alert("How many slices eaten: " + totalSlicesEaten);

sparky = pizzas - totalSlicesEaten; //How many slices Sparky ate

alert("Sparky got " + sparky + " slices of pizza");

console.log("How many slices eaten: " + totalSlicesEaten);

console.log("Sparky got " + sparky + " slices of pizza");










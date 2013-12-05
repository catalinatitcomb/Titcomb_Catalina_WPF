/**
 * Created by CatalinaTitcomb on 12/4/13.
 */
//Catalina Titcomb
//December 4, 2013
//Expressions Worksheet

//Dog years

alert("Dog Years");

var sparkysAge; //How old is Sparky the Pit Bull
var dogYears; //How old is Sparky in human years
var human = 7; //One year old in human years is seven years old in dog years

sparkysAge = prompt("Enter Sparky's age: "); //Prompt user to enter Sparky's actual age
dogYears = Number(sparkysAge) * human; //One year old in human years is seven years old in dog years
sparkysAge = dogYears / human; //Seven years old in human is one year old in dog years


alert("Sparky is " + dogYears + " in human years, which is " + sparkysAge + " in dog years.");

console.log("Sparky is " + sparkysAge + " in human years, which is " + sparkysAge + " in dog years.");


//Slice of Pie I

alert("New Exercise: Slice of Pizza I");

var pizzaSlices = 6;
var people;
var pizzas;
var slicesPerPerson;

pizzas = prompt("How many pizzas did you order for the party?");
pizzas = pizzaSlices * pizzas;
people = prompt("How many friends did you invite to the party");
slicesPerPerson = pizzas / people;


alert("Each person ate " + slicesPerPerson + " slices of pizza at the party");

console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party");





//Catalina Titcomb
//December 4, 2013
//Expression Industry

//Divine Proportion
//it is not only to have beautiful colors in a design, one of the most important facts in a design is that it is well balanced.
//The Divine Proportion helps us to create a well balanced design, and this makes that design look wonderful.

var width;
var proportion = 1.62;
var sideBar;
var divineProportion;

width = prompt("Please Enter Width of Your Layout:");
divineProportion = width / proportion;
sideBar = Number(width) - Number(divineProportion);

alert("Divine Proportion for Your Layout is:" + " " + divineProportion + " pixels.");
alert("Side Bar of Your Layout is: " + sideBar + " pixels.");

console.log("Divine Proportion for Your Layout is:" + " " + divineProportion + " pixels.");
console.log("Side Bar of Your Layout is: " + sideBar + " pixels.");
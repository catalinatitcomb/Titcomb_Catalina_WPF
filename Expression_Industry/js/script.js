//Catalina Titcomb
//December 4, 2013
//Expression Industry

//Divine Proportion
//It is not only to have beautiful colors in a design, one of the most important facts in a design is that it is well balanced.
//The Divine Proportion helps us to create a well balanced design, and this makes that design look wonderful.

var layOutWidth;
var divineProportion = 1.62;
var sideBar;
var content;

layOutWidth = prompt("Please Enter Width of Your Layout:");
content = layOutWidth / divineProportion;
sideBar = Number(layOutWidth) - Number(content);

alert("The Content of Your Layout is:" + " " + content + " pixels.");
alert("Side Bar of Your Layout is: " + sideBar + " pixels.");

console.log("The content of Your Layout is:" + " " + content + " pixels.");
console.log("Side Bar of Your Layout is: " + sideBar + " pixels.");
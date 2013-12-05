//Catalina Titcomb
//December 4, 2013
//Expression Industry

//Divine Proportion
//It is not only to have beautiful colors in a design, one of the most important facts in a design is that it is well balanced.
//The Divine Proportion helps us to create a well balanced design, and this makes that design look wonderful.

var layOutWidth; //Total width of the block
var divineProportion = 1.62; //Divine Proportion
var sideBar; //Small area to the right of content
var content;//Area of the block that we are going to work to create a balance design

layOutWidth = prompt("Please Enter Width of Your Layout:"); 
content = layOutWidth / divineProportion;
sideBar = Number(layOutWidth) - Number(content);

alert("The Content of Your Layout is:" + " " + content + " pixels.");
alert("Side Bar of Your Layout is: " + sideBar + " pixels.");

console.log("The content of Your Layout is:" + " " + content + " pixels.");
console.log("Side Bar of Your Layout is: " + sideBar + " pixels.");
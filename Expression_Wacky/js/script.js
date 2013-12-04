// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Catalina Titcomb
//December 3, 2013
//Expressions Wacky

var check;
var tax;
var tip;
var totalCheck;
var totalTip;

check = prompt("How much do the bill add?");
tax = prompt("Enter tax percentage in your state (in decimal form)");
tip = prompt("What percentage do you want to tip the waiter? (in decimal form)?")

totalCheck = (Number(check) * Number(tax)) + Number(check);

totalTip = Number(totalCheck) * Number(tip);

alert("You need to pay $" + totalCheck + " and the tip for the waiter is $ " + totalTip);

console.log("You need to pay $" + totalCheck + " and the tip for the waiter is $ " + totalTip);


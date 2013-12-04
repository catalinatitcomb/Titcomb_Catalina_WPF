// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Catalina Titcomb
//December 3, 2013
//Expressions Wacky

var check; //How much you need to pay for what you ate
var tax; //How much you have to pay in taxes in your state
var tip; //What percentage of the check you want to pay the waiter
var totalCheck; //Total amount you have to pay, adding the check amount and the tax amount
var totalTip; //How much you want to tip the waiter

check = prompt("How much do the bill add?");
tax = prompt("Enter tax percentage in your state (in decimal form)");
tip = prompt("What percentage do you want to tip the waiter? (in decimal form)?")

totalCheck = (Number(check) * Number(tax)) + Number(check);

totalTip = Number(totalCheck) * Number(tip);

alert("You need to pay $" + totalCheck + " and the tip for the waiter is $ " + totalTip);

console.log("You need to pay $" + totalCheck + " and the tip for the waiter is $ " + totalTip);


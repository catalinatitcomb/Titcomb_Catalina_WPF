// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Catalina Titcomb
//December 4, 2013
//Expressions Wacky

var check; //How much you need to pay for what you ate
var tax; //How much you have to pay in taxes in your state
var tip; //What percentage of the check you want to pay the waiter
var totalCheck; //Total amount you have to pay, adding the check amount and the tax amount
var totalTip; //How much you want to tip the waiter
var amountToPay;

check = prompt("How much do the bill add?"); //Prompt user to enter check amount before taxes
tax = prompt("Enter tax percentage in your state (in decimal form)"); //Prompt user to enter tax amount charge in the state where user lives
tip = prompt("What percentage do you want to tip the waiter? (in decimal form)?") //Prompt user to enter what percentage of the check user wants to pay to waiter

totalCheck = (Number(check) * Number(tax)) + Number(check); //Total amount user has to pay

totalTip = Number(check) * Number(tip); //Total amount of tip user wants to pay to waiter

amountToPay = Number(totalCheck) + Number(totalTip);

alert("The total of your check is $" + totalCheck + " and the tip for the waiter is $ " + totalTip); //Window telling user how much user needs to pay total, adding total check and total tip

console.log("You need to pay $" + totalCheck + " and the tip for the waiter is $ " + totalTip);


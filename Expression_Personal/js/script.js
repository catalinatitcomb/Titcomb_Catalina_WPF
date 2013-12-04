// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var credit = 1000;
var debit = 345;
var balance;
balance = credit - debit;

var percentage;
percentage = balance * 0.3;

var totalBalance;
totalBalance = balance + percentage;

console.log("Your balance is $" + " " + totalBalance);
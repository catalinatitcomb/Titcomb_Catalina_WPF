// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var credit = 1000; //Amount of deposits
var debit = 345; //Amount of withdrawals
var balance;
balance = credit - debit; //Difference of credits and debits

var percentage;
percentage = balance * 0.3; //Multiplying balance by 3% percentage

var totalBalance;
totalBalance = balance + percentage; //Total balance adding balance plus percentage

console.log("Your balance is $" + " " + totalBalance);
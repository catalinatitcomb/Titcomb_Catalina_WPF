// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var credit; //Amount of deposits
var debit; //Amount of withdrawals
var interestRate;
var totalInterest;
var balance;


credit = prompt("How much money do you have at the beginning of the month in your account?");
debit = prompt("How much did you spend in the month?");
interestRate = prompt("how much interest does the bank charge (in decimal form)?");

totalInterest = (Number(credit) - Number(debit)) * Number(interestRate);

balance = Number(credit) - Number(debit) - Number(totalInterest);

alert("Your balance at the end of the month is $" + balance + " and you paid $" + totalInterest + " in interest.");

console.log(balance);




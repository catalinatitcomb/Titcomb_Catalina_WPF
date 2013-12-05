// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//Catalina Titcomb
//December 3, 2013
//Expressions Personal

//How to balance your checking account, knowing your beginning balance, your debits, the interest rate.


var credit; //Amount of deposits
var debit; //Amount of withdrawals
var interestRate; //Amount of Interest Rate charge by the bank
var totalInterest; //Amount of Interest Rate paid to the bank
var balance; // Total Balance in Account


credit = prompt("How much money do you have at the beginning of the month in your account?"); //Prompt user to enter the beginning balance
debit = prompt("How much did you spend in the month?"); //Prompt user to enter amount spent during the month
interestRate = prompt("How much interest does the bank charge (in decimal form)?"); //Prompt user for Bank interest rate

totalInterest = (Number(credit) - Number(debit)) * Number(interestRate); //Total interest paid to the bank

balance = Number(credit) - Number(debit) - Number(totalInterest); //Final amount of money in your account

alert("Your balance at the end of the month is $" + balance + " and you paid $" + totalInterest + " in interest.");

console.log("Your balance at the end of the month is $" + balance + " and you paid $" + totalInterest + " in interest.");




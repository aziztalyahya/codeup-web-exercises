
"use strict";
alert("Welcome to my Website");
console.log("Hello from external Javascript");
var favColor= prompt("what is your favorite color?")
alert("Great, "+ favColor + " is my favorite color too");



var daysRentedLittleMermaid=prompt("how many days would you like to rent little mermaid?");
var daysRentedHercules=prompt("how many days would you like to rent Hercules?");
var daysRentedBigBrother=prompt("how many days would you like to rent Big Brother?");
const pricePerDay= 3;
var totalPrice = (daysRentedBigBrother * pricePerDay + daysRentedHercules * pricePerDay + daysRentedLittleMermaid * pricePerDay);
alert("You're total cost is $"+ totalPrice.toFixed(2));


var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

var hoursWorkedAtGoogle= prompt("How many hours did you work at google this week?");
var hoursWorkedAtAmazon= prompt("How many hours did you work at amazon this week?");
var hourWorkedAtFacebook= prompt("How many hours did you work at Facebook this week?");

var totalHours= Number(hourWorkedAtFacebook) + Number(hoursWorkedAtAmazon) + Number(hoursWorkedAtGoogle);
var weekPay = googleRate * hoursWorkedAtGoogle + amazonRate * hoursWorkedAtAmazon + facebookRate * hourWorkedAtFacebook;
alert("You worked " + totalHours + " hours, and your paycheck for the week before taxes will be $" + weekPay.toFixed(2));





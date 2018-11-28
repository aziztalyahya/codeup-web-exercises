"use strict";

var numberToStopAt = prompt("What Number would you like to use?");
numberToStopAt = parseFloat(numberToStopAt);


console.log("Number to skip is:  " + numberToStopAt);
for (var i = 1; i < 100; i++) {

    if (i % 2 == 0) {
        continue;
    }
    if (i === numberToStopAt){
        console.log("Yikes! Skipping number " + numberToStopAt)
        continue;
    }
    console.log("Here is an odd number " + i);
}
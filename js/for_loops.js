"use strict";
function showMultiplicationTable(input){
    for (var x=1; x<=10; x++) {
        console.log(input + " x "+ x +" = " + (input*x));
    }
}



for (var x=0; x <10; x++){
    var randomNumber= Math.floor(Math.random() * 180) + 20;
    if (randomNumber%2 === 0) {
        console.log(randomNumber + " is even.")
    } else {
        console.log(randomNumber + " is odd.")
    }
}


for(var i = 1; i < 10; i++) {
    console.log(String(i).repeat(i))
}




var startingNumber = 100;

for(var x=20; x > 0; x--){
    console.log(startingNumber);
    startingNumber = startingNumber -5;
}



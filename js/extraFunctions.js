"use strict";

function isOdd(number) {
    if(number % 2 === 0){
        return false;
    } else {
        return true;
    }
}

function isEven(number){
    if(number %2 === 0){
        return true;
    } else {
        return false;
    }
}

function identity(input) {
    return typeof input;
}

function isFive(input){
    if (input == 5){
        return "This is 5";
    } else {
        return "This is not 5";
    }
}

function addFive(input){
    input +=5;
    return input;
}
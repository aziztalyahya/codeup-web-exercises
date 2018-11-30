 "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
        var names = ["Justin", "Aziz", "Shawn", "Bryan"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */ console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */ console.log(names[0]);
        console.log(names[1]);
        console.log(names[2]);
        console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */for (var i=0; i<names.length; i++){
        console.log("Name is:" + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */ names.forEach(function (name, index) {
        console.log("Name is " + name + " and is at position " + index)
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */



    function first(mainArray){
        var firstElement = mainArray[0];
        console.log(firstElement);
    }
    function second(mainArray) {
        var secondElement = mainArray[1];
        console.log(secondElement);
    }
    function last(mainArray) {
        var lastIndex = mainArray.length -1;
        console.log(mainArray[lastIndex]);
    }

    first([8, 16, 32, 64, 128]);
    console.log("-------")
    second([5,10,15,20,25,30,35,40,45,50]);
    console.log("-------")
    last([10,20,30,40,50,60,70,80,90,100]);



    function oneHundred() {
        var myArray = [];
        for (var i=0; i <= 99; i++){
            myArray[i] = i+1;
        }
        return myArray;

    }

    oneHundred();


    function reverse(myArray) {
        var reverseArray= [];
        for(var i= myArray.length-1; i >=0; i--){
            reverseArray.push(myArray[i])
        }
        return reverseArray;
    }

    reverse([1,2,3,4,5]);


    function sumAll(array) {
        var result = 0;
    numbers.forEach(function (number) {
        result = result + number;
    });
     return result;
    };


    function multiplyAll(numbers) {
        var product = 1;
        numbers.forEach(function (number) {
            product *= number;
        });
        return product;
    }

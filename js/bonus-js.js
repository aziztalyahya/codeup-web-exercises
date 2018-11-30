"use strict";
var reportContents = "Monthly Sales Report\nDate: 03-17-2015" +
                    "\nOffice: Codeup\n ===================================================" +
                    "\nEmployee Number, First Name, Last Name, Sales Units" +
                    "\n***************************************************" +
                    "\n\n1, Jane, Janeway, 3\n3, Tricia, Triciason, 5\n4, Jeannette, Jeanson, 4" +
                    "\n5, Charles Emmerson III, Winchester, 2" +
                    "\n6, Chet, Chedderson, 8\n7, Chaiam, Chaiamson, 12\n8, Dale, Dalesinger, 1" +
                    "\n9, Zig, Ziglar, 50\n10, Henry, Kissinger, 1\n11, Arthur Herbert, Fonzarelli, 23\n12, Betty, Boop, 67";



    var reportContentsArray = reportContents.split("\n");
    console.log(reportContentsArray);

    reportContentsArray.shift();
    reportContentsArray.shift();
    reportContentsArray.shift();
    reportContentsArray.shift();
    reportContentsArray.splice(1, 2);
    console.log(reportContentsArray);

var secondArray = [];
for (var i =1; i <reportContentsArray.length; i++){
        secondArray[i-1] = reportContentsArray[i].split(",");
}

console.log(secondArray);

var salesUnits = 0;
for (var j=0; j <secondArray.length; j++){
    secondArray[j][3] = Number(secondArray[j][3])
    secondArray[j][0] = Number(secondArray[j][0])
    salesUnits = salesUnits + secondArray[j][3];
}
console.log(secondArray);

function totalEmpoyees() {
    return console.log("There are " + reportContentsArray.length + " employees");
}
function totalSold() {
    return console.log("In total, All employees have sold " + salesUnits + " units.");
}

function averageSold() {
return console.log("The average sold was " + salesUnits / secondArray.length);
}

totalEmpoyees();
totalSold();
averageSold();


function sortNumber(a,b) {
    return a[3] - b[3];
}

console.log(secondArray.sort(sortNumber));









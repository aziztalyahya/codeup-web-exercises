
function getHighest(numbers){

    return Math.max(...numbers);
}


function getLowest(numbers){
    return Math.min(...numbers);
}

function sumAllNumbers(numbers){
   var counter = 0;
    for (var i=0; i<numbers.length; i++){
        counter = counter + numbers[i][0] +numbers[i][1] + numbers[i][2];
    }
    return counter;
}
let x = 2;

while (x < 65537) {
        console.log(x);
        x= x * 2;
    }

    // do while loops

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    console.log("We have " + allCones +" cones.");
    console.log("We are going to sell " + conesSold + " cones.")
    allCones = allCones - conesSold;
    if (allCones < 0){
        console.log("We can't sell " + conesSold + " cones cause there is only " + (allCones +conesSold) + " left.");
    }
    if (allCones === 0){
        console.log("You have sold all your cones!");
    }


} while(allCones > 0);

"use strict";
$(document).ready(function () {


    var audio = new Audio("./sounds/gta3.mp3");
    var neededkeys = [38,38,40,40,37,39,37,39,66,65], started = false, count = 0;

    $(document).keydown(function(input) {
        var key = input.keyCode;
        if (!started) {
            if (key == 38) {
                started = true;
            }
        }
        if (started) {
            if (neededkeys[count] == key) {
                count++;
            } else {
                reset();
            }
            if (count == 10) {
                reset();
                alert('Cheat Codes Activated');
                audio.play();
                $('body').css('background-color', 'black');
                $("#konamiHeader").css("color", "white");

            }
        } else {
            reset();
        }
    });

    function reset() {
        started = false;
        count = 0;
    }

});

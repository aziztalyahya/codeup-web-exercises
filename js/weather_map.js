"use strict";
function initMap() {
    // The location of Denver, CO
    var denver = {lat: 39.74389, lng: -105.0203};
    // The map, centered at Denver
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 8, center: denver});
    // The marker, positioned at Denver,CO
    var marker = new google.maps.Marker({position: denver, map: map});


    map.addListener("click", function (map) {
        //lat and lng is available in e object
        $("#latitude").val(map.latLng.lat());
        $("#longitude").val(map.latLng.lng());

    });
};

$(document).ready(function () {

    //functions for local
    function local_dayOneWeather(weatherInfo) {
        var local_iconURL1 = "http://openweathermap.org/img/w/" + weatherInfo.list[0].weather[0].icon + ".png";
        $("#local_city").text("City: " + weatherInfo.city.name);
        $("#local_time").text(weatherInfo.list[0].dt_txt);
        $("#local_day1Day").text("Today");
        $("#local_day1Conditions").text(weatherInfo.list[0].weather[0].main + ": " + weatherInfo.list[0].weather[0].description);
        $("#local_imageSource1").attr("src", local_iconURL1);
        $("#local_day1HighLow").text(+weatherInfo.list[0].main.temp_max + " /" + weatherInfo.list[0].main.temp_min);
        $("#local_day1Humidity").text(weatherInfo.list[0].main.humidity + "%");
    };

    function local_removeDayTwoAndThree() {
        $("#local_day2Day").empty();
        $("#local_day2Conditions").empty();
        $("#local_imageSource2").hide();
        $("#local_day2HighLow").empty();
        $("#local_day2Humidity").empty();
        $("#local_day3Day").empty();
        $("#local_day3Conditions").empty();
        $("#local_imageSource3").hide();
        $("#local_day3HighLow").empty();
        $("#local_day3Humidity").empty();
    };

    function local_dayTwoWeather(weatherInfo) {
        var local_iconURL2 = "http://openweathermap.org/img/w/" + weatherInfo.list[8].weather[0].icon + ".png";
        $("#local_day2Day").text(weatherInfo.list[8].dt_txt);
        $("#local_day2Conditions").text(weatherInfo.list[8].weather[0].main + ": " + weatherInfo.list[8].weather[0].description);
        $("#local_imageSource2").attr("src", local_iconURL2);
        $("#local_day2HighLow").text(weatherInfo.list[8].main.temp_max + " /" + weatherInfo.list[8].main.temp_min);
        $("#local_day2Humidity").text(weatherInfo.list[8].main.humidity + "%");
    };

    function local_dayThreeWeather(weatherInfo) {
        var local_iconURL3 = "http://openweathermap.org/img/w/" + weatherInfo.list[16].weather[0].icon + ".png";
        $("#local_day3Day").text(weatherInfo.list[16].dt_txt);
        $("#local_day3Conditions").text(weatherInfo.list[16].weather[0].main + ": " + weatherInfo.list[16].weather[0].description);
        $("#local_imageSource3").attr("src", local_iconURL3);
        $("#local_day3HighLow").text(weatherInfo.list[16].main.temp_max + " /" + weatherInfo.list[16].main.temp_min);
        $("#local_day3Humidity").text(weatherInfo.list[16].main.humidity + "%");
    };

    function local_dayFourWeather(weatherInfo) {
        var local_iconURL4 = "http://openweathermap.org/img/w/" + weatherInfo.list[24].weather[0].icon + ".png";
        $("#local_day4Day").text(weatherInfo.list[24].dt_txt);
        $("#local_day4Conditions").text(weatherInfo.list[24].weather[0].main + ": " + weatherInfo.list[24].weather[0].description);
        $("#local_imageSource4").attr("src", local_iconURL4);
        $("#local_day4HighLow").text(weatherInfo.list[24].main.temp_max + " /" + weatherInfo.list[24].main.temp_min);
        $("#local_day4Humidity").text(weatherInfo.list[24].main.humidity + "%");
    };

    function local_dayFiveWeather(weatherInfo) {
        var local_iconURL5 = "http://openweathermap.org/img/w/" + weatherInfo.list[32].weather[0].icon + ".png";
        $("#local_day5Day").text(weatherInfo.list[32].dt_txt);
        $("#local_day5Conditions").text(weatherInfo.list[32].weather[0].main + ": " + weatherInfo.list[32].weather[0].description);
        $("#local_imageSource5").attr("src", local_iconURL5);
        $("#local_day5HighLow").text(weatherInfo.list[32].main.temp_max + " /" + weatherInfo.list[32].main.temp_min);
        $("#local_day5Humidity").text(weatherInfo.list[32].main.humidity + "%");
    };

    function local_removeDayFourAndFive() {
        $("#local_day4Day").empty();
        $("#local_day4Conditions").empty();
        $("#local_imageSource4").hide();
        $("#local_day4HighLow").empty();
        $("#local_day4Humidity").empty();
        $("#local_day5Day").empty();
        $("#local_day5Conditions").empty();
        $("#local_imageSource5").hide();
        $("#local_day5HighLow").empty();
        $("#local_day5Humidity").empty();

    };

    // functions for map clicks
    function dayOneWeather(weatherInfo) {
        var iconURL1 = "http://openweathermap.org/img/w/" + weatherInfo.list[0].weather[0].icon + ".png";
        $("#city").text("City: " + weatherInfo.city.name);
        $("#day1Day").text(weatherInfo.list[0].dt_txt);
        $("#day1Conditions").text(weatherInfo.list[0].weather[0].main + ": " + weatherInfo.list[0].weather[0].description);
        $("#imageSource1").attr("src", iconURL1);
        $("#day1HighLow").text(weatherInfo.list[0].main.temp_max + " /" + weatherInfo.list[0].main.temp_min);
        $("#day1Humidity").text(weatherInfo.list[0].main.humidity + "%");
    };

    function removeDayTwoAndThree() {
        $("#day2Day").empty();
        $("#day2Conditions").empty();
        $("#imageSource2").hide();
        $("#day2HighLow").empty();
        $("#day2Humidity").empty();
        $("#day3Day").empty();
        $("#day3Conditions").empty();
        $("#imageSource3").hide();
        $("#day3HighLow").empty();
        $("#day3Humidity").empty();
    };

    function dayTwoWeather(weatherInfo) {
        var iconURL2 = "http://openweathermap.org/img/w/" + weatherInfo.list[8].weather[0].icon + ".png";
        $(".day2Day").text(weatherInfo.list[8].dt_txt);
        $("#day2Conditions").text(weatherInfo.list[8].weather[0].main + ": " + weatherInfo.list[8].weather[0].description);
        $("#imageSource2").attr("src", iconURL2);
        $("#day2HighLow").text(weatherInfo.list[8].main.temp_max + " /" + weatherInfo.list[8].main.temp_min);
        $("#day2Humidity").text(weatherInfo.list[8].main.humidity + "%");
    };

    function dayThreeWeather(weatherInfo) {
        var iconURL3 = "http://openweathermap.org/img/w/" + weatherInfo.list[16].weather[0].icon + ".png";
        $("#day3Day").text(weatherInfo.list[16].dt_txt);
        $("#day3Conditions").text(weatherInfo.list[16].weather[0].main + ": " + weatherInfo.list[16].weather[0].description);
        $("#imageSource3").attr("src", iconURL3);
        $("#day3HighLow").text(weatherInfo.list[16].main.temp_max + " /" + weatherInfo.list[16].main.temp_min);
        $("#day3Humidity").text(weatherInfo.list[16].main.humidity + "%");
    };

    function dayFourWeather(weatherInfo) {
        var iconURL4 = "http://openweathermap.org/img/w/" + weatherInfo.list[24].weather[0].icon + ".png";
        $("#day4Day").text(weatherInfo.list[24].dt_txt);
        $("#day4Conditions").text(weatherInfo.list[24].weather[0].main + ": " + weatherInfo.list[24].weather[0].description);
        $("#imageSource4").attr("src", iconURL4);
        $("#day4HighLow").text(weatherInfo.list[24].main.temp_max + " /" + weatherInfo.list[24].main.temp_min);
        $("#day4Humidity").text(weatherInfo.list[24].main.humidity + "%");
    };

    function dayFiveWeather(weatherInfo) {
        var iconURL5 = "http://openweathermap.org/img/w/" + weatherInfo.list[32].weather[0].icon + ".png";
        $("#day5Day").text(weatherInfo.list[32].dt_txt);
        $("#day5Conditions").text(weatherInfo.list[32].weather[0].main + ": " + weatherInfo.list[32].weather[0].description);
        $("#imageSource5").attr("src", iconURL5);
        $("#day5HighLow").text(weatherInfo.list[32].main.temp_max + " /" + weatherInfo.list[32].main.temp_min);
        $("#day5Humidity").text(weatherInfo.list[32].main.humidity + "%");
    };

    function removeDayFourAndFive() {
        $("#day4Day").empty();
        $("#day4Conditions").empty();
        $("#imageSource4").hide();
        $("#day4HighLow").empty();
        $("#day4Humidity").empty();
        $("#day5Day").empty();
        $("#day5Conditions").empty();
        $("#imageSource5").hide();
        $("#day5HighLow").empty();
        $("#day5Humidity").empty();

    };
    //initial ajax request getting just the information a specified latitude and longitude
    // once the request from that server was accepted it will display current weather in SA
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "26af6b0a60a8c3a60f802098b1484f4f",
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (weatherInfo) {
        local_dayOneWeather(weatherInfo);
    }).fail(function (jqXhr, status, error) {
        alert("There was an error! Check the console for details");
        console.log("Response status: " + status);
        console.log("Error object: " + error);
    });
// on click of show 1 day local weather
    $("#local_showOneDay").click(function () {
        var latitude = 29.423017;
        var longitude = -98.48527;
        console.log(latitude + ", " + longitude);

        $.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude, {
            APPID: "26af6b0a60a8c3a60f802098b1484f4f",
            units: "imperial"
        }).done(function (weatherInfo) {
            local_dayOneWeather(weatherInfo);
            local_removeDayTwoAndThree();
            local_removeDayFourAndFive();
        });
    });
// on click of show 3 day local weather
    $("#local_showThreeDay").click(function () {
        var latitude = 29.423017;
        var longitude = -98.48527;
        console.log(latitude + ", " + longitude);

        $.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude, {
            APPID: "26af6b0a60a8c3a60f802098b1484f4f",
            units: "imperial"
        }).done(function (weatherInfo) {
            $("#local_imageSource2").show();
            $("#local_imageSource3").show();
            local_removeDayFourAndFive();
            local_dayOneWeather(weatherInfo);
            local_dayTwoWeather(weatherInfo);
            local_dayThreeWeather(weatherInfo);
        });
    });
// on click of show 5 day local weather
    $("#local_showFiveDay").click(function () {
        var latitude = 29.423017;
        var longitude = -98.48527;
        console.log(latitude + ", " + longitude);

        $.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude, {
            APPID: "26af6b0a60a8c3a60f802098b1484f4f",
            // lat:    latitude,
            // lon:   longitude,
            units: "imperial"
        }).done(function (weatherInfo) {
            $("#local_imageSource2").show();
            $("#local_imageSource3").show();
            $("#local_imageSource4").show();
            $("#local_imageSource5").show();
            local_dayOneWeather(weatherInfo);
            local_dayTwoWeather(weatherInfo);
            local_dayThreeWeather(weatherInfo);
            local_dayFourWeather(weatherInfo);
            local_dayFiveWeather(weatherInfo);
        });
    });
        // When you click submit, it will grab your lat and long and deliver
        // the values to the input fields
        $("#submit").click(function () {
            var latitude = $("#latitude").val();
            var longitude = $("#longitude").val();
            console.log(latitude + ", " + longitude);

            $.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude, {
                APPID: "26af6b0a60a8c3a60f802098b1484f4f",
                // lat:    latitude,
                // lon:   longitude,
                units: "imperial"
            }).done(function (weatherInfo) {
                dayOneWeather(weatherInfo);
            }).fail(function (jqXhr, status, error) {
                alert("There was an error! Check the console for details");
                console.log("Response status: " + status);
                console.log("Error object: " + error);
            });
        });
// show days click responses for the lat and long
        $("#showOneDay").click(function () {
            var latitude = $("#latitude").val();
            var longitude = $("#longitude").val();
            console.log(latitude + ", " + longitude);

            $.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude, {
                APPID: "26af6b0a60a8c3a60f802098b1484f4f",
                // lat:    latitude,
                // lon:   longitude,
                units: "imperial"
            }).done(function (weatherInfo) {
                dayOneWeather(weatherInfo);
                removeDayTwoAndThree();
                removeDayFourAndFive();
            });
        });

        $("#showThreeDay").click(function () {
            var latitude = $("#latitude").val();
            var longitude = $("#longitude").val();
            console.log(latitude + ", " + longitude);

            $.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude, {
                APPID: "26af6b0a60a8c3a60f802098b1484f4f",
                // lat:    latitude,
                // lon:   longitude,
                units: "imperial"
            }).done(function (weatherInfo) {
                $("#imageSource2").show();
                $("#imageSource3").show();
                removeDayFourAndFive();
                dayOneWeather(weatherInfo);
                dayTwoWeather(weatherInfo);
                dayThreeWeather(weatherInfo);
            });
        });

        $("#showFiveDay").click(function () {
            var latitude = $("#latitude").val();
            var longitude = $("#longitude").val();
            console.log(latitude + ", " + longitude);

            $.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude, {
                APPID: "26af6b0a60a8c3a60f802098b1484f4f",
                // lat:    latitude,
                // lon:   longitude,
                units: "imperial"
            }).done(function (weatherInfo) {
                $("#imageSource2").show();
                $("#imageSource3").show();
                $("#imageSource4").show();
                $("#imageSource5").show();
                dayOneWeather(weatherInfo);
                dayTwoWeather(weatherInfo);
                dayThreeWeather(weatherInfo);
                dayFourWeather(weatherInfo);
                dayFiveWeather(weatherInfo);
            });
        });
});

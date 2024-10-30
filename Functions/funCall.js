// function calling another function

function countryName() {
    console.log("Welcome to USA");
    cityName();
}

function cityName() {
    console.log("You are San Jose");
}

countryName();

//Welcome to USA
You are San Jose

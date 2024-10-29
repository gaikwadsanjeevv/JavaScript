var age = 20;
var country = "USA";

if (country === "USA") {
    if (age >= 16) {
        console.log("You are allowed to drive in the USA.");
    } else {
        console.log("You are not allowed to drive in the USA.");
    }
} else if (country === "India") {
    if (age >= 18) {
        console.log("You are allowed to drive in India.");
    } else {
        console.log("You are not allowed to drive in India.");
    }
} else {
    console.log("Driving age rules are not defined for your country.");
}

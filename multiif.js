var score = 85;
var attendance = 90; // percentage
var extraCurricular = true; // true if participated

if (score >= 75) {
    console.log("Congratulations! You have passed with distinction.");
}

if (attendance >= 80) {
    console.log("You have excellent attendance.");
}

if (extraCurricular) {
    console.log("Thank you for participating in extra-curricular activities!");
}

if (score >= 60 && attendance >= 80 && extraCurricular) {
    console.log("You are eligible for a special award!");
}

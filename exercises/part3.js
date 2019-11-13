// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / speedMph;
    return hours / 24;
}
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log("It takes " + spacecraftName + " " + getDaysToLocation(kilometersToMars) + " days to reach Mars.");
console.log("It takes " + spacecraftName + " " + getDaysToLocation(kilometersToTheMoon) + " days to reach the Moon.");
function newFunction() {
    console.log("It takes " + spacecraftName + " " + getDaysToLocation(kilometersToTheMoon) + " days to reach the Moon.");
}

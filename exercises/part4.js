var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// The variables that are commented out will be moved into the Spacecraft class
// let spaceCraft: string = "Space Shuttle";
// let speedMph: number = 17500;
// let milesPerKilometer: number = 0.621;
// This function will also be moved into the Spacecraft class
// function getDaysToLocation(kilometersAway: number): number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hours: number = milesAway / speedMph;
//   return hours / 24;
// }
// Define your Spacecraft class here:
var spaceCraft = /** @class */ (function () {
    function spaceCraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = "Space Shuttle";
        this.speedMph = 17500;
    }
    spaceCraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    return spaceCraft;
}());
// Create an instance of the class here:
var spaceShuttle = new spaceCraft("Determination", 17500);
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log("It will take " + spaceShuttle.name + " " + spaceShuttle.getDaysToLocation(kilometersToMars) + " to reach Mars.");
console.log("It will take " + spaceShuttle.name + " " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days to reach the Moon.");

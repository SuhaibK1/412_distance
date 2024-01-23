// JavaScript Module Assignment

// Internal “helper” functions
const feetToMeters = (feet) => `${feet} feet is ${feet * 0.3048} meters.`;

const metersToFeet = (meters) => `${meters} meters is ${meters * 3.28084} feet.`;

const milesToKm = (miles) => `${miles} miles is ${miles * 1.60934} Km.`;

const kmToMiles = (km) => `${km} Km is ${km * 0.621371} miles.`;

// Main conversion function
exports.calculate = function (unit, value) {
    if (unit == 'feet') {
        return feetToMeters(value);
    }
    else if (unit == 'meters') {
        return metersToFeet(value);
    }
    else if (unit == 'miles') {
        return milesToKm(value);
    }
    else if (unit == 'km') {
        return kmToMiles(value);
    }
};

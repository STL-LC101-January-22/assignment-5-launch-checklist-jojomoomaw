require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let target = document.getElementById("missionTarget");
    target.innerHTML = `
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}"> `

}

function validateInput(testInput) {
    /*complete the helper function in your scriptHelper.js called validateInput(). 
    validateInput() should take in a string as a parameter and 
    return "Empty", "Not a Number", or "Is a Number" as appropriate*/
    let test = testInput;
    if (test === "") {
        return "Empty"
    } else if (isNan(test)) {
        return "Is a Number"
    } else if (!isNaN(test)) {
        return "Not a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // formSubmission will be called when the user clicks submit, 
    // it will call the validateInput fucntion to validate the data in the fields, 
    // if there is an invalid entry in any of the four fields, then it will send the alert and NOT update the html

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copiloStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let faultyItemsVar = document.getElementById("faultyItems");
    let launchStatusText = document.getElementById("launchStatus");
    let launchStatusCss = document.querySelector("#launchStatusCheck");



    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel)) {
        window.alert("All inputs are required: Pilot/Copilot should be letters, Fuel/Cargo should be numbers");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Invalid input: Pilot/copilot should be alphabetic only");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Invalid input: Fuel/cargo should be numeric only");
    } else {
        if (Number.fuelLevel.value < 10000) {
            // change faultyItems to visibile with updated fuel status (too low). h2 lauchStatus=notReady color=red
            //    document.getElemntById("faultyItems").innerHTML =
            faultyItemsVar.style.visibility = "visible";
            fuelStatus.innerHTML = `Fuel level too low for takeoff`;
            launchStatusCss.style.color = "rgb (199, 37, 78)";
            launchStatusText.innerHTML = `Shuttle is not ready for launch`;

        }
        if (Number.cargoLevel.value > 10000) {
            // change faultyItems to visibile with updated cargo status (too heavy). h2 lauchStatus=notReady color=red
            faultyItemsVar.style.visibility = "visible";
            cargoStatus.innerHTML = `Cargo too heavy for takeoff`;
            launchStatusCss.style.color = "rgb (199, 37, 78)";
            launchStatusText.innerHTML = `Shuttle is not ready for launch`;

        }
        if (Number.fuelLevel.value >= 10000 && Number.cargoLevel.value <= 10000) {
            // launchStatus=ready color=green
            pilotStatus.innerHTML = `${pilot}  ready for takeoff`;
            copilotStatus.innerHTML = `${copilot}  ready for takeoff`;
            launchStatusCss.style.color = "rgb (65, 159, 106)";
            launchStatusText.innerHTML = `Shuttle is ready for launch`;
        }
    }
}

async function myFetch() {
    let planetsReturned;
    /*url goes here */
    planetsReturned = await fetch(handlers.education.launchcode.org / static / planets.json).then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let n = [Math.floor(Math.random() * planets.length)];
    return planets[n];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;


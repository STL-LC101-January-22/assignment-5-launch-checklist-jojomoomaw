require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    /*complete the helper function in your scriptHelper.js called validateInput(). 
    validateInput() should take in a string as a parameter and 
    return "Empty", "Not a Number", or "Is a Number" as appropriate*/
    if (testInput === "") {
        return "Empty"
    } else if (isNan(testInput)) {
        return "Is a Number"
    } else if (!isNaN(testInput)) {
        return "Not a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // formSubmission will be called when the user clicks submit, 
    // it will call the validateInput fucntion to validate the data in the fields, 
    // if there is an invalid entry in any of the four fields, then it will send the alert and NOT update the html

    let pilotStatus = document.getElementById("pilotName");
    let copilotStatus = document.getElementById("copilotName");
    let fuelStatus = document.getElementById("fuelLevel");
    let cargoStatus = document.getElementById("cargoMass");
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
        if (fuelLevel.value < 10000) {
            // change faultyItems to visibile with updated fuel status (too low). h2 lauchStatus=notReady color=red
            //    document.getElemntById("faultyItems").innerHTML =
            faultyItemsVar.style.visibility = "visible";
            fuelStatus.innerText = `Fuel level too low for takeoff`;
            launchStatusCss.style.color = "rgb (199, 37, 78)";
            launchStatusText.innerText = `Shuttle is not ready for launch`;

        }
        if (cargoLevel.value > 10000) {
            // change faultyItems to visibile with updated cargo status (too heavy). h2 lauchStatus=notReady color=red
            faultyItemsVar.style.visibility = "visible";
            cargoStatus.innerText = `Cargo too heavy for takeoff`;
            launchStatusCss.style.color = "rgb (199, 37, 78)";
            launchStatusText.innerText = `Shuttle is not ready for launch`;

        }
        if (fuelLevel.value >= 10000 && cargoLevel.value <= 10000) {
            // launchStatus=ready color=green
            pilotStatus.innerText = `${pilot}  ready for takeoff`;
            copilotStatus.innerText = `${copilot}  ready for takeoff`;
            launchStatusCss.style.color = "rgb (0, 128, 0)";
            launchStatusText.innerText = `Shuttle is ready for launch`;
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
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

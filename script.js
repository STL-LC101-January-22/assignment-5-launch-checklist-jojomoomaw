import { formSubmission } from "./scriptHelper";

window.addEventListener("load", function () {
    // define a variable to hold the data from a querySelector for your form, and attach the 'submit' event listener to it
    let form = document.querySelector("form")
    let list = document.querySelector("#faultyItems > ol");
    list.style.visibility = "hidden";
    
        form.addEventListener("submit", function (event) {
    
            let pilot = document.querySelector("input=[name='pilotName']").value;
            let copilot = document.querySelector("input=[name='copilotName']").value;
            let fuelLevel = document.querySelector("input=[name='fuelLevel']").value;
            let cargoLevel = document.querySelector("input=[name='cargoMass']").value;
            list.style.visibility = "hidden";
            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
            
         });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        let destinationPlanet = pickPlanet(listedPlanets);
        getDestinationInfo(document, destinationPlanet.name, destinationPlanet.diameter, destinationPlanet.star, destinationPlanet.distance, destinationPlanet.moon, destinationPlanet.image);
    }).then(function () {
        console.log(listedPlanets);
        let myPlanet = pickPlanet(listedPlanets);
        let { name, diameter, star, distance, moons, image: imageUrl } = myPlanet;

        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
        // addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
 
});
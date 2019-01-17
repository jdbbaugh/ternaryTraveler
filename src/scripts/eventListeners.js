import ternary from "./ternary";
import welcomeToTernary from "./welcomeToTernary";
import ternaryData from "./ternaryData";
import domComponents from "./domComponents";

const eventListeners = {
  firstChoose () {
    const getSelectedLocation = document.getElementById("location-selection")
    $("#output").empty()
    const chosenLocation = getSelectedLocation.value.split("-")[1];
    console.log(chosenLocation)
    ternary.displayPointsOfInterest(chosenLocation);
  },
  firstAdd () {
    console.log("addin")
    ternary.createAddLocationForm()
  },
  submitNewLocationForm () {
    console.log("submitThis")
    const cityToVisit = document.getElementById("city-to-visit");
    const locationToGo = document.getElementById("location-to-visit")
    const expectedCost = document.getElementById("expected-cost")
    const visaRequired = document.getElementById("visa-required")

    const visaAsBoolean = (visaRequired == "true")
    console.log(visaAsBoolean)

    const userInputForNewCity = {
      name: cityToVisit.value,
      visa_required: visaAsBoolean
    }
    // console.log(userInputForNewCity, userInputForNewPointOfinterest)
    ternaryData.connectToData({
      "dataSet" : "places",
      "fetchType" : "POST",
      "dataBaseObject" : userInputForNewCity
    }).then(taskComplete => {

      ternaryData.connectToData({
        "dataSet" : "places",
        "fetchType" : "GET",
        "dataBaseObject" : "",
        "embedItem" : "?_embed=places"
      }).then(places => {
        console.log(places)
        places.forEach(place => {
          if (place.name === cityToVisit.value) {
            console.log("you did it", place.id)
            const userInputForNewPointOfinterest = {
              placeId: place.id,
              name: locationToGo.value,
              description: "",
              cost: expectedCost.value,
              review: "",
              reviewcheck: false
            }
            ternaryData.connectToData({
              "dataSet" : "interests",
              "fetchType" : "POST",
              "dataBaseObject" : userInputForNewPointOfinterest
            }).then(call => {
              $("#output").empty()
              welcomeToTernary.welcomePage()
            })

          }
        })
      })
    })


  },
}

export default eventListeners
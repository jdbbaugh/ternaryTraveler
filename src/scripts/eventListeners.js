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
    const userInputForNewPointOfinterest = {
      placeId: 1,
      name: locationToGo.value,
      description: "",
      cost: expectedCost.value,
      review: "",
      reviewcheck: false
    }
    console.log(userInputForNewCity, userInputForNewPointOfinterest)
    ternaryData.connectToData({
      "dataSet" : "places",
      "fetchType" : "POST",
      "dataBaseObject" : userInputForNewCity
    })

    ternaryData.connectToData({
      "dataSet" : "interests",
      "fetchType" : "POST",
      "dataBaseObject" : userInputForNewPointOfinterest
    })
  },
}

export default eventListeners
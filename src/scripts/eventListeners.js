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

}

export default eventListeners
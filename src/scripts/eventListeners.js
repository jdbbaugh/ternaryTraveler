import ternary from "./ternary";
import welcomeToTernary from "./welcomeToTernary";
import ternaryData from "./ternaryData";
import domComponents from "./domComponents";

const eventListeners = {
  firstChoose () {
    console.log("ya")
    const getSelectedLocation = document.getElementById("location-selection")
    console.log(getSelectedLocation.value)

  },

}

export default eventListeners
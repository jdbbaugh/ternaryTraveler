import ternary from "./ternary";
import welcomeToTernary from "./welcomeToTernary";
import ternaryData from "./ternaryData";

const eventListeners = {
  firstChoose () {
    console.log("ya")
    //this needs to feed city options
    // let parkTypes = ["Dog Park", "Hiking Trails", "BasketBall Courts", "VolleyBall", "Lake", "Baseball Fields", "Picnic Shelters"];
// ===================================================================================
console.log("ya")
let arrayOfPlaces = []
ternaryData.connectToData({
  "dataSet" : "places",
  "fetchType" : "GET",
  "dataBaseObject" : "",
  "embedItem" : "?_embed=places"
})
.then(places => {
  places.forEach(place => {
    arrayOfPlaces.push(place.name)
  })
  console.log(arrayOfPlaces)
  // let arrayOfPlaces = arrayOfPlaces
  // ===================================================================================
          //create section container to be parent of forms
          let formContainer = document.getElementById("output");
          // targetContainer.appendChild(formContainer);

          // 1 PARK
          let parkDropdownAndButtonContainer = document.createElement("div");
          formContainer.appendChild(parkDropdownAndButtonContainer);
          let parkDropDown = document.createElement("select");
          parkDropDown.setAttribute("id", "park-selection")
          parkDropdownAndButtonContainer.appendChild(parkDropDown);


          let parkClassNames = ["parkOptionDog", "parkOptionHike", "parkOptionBasketBall", "parkOptionLake", "parkOptionBaseballFields", "parkOptionPicnicShelters"];


          for (let i = 0; i < arrayOfPlaces.length; i++) {
              let optionElement = document.createElement("option");
              optionElement.textContent = arrayOfPlaces[i];
              optionElement.setAttribute("class", parkClassNames[i]);
              parkDropDown.appendChild(optionElement);
          };
})


  },

}

export default eventListeners
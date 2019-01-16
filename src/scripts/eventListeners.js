import ternary from "./ternary";
import welcomeToTernary from "./welcomeToTernary";

const eventListeners = {
  firstChoose () {
    console.log("ya")
    //this needs to feed city options
    let parkTypes = ["Dog Park", "Hiking Trails", "BasketBall Courts", "VolleyBall", "Lake", "Baseball Fields", "Picnic Shelters"];


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


        for (let i = 0; i < parkTypes.length; i++) {
            let optionElement = document.createElement("option");
            optionElement.textContent = parkTypes[i];
            optionElement.setAttribute("class", parkClassNames[i]);
            parkDropDown.appendChild(optionElement);
        };

  },

}

export default eventListeners
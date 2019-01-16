import domComponents from "./domComponents";
import eventListeners from "./eventListeners";
import ternaryData from "./ternaryData";

const welcomeToTernary = {
  welcomePage () {




// ========================================================================
// begin location-container
// ========================================================================
    const targetContainer = document.getElementById("output")
    const targetAppSection = domComponents.createDomElement({
      elementType: "section",
      cssClass: "location-container",
      attributes: {
        id: "location-container"
      }
    })
    targetContainer.appendChild(targetAppSection)


    const usersFirstOptions = ["Choose Location", "Add Location"];
    usersFirstOptions.forEach(option => {
      let optionIdentifier = option.split(" ")[0].toLowerCase()
      console.log(optionIdentifier)
      targetAppSection.appendChild(domComponents.createDomElement({
        elementType: "button",
        content: option,
        cssClass: "first-button",
        attributes: {
          id: `${(optionIdentifier)}-button`
        }
      }))
    })
    const eventForAdd = document.getElementById("add-button")
    eventForAdd.addEventListener("click", () => {
      console.log("sadd")
    })

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
              let formContainer = document.getElementById("location-container");
              // targetContainer.appendChild(formContainer);

              // LOCATION
              let locationDropdownAndButtonContainer = document.createElement("div");
              locationDropdownAndButtonContainer.setAttribute("id", "optionButon")
              formContainer.appendChild(locationDropdownAndButtonContainer);
              let locationDropDown = document.createElement("select");
              locationDropDown.setAttribute("id", "location-selection")
              locationDropdownAndButtonContainer.appendChild(locationDropDown);


              for (let i = 0; i < arrayOfPlaces.length; i++) {
                  let optionElement = document.createElement("option");
                  optionElement.textContent = arrayOfPlaces[i];
                  optionElement.setAttribute("class", arrayOfPlaces[i]);
                  locationDropDown.appendChild(optionElement);
              };
              const eventForChoose = document.getElementById("choose-button")
              eventForChoose.addEventListener("click", () => {
                eventListeners.firstChoose()
              })

    })
    //.thenends

  },
}

export default welcomeToTernary

// which place would you like to visit h2
// button for each location
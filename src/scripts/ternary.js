import domComponents from "./domComponents";
import ternaryData from "./ternaryData";
import eventListeners from "./eventListeners";



const ternary = {
  displayPointsOfInterest (chosenLocation) {
    const userDefinedPlaceOfInterest = Number(chosenLocation)
    console.log(Number(chosenLocation), Number(userDefinedPlaceOfInterest))
// this will need to be defined later by city picked in initial boot up

    const targetContainer = document.getElementById("output")
    const userContainer = domComponents.createDomElement({
      elementType: "section",
      cssClass: "location-container",
      attributes: {
        id: "location-container"
      }
    })
    targetContainer.appendChild(userContainer);
    ternaryData.connectToData({
      "dataSet" : "interests",
      "fetchType" : "GET",
      "dataBaseObject" : "",
      "embedItem" : "?_embed=interests"
    })
    .then(locations => {
      locations.forEach(location => {
        // console.log(location.placeId)
        if (location.placeId === userDefinedPlaceOfInterest) {
          // console.log("interact with", location.name)
          this.locationDefined(location);
        }
      })
    })
  },
  locationDefined (locationToInteractWith) {
    const locationContainer = document.getElementById("location-container")
    locationContainer.appendChild(domComponents.createDomElement({
      elementType: "h2",
      content: locationToInteractWith.name,
      cssClass: "location-name",
      attributes: {
        id: `location-${locationToInteractWith.id}`
      }
    }));
    locationContainer.appendChild(domComponents.createDomElement({
      elementType: "p",
      content: locationToInteractWith.description,
      cssClass: "location-description",
      attributes: {
        id: `location-description-${locationToInteractWith.id}`
      }
    }));
    locationContainer.appendChild(domComponents.createDomElement({
      elementType: "button",
      content: "Edit Description",
      attributes: {
        id: "edit-button"
      }
    }))
    locationContainer.appendChild(domComponents.createDomElement({
      elementType: "p",
      content: `$${locationToInteractWith.cost}`,
      cssClass: "location-cost",
      attributes: {
        id: `location-cost-${locationToInteractWith.id}`
      }
    }));
    locationContainer.appendChild(domComponents.createDomElement({
      elementType: "button",
      content: "Edit Cost",
      attributes: {
        id: "cost-edit-button"
      }
    }))
    locationContainer.appendChild(domComponents.createDomElement({
      elementType: "button",
      content: "Delete This Location",
      attributes: {
        id: "delete-button"
      }
    }))
    locationContainer.appendChild(domComponents.createDomElement({
      elementType: "button",
      content: "Return To Menu",
      attributes: {
        id: "return-button"
      }
    }))
    const returnHomeButton = document.getElementById("return-button")
    returnHomeButton.addEventListener("click", () => {
      eventListeners.returnHome()
    })
    const editDescriptionButton = document.getElementById("edit-button")
    editDescriptionButton.addEventListener("click", () => {
      eventListeners.editLocationDescription()
    })
    const editCostButton = document.getElementById("cost-edit-button")
    editCostButton.addEventListener("click", () => {
      eventListeners.editLocationCost()
    })
    const deleteLocationButton = document.getElementById("delete-button")
    deleteLocationButton.addEventListener("click", () => {
      eventListeners.deleteLocation()
    })
  },
  createAddLocationForm () {
      console.log("begin")
      let formHTML = `
      <h1 class = "t-border">Make new event</h1>
        <section class = "form">
          <div action="" class = registerForm>
            <input id = "city-to-visit" type="text" placeholder = "City To Visit">
            <input id = "location-to-visit" type="text" placeholder = "Location To Visit">
            <input id = "expected-cost" type="text" placeholder = "Expected Cost">
            <p>visa?</p>
            <select id="visa-required">
                <option>true</option>
                <option>false</option>
            </select>
            <button id = "registerButton">Create Experience</button>
            </div>
        </section>
        `
        $("#output").html(formHTML)

        const buttonForNewLocation = document.getElementById("registerButton");
        buttonForNewLocation.addEventListener("click", () => {
          eventListeners.submitNewLocationForm()
        })


// /cityname locationname cost visa
  },


}

export default ternary

// DROPDOWN TO SHOW WHICH CITY   THEN ...
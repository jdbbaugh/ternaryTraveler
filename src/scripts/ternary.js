import domComponents from "./domComponents";
import ternaryData from "./ternaryData";



const ternary = {
  displayPointsOfInterest () {
    const userDefinedPlaceOfInterest = 1
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
    }))
    locationContainer.appendChild(domComponents.createDomElement({
      elementType: "p",
      content: `$${locationToInteractWith.cost}`,
      cssClass: "location-cost",
      attributes: {
        id: `location-cost-${locationToInteractWith.id}`
      }
    }))
  },


}

export default ternary

// DROPDOWN TO SHOW WHICH CITY   THEN ...
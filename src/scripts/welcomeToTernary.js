import domComponents from "./domComponents";
import eventListeners from "./eventListeners";

const welcomeToTernary = {
  welcomePage () {
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
    const eventForChoose = document.getElementById("choose-button")
    const eventForAdd = document.getElementById("add-button")
    eventForChoose.addEventListener("click", () => {
      eventListeners.firstChoose()
    })
    eventForAdd.addEventListener("click", () => {
      console.log("sadd")
    })

  }
}

export default welcomeToTernary

// which place would you like to visit h2
// button for each location
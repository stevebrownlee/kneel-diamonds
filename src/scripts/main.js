import { getApplicationState } from "./ApplicationState.js"
import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

document.addEventListener("stateChanged", async () => {
    console.log("State of data has changed. Regenerating HTML...")

    const currentState = getApplicationState()
    console.log("Current state is...", currentState)

    const newHTML = await KneelDiamonds()
    mainContainer.innerHTML = newHTML

})

document.dispatchEvent(new CustomEvent("stateChanged"))
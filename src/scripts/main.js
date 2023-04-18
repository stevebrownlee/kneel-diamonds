import { getApplicationState } from "./ApplicationState.js"
import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

document.addEventListener("stateChanged", async () => {
    const currentState = getApplicationState()
    console.log(currentState)

    const newHTML = await KneelDiamonds()
    mainContainer.innerHTML = newHTML

})

document.dispatchEvent(new CustomEvent("stateChanged"))
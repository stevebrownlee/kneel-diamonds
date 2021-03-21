import { fetchMetals, fetchOrders, fetchSizes, fetchStyles } from "./dataAccess.js"
import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const syncDataFromAPI = () => {
    return fetchStyles()
        .then(
            () => fetchSizes()
        )
        .then(
            () => fetchStyles()
        )
        .then(
            () => fetchOrders()
        )
        .then(
            () => fetchMetals()
        )
}

const renderAllHTML = () => {
    syncDataFromAPI()
        .then(
            () => {
                mainContainer.innerHTML = KneelDiamonds()
            }
        )
}

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

document.dispatchEvent(new CustomEvent("stateChanged"))
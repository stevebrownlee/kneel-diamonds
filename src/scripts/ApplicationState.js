let applicationState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
}

export const getApplicationState = () => {
    return {...applicationState}
}

export const setMetalChoice = (chosenMetalId) => {
    applicationState.metalId = chosenMetalId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setStyleChoice = (chosenStyleId) => {
    applicationState.styleId = chosenStyleId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setSizeChoice = (chosenSizeId) => {
    applicationState.sizeId = chosenSizeId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const addCustomOrder = async () => {
    const response = await fetch("http://localhost:8088/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(applicationState)
    })

    applicationState = {
        metalId: 0,
        sizeId: 0,
        styleId: 0
    }

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

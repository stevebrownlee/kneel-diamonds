let applicationState = {
    chosenMetal: 0,
    chosenSize: 0,
    chosenStyle: 0
}

export const getApplicationState = () => {
    return {...applicationState}
}

export const setMetalChoice = (chosenMetalId) => {
    applicationState.chosenMetal = chosenMetalId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setStyleChoice = (chosenStyleId) => {
    applicationState.chosenStyle = chosenStyleId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setSizeChoice = (chosenSizeId) => {
    applicationState.chosenSize = chosenSizeId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const addCustomOrder = () => {
    const newOrder = {
        metalId: applicationState.chosenMetal,
        styleId: applicationState.chosenStyle,
        sizeId: applicationState.chosenSize
    }
    newOrder.timestamp = Date.now()

    return fetch("http://localhost:8088/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newOrder)
    })
        .then(response => response.json())
        .then(() => {
            applicationState = {
                chosenMetal: 0,
                chosenSize: 0,
                chosenStyle: 0
            }

            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

const applicationState = {
    orderBuilder: {},
    type: "ring",
    orders: [],
    metals: [],
    styles: [],
    sizes: []
}

export const setType = (type) => {
    applicationState.type = type
}

export const getCurrentOrder = () => {
    return applicationState.orderBuilder
}

export const setMetal = (id) => {
    applicationState.orderBuilder.metalId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setSize = (id) => {
    applicationState.orderBuilder.sizeId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setStyle = (id) => {
    applicationState.orderBuilder.styleId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const addCustomOrder = () => {
    const newOrder = {...applicationState.orderBuilder}
    newOrder.timestamp = Date.now()
    newOrder.type = applicationState.type

    return fetch("http://localhost:8088/customOrders", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newOrder)
    })
        .then(response => response.json())
        .then(() => {
            applicationState.orderBuilder = {}
            applicationState.type = "ring"
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const getOrders = () => {
    return [...applicationState.orders]
}

export const getMetals = () => {
    return [...applicationState.metals]
}

export const getStyles = () => {
    return [...applicationState.styles]
}

export const getSizes = () => {
    return [...applicationState.sizes]
}

export const fetchOrders = () => {
    return fetch("http://localhost:8088/customOrders")
        .then(response => response.json())
        .then(
            (orders) => {
                applicationState.orders = orders
            }
        )
}

export const fetchMetals = () => {
    return fetch("http://localhost:8088/metals")
        .then(response => response.json())
        .then(
            (metals) => {
                applicationState.metals = metals
            }
        )

}

export const fetchSizes = () => {
    return fetch("http://localhost:8088/sizes")
    .then(response => response.json())
    .then(
        (sizes) => {
            applicationState.sizes = sizes
        }
    )

}

export const fetchStyles = () => {
    return fetch("http://localhost:8088/styles")
        .then(response => response.json())
        .then(
            (styles) => {
                applicationState.styles = styles
            }
        )
}


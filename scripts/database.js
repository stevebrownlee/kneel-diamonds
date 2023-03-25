/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    orderBuilder: {

    },
    type: "ring",
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            type: "earring",
            timestamp: 1614659931693
        }
    ]
}

export const setType = (type) => {
    database.type = type
}

export const getCurrentOrder = () => {
    return database.orderBuilder
}

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const addCustomOrder = () => {
    if (
        database.orderBuilder.styleId
        && database.orderBuilder.sizeId
        && database.orderBuilder.metalId) {

        const newOrder = { ...database.orderBuilder }
        newOrder.timestamp = Date.now()
        newOrder.id = structuredClone(database.customOrders).pop().id + 1
        newOrder.type = database.type
        database.customOrders.push(newOrder)

        database.orderBuilder = {}
        database.type = "ring"
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
    else {
        document.dispatchEvent(new CustomEvent("error", {
            detail: {
                "message": "Please choose all options before ordering"
            }
        }))
    }
}

export const getOrders = () => {
    return structuredClone(database.customOrders)
}

export const getMetals = () => {
    return structuredClone(database.metals)
}

export const getSizes = () => {
    return structuredClone(database.sizes)
}

export const getStyles = () => {
    return structuredClone(database.styles)
}


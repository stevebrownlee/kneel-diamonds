import { getMetals, getOrders, getSizes, getStyles } from "./dataAccess.js"


const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()

    const metalPrice = metals.find(m => m.id === order.metalId).price
    const sizePrice = sizes.find(s => s.id === order.sizeId).price
    const stylePrice = styles.find(st => st.id === order.styleId).price

    let totalCost = metalPrice + stylePrice + sizePrice

    if (order.type === "earrings") {
        totalCost *= 2
    }

    if (order.type === "necklace") {
        totalCost *= 4
    }

    return `<li>
        Order #${order.id} cost ${totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


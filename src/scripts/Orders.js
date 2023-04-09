const buildOrderListItem = (order, metals, sizes, styles) => {
    const metalPrice = metals.find(m => m.id === order.metalId).price
    const sizePrice = sizes.find(s => s.id === order.sizeId).price
    const stylePrice = styles.find(st => st.id === order.styleId).price

    let totalCost = metalPrice + stylePrice + sizePrice

    return `<li>
        Order #${order.id} cost ${totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}

export const Orders = async () => {
    const orders = await fetch("http://localhost:8088/orders").then(res => res.json())
    const styles = await fetch("http://localhost:8088/styles").then(res => res.json())
    const metals = await fetch("http://localhost:8088/metals").then(res => res.json())
    const sizes = await fetch("http://localhost:8088/sizes").then(res => res.json())


    let html = "<ul>"
    html += orders
            .map((order) => buildOrderListItem(order, metals, sizes, styles))
            .join("")
    html += "</ul>"

    return html
}


export const Orders = async () => {
    const orders = await fetch("http://localhost:8088/orders?_expand=metal&_expand=size&_expand=style").then(res => res.json())

    let html = orders.map((order) => {
        let totalCost = order.metal.price + order.style.price + order.size.price

        return `<div>Order #${order.id} costs ${totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}</div>`
    })

    html = html.join("")

    return html
}

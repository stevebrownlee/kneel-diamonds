import { addCustomOrder } from "./database.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals } from "./Metals.js"
import { Orders } from "./Orders.js"
import { JewelryTypes } from "./Types.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        ${JewelryTypes()}

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <section class="messages"></section>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

document.addEventListener("error", event => {
    const messages = document.querySelector(".messages")
    messages.classList.toggle("show")
    messages.innerHTML = event.detail.message

    setTimeout(() => {
        messages.classList.toggle("show")
        document.querySelector(".messages").innerHTML = ""
    }, 2000);
})

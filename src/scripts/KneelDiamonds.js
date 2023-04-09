import { addCustomOrder } from "./ApplicationState.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals } from "./Metals.js"
import { Orders } from "./Orders.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "orderButton") {
        addCustomOrder()
    }
})


export const KneelDiamonds = async () => {
    const metalChoices = await Metals()
    const sizeChoices = await DiamondSizes()
    const styleChoices = await JewelryStyles()
    const placedOrders = await Orders()

    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalChoices}
                </section>
                <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeChoices}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleChoices}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${placedOrders}
        </article>
    `
}

import { getCurrentOrder, getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    const currentOrder = getCurrentOrder()

    let html = "<ul>"

    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio"
                ${currentOrder.sizeId === size.id ? "checked" : ""}
                name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}


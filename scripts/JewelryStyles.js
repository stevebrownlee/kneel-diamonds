import { getCurrentOrder, getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    const currentOrder = getCurrentOrder()

    let html = "<ul>"

    const listItems = styles.map(style => {
        return `<li>
            <input type="radio"
                ${currentOrder.styleId === style.id ? "checked" : ""}
                name="style" value="${style.id}" /> ${style.style}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}


import { getCurrentOrder, getSizes, setSize } from "./dataAccess.js"


document.addEventListener("change", (event) => {
    if (event.target.name === "size") {
        setSize(parseInt(event.target.value))
    }
})

export const DiamondSizes = () => {
    const currentOrder = getCurrentOrder()
    const sizes = getSizes()

    let html = `
        <ul>
        ${
            sizes.map(size => {
                return `<li>
                    <input type="radio"
                        ${currentOrder.sizeId === size.id ? "checked" : ""}
                        name="size" value="${size.id}" /> ${size.carets}
                </li>`
            }).join("")
        }
        </ul>
    `

    return html
}

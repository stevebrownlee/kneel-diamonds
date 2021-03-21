import { getCurrentOrder, getMetals, setMetal } from "./dataAccess.js"


document.addEventListener("change", (event) => {
    if (event.target.name === "metal") {
        setMetal(parseInt(event.target.value))
    }
})

export const Metals = () => {
    const currentOrder = getCurrentOrder()
    let metals = getMetals()

    let html = "<ul>"

    for (const metal of metals) {
        html += `<li>
            <input type="radio"
                ${currentOrder.metalId === metal.id ? "checked" : ""}
                name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

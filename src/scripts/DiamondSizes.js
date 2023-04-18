import { getApplicationState, setSizeChoice } from "./ApplicationState.js"


document.addEventListener("change", (event) => {
    if (event.target.name === "size") {
        setSizeChoice(parseInt(event.target.value))
    }
})

export const DiamondSizes = async () => {
    const request = await fetch("http://localhost:8088/sizes")
    const sizes = await request.json()
    const currentUserChoices = getApplicationState()

    let html = `
        <ul>
        ${
            sizes.map(size => {
                return `<li>
                    <input type="radio"
                        ${currentUserChoices.sizeId === size.id ? "checked" : ""}
                        name="size" value="${size.id}" /> ${size.carets}
                </li>`
            }).join("")
        }
        </ul>
    `

    return html
}

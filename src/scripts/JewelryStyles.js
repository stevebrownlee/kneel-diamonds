import { getApplicationState, setStyleChoice } from "./ApplicationState.js"

document.addEventListener("change", (event) => {
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
})

export const JewelryStyles = async () => {
    const request = await fetch("http://localhost:8088/styles")
    const styles = await request.json()
    const currentUserChoices = getApplicationState()

    let html = "<ul>"

    const listItems = styles.map(style => {
        return `<li>
            <input type="radio"
                ${currentUserChoices.styleId === style.id ? "checked" : ""}
                name="style" value="${style.id}" /> ${style.style}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}


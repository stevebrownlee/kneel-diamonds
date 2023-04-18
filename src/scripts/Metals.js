import { getApplicationState, setMetalChoice } from "./ApplicationState.js"

const handleMetalChoice = (event) => {
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))
    }
}

export const Metals = async () => {
    const request = await fetch("http://localhost:8088/metals")
    const metals = await request.json()
    const currentUserChoices = getApplicationState()

    document.addEventListener("change", handleMetalChoice)

    let html = "<ul>"

    for (const metal of metals) {
        html += `<li>
            <input type="radio"
                ${currentUserChoices.metalId === metal.id ? "checked" : ""}
                name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

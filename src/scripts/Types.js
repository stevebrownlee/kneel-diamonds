import { setType } from "./dataAccess.js"

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.name === "jewelryType") {
        setType(clickEvent.target.value)
    }
})

export const JewelryTypes = () => {
    return `<section class="types">
        <div>
            <input type="radio" value="ring" name="jewelryType" checked /> Ring
        </div>
        <div>
            <input type="radio" value="earrings" name="jewelryType" /> Earring
        </div>
        <div>
            <input type="radio" value="necklace" name="jewelryType" /> Necklace
        </div>
    </section>`
}
import { player, change } from "../index.js"
import Item from "../classes/item.js"

const items = Item.getAll()
for (let i = 0; i < items.length; i++) {
    let div = document.createElement("div"), img = document.createElement("img"), p = document.createElement('p')
    div.id = i
    div.className = "slot"
    img.src = items[i].image
    p.innerText = "Clique para comprar"
    div.append(img, p)
    document.querySelector("#mostruario").appendChild(div)
}

// LOJA
document.querySelector("button#shop").addEventListener("click", e => {
    change("main", "#shopMenu")
})
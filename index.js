import Player from "./classes/player.js"

export const player = new Player()

// INVENTORY SETUP
for (let i = 0; i < 24; i++) {
    let div = document.createElement("div")
    div.id = i
    div.className = "slot"
    div.appendChild(document.createElement("img"))
    document.querySelector("#grid").appendChild(div)
}
for (let i = 0; i < 8; i++) {
    let div = document.createElement("div")
    div.id = i
    div.className = "slot"
    div.appendChild(document.createElement("img"))
    document.querySelector("#equipment").appendChild(div)
}

// BACK BUTTONS SETUP
for (let b of document.querySelectorAll(".back")) {
    b.addEventListener("click", _ => {
        change("#battleMenu", "main")
        change("#inventoryMenu", "main")
        change("#shopMenu", "main")
    })
}

export function change(actual, future) {
    document.querySelector(actual).style.display = "none"
    document.querySelector(future).style.display = "block"
}

import("./sections/battle.js")
import("./sections/inventory.js")
import("./sections/shop.js")
import { player, change } from "../index.js"

// LOJA
document.querySelector("button#shop").addEventListener("click", e => {
    change("main", "#shopMenu")
})
import { Enemy, Item } from "./classes.js"

/**
 * @type {Item[]}
 */
let inv = []
let def = 10, atk = 5, life = 10

for (let i = 0; i < 24; i++) {
    let div = document.createElement("div")
    div.id = i
    div.appendChild(document.createElement("img"))
    document.querySelector("#grid").appendChild(div)
}

document.querySelector("button#battle").addEventListener("click", e => {
    change("main", "div#battleMenu")

    let text = document.querySelector("div#battleMenu").querySelector("div#text")
    let enemy = new Enemy(1, 1, 1)
    let attacks = -1

    while (enemy.life > 0) {
        attacks++
        enemy.life -= atk
    }

    for (let i = 0; i < attacks; i++) {
        life -= enemy.atk
    }

    if (life > 0) {
        text.innerText = "Você ganhou!"
        inv.push(Item.get())
    } else text.innerText = "Você perdeu!"
})

document.querySelector("button#inventory").addEventListener("click", e => {
    change("main", "#inventoryMenu")

    let menu = document.querySelector("#inventoryMenu")
    for (let i = 0; i < inv.length; i++) {
        menu.querySelector(`div[id='${i}']`).querySelector("img").src = inv[i].image
    }
})

document.querySelector("button#shop").addEventListener("click", e => {
    change("main", "#shopMenu")
})

for (let b of document.querySelectorAll(".back")) {
    b.addEventListener("click", _ => {
        change("#battleMenu", "main")
        change("#inventoryMenu", "main")
        change("#shopMenu", "main")
    })
}

function change(actual, future) {
    document.querySelector(actual).style.display = "none"
    document.querySelector(future).style.display = "block"
}
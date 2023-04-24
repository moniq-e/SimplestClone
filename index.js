import { Enemy, Item } from "./classes.js"

let grid = document.querySelector("div#grid"), battle = document.querySelector("button#battle"), inventory = document.querySelector("button#inventory"), shop = document.querySelector("button#shop")

let def = 10, atk = 5, life = 10, inv = []

for (let i = 0; i < 24; i++) {
    let div = document.createElement("div")
    div.id = i
    grid.appendChild(div)
}

battle.addEventListener("click", e => {
    change("main", "div#battleMenu")

    let text = document.querySelector("div#battleMenu").querySelector("div#text")
    let ene = new Enemy(1, 1, 1)
    let attacks = -1

    while (ene.life > 0) {
        attacks++
        ene.life -= atk
    }

    for (let i = 0; i < attacks; i++) {
        life -= ene.atk
    }

    if (life > 0) {
        text.innerText = "Você ganhou!"
        inv.push(new Item())
    } else text.innerText = "Você perdeu!"
})

inventory.addEventListener("click", e => {
    change("main", "div#inventoryMenu")

    for (let i = 0; i < inv.length; i++) {
        document.querySelector("div#battleMenu").querySelector(`div#${i}`).innerText = inv[i].text
    }
})

shop.addEventListener("click", e => {
    change("main", "div#shopMenu")

})

document.querySelectorAll("button#back").forEach(i => i.addEventListener("click", e => {
    change("div#battleMenu", "main")
    change("div#inventoryMenu", "main")
    change("div#shopMenu", "main")
}))

function change(actual, future) {
    document.querySelector(actual).style.display = "none"
    document.querySelector(future).style.display = "block"
}

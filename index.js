import { Enemy, Item, Player } from "./classes.js"

const player = new Player()

for (let i = 0; i < 24; i++) {
    let div = document.createElement("div")
    div.id = i
    div.appendChild(document.createElement("img"))
    document.querySelector("#grid").appendChild(div)
}

for (let i = 0; i < 8; i++) {
    let div = document.createElement("div")
    div.id = i
    div.appendChild(document.createElement("img"))
    document.querySelector("#equipment").appendChild(div)
}

// BATALHA
document.querySelector("button#battle").addEventListener("click", e => {
    change("main", "div#battleMenu")

    let text = document.querySelector("div#battleMenu div#text")
    let enemy = new Enemy(1, 1, 1)
    let attacks = -1

    while (enemy.life > 0) {
        attacks++
        enemy.life -= player.getAtk()
    }

    for (let i = 0; i < attacks; i++) {
        player.life -= enemy.atk
    }

    if (player.life > 0) {
        text.innerText = "Você ganhou!"
        player.inv.push(Item.get())
    } else {
        text.innerText = "Você perdeu!"
    }
})

// INVENTÁRIO
document.querySelector("button#inventory").addEventListener("click", e => {
    change("main", "#inventoryMenu")
    drawInv()
})

// LOJA
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

for (const div of document.querySelectorAll("div#grid div")) {
    div.addEventListener("click", e => {
        if (player.addEquip(player.inv[div.id])) {
            player.removeItem(div.id)
            drawInv()
        }
    })
}

function drawInv() {
    for (let i = 0; i < 24; i++) {
        document.querySelector(`div#grid div[id='${i}'] img`).src = (player.inv[i] ? player.inv[i].image : '')
    }
    for (let i = 0; i < 8; i++) {
        document.querySelector(`div#equipment div[id='${i}'] img`).src = (player.equip[i] ? player.equip[i].image : '')
    }
}
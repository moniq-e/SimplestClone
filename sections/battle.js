import { player, change } from "../index.js"
import Enemy from "../classes/enemy.js"
import Item from "../classes/item.js"

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
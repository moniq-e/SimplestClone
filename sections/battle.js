import { player, change } from "../index.js"
import Enemy from "../classes/enemy.js"
import Item from "../classes/item.js"

// BATALHA
document.querySelector("button#battle").addEventListener("click", e => {
    change("main", "div#battleMenu")

    let text = document.querySelector("div#battleMenu div#text")
    let enemy = Enemy.get()
    let attacks = -1

    if (player.life) {
        while (enemy.life > 0) {
            attacks++
            enemy.life -= player.getAtk()
        }
    
        for (let i = 0; i < attacks; i++) {
            player.life -= (player.life >= enemy.atk ? enemy.atk : player.life)
        }
    
        if (player.life > 0) {
            text.innerText = "Você ganhou!"
            player.inv.push(Item.get())
        } else {
            text.innerText = "Você perdeu!"
        }
    } else text.innerText = "Recupere sua vida primeiro."
})
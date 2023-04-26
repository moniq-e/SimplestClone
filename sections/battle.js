import { player, change } from "../index.js"
import Enemy from "../classes/enemy.js"
import Item from "../classes/item.js"
import { r } from "../classes/util.js"

const mobs = Enemy.getAll()
for (let i = 0; i < mobs.length; i++) {
    let div = document.createElement("div"), name = document.createElement("h3"), desc = document.createElement('h3')
    div.id = i
    name.innerText = mobs[i].name
    desc.innerText = `Lvl: ${mobs[i].lvl} | Def: ${mobs[i].def} | Atk: ${mobs[i].atk} | HP: ${mobs[i].life}`
    div.append(name, desc)
    document.querySelector("#moblist").appendChild(div)
}

// BATALHA
document.querySelector("button#battle").addEventListener("click", e => {
    change("main", "div#battleMenu")
})

for (const div of document.querySelectorAll("#moblist div")) {
    div.addEventListener("click", _ => {
        let enemy = mobs[parseInt(div.id)]
        let attacks = -1

        //debugar, arrumar e melhorar sistema de combate
        if (player.life) {
            while (enemy.life > 0) {
                attacks++
                enemy.life -= (player.getAtk() / enemy.def >= 1 ? 1 : parseInt(player.getAtk() * (1 - (player.getAtk() / enemy.def))))
            }
        
            for (let i = 0; i < attacks; i++) {
                player.life -= (enemy.atk / player.getDef() >= 1 ? 1 : parseInt(enemy.atk * (1 - (enemy.atk / player.getDef()))))
            }
        
            if (player.life > 0) {
                if (Math.random() >= 0.9) player.inv.push(Item.get())
                player.coins += r(15, 30) * enemy.lvl
                player.xp += r(15, 30) * enemy.lvl
            }
        }
    })
}
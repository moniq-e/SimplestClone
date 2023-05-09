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
        let enemy = Enemy.get(mobs[parseInt(div.id)].name)
        
        let playerAtk = parseInt(player.getAtk() * ((player.getAtk() / enemy.def) > 0.95 ? 0.95 : (player.getAtk() / enemy.def)))
        let enemyAtk = parseInt(enemy.atk * ((enemy.atk / player.def) > 0.95 ? 0.95 : (enemy.atk / player.def)))

        do {
            enemy.life -= playerAtk
            if (enemy.life > 0) {
                player.life -= enemyAtk
            }
        } while (player.life > 0 && enemy.life > 0);

        if (player.life > 0) {
            if (Math.random() >= 0.9) player.inv.push(Item.get())
            player.coins += r(15, 30) * enemy.lvl
            player.xp += r(15, 30) * enemy.lvl
        }
    })
}
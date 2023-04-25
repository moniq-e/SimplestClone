import { player, change } from "../index.js"

// INVENTÁRIO
document.querySelector("button#inventory").addEventListener("click", e => {
    change("main", "#inventoryMenu")
    drawInv()
})

for (const div of document.querySelectorAll("div#grid div")) {
    div.addEventListener("click", e => {
        if (player.addEquip(player.inv[div.id])) {
            player.removeItem(div.id)
            drawInv()
        }
    })
}

for (const div of document.querySelectorAll("div#equipment div")) {
    div.addEventListener("click", e => {
        if (player.inv.length < 24) {
            player.inv.push(player.equip[div.id])
            player.removeEquip(div.id)
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

let desc = document.querySelector("div#desc")
for (const div of document.querySelectorAll("div.slot")) {
    div.addEventListener("mouseenter", e => {
        if (div.querySelector('img').src.endsWith('.png')) {
            desc.style.display = 'block'
        }

        let item = (div.parentElement.id == "grid" ? player.inv[div.id] : player.equip[div.id])

        desc.querySelector('h3').innerText = item.name
        desc.querySelector('p').innerText = (item.atk ? `Ataque: ${item.atk}\n` : '') + (item.def ? `Defesa: ${item.def}\n` : '')
    })

    div.addEventListener("mousemove", e => {
        desc.style.left = e.clientX + 20 + "px"
        desc.style.top = e.clientY - desc.offsetHeight - 20 + "px"
    })

    div.addEventListener("mouseleave", e => {
        desc.style.display = 'none'
    })
}

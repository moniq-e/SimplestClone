import { player, change } from "../index.js"

// INVENTÁRIO
document.querySelector("button#inventory").addEventListener("click", e => {
    change("main", "#inventoryMenu")
    drawInv()
})

for (const div of document.querySelectorAll("div#grid div")) {
    div.addEventListener("click", e => {
        if ( div.children[0].getAttribute("src") != '' && player.addEquip(player.inv[div.id.match(/\d+/g)[0]]) ) {
            player.removeItem(div.id.match(/\d+/g)[0])
            drawInv()
        }
    })
}

for (const div of document.querySelectorAll("div#equipment div")) {
    div.addEventListener("click", e => {
        if ( div.children[0].getAttribute("src") != '' && player.inv.length < 24 ) {
            player.inv.push(player.equip[div.id.match(/\d+/g)[0]])
            player.removeEquip(div.id.match(/\d+/g)[0])
            drawInv()
        }
    })
}

function drawInv() {
    for (let i = 0; i < 24; i++) {
        document.querySelector(`div#grid div[id='inv${i}'] img`).src = (player.inv[i] ? player.inv[i].image : '')
    }
    for (let i = 0; i < 8; i++) {
        document.querySelector(`div#equipment div[id='equip${i}'] img`).src = (player.equip[i] ? player.equip[i].image : '')
    }
}

let desc = document.querySelector("div#desc")
for (const div of document.querySelectorAll("div.slot")) {
    div.addEventListener("mouseenter", e => {
        if (div.children[0].getAttribute("src") != '') {
            desc.classList.add("active")
        }        
    })
    
    div.addEventListener("mouseleave", e => {
        desc.classList.remove("active")
    })

    div.addEventListener("mousemove", e => {
        // Descrição seguir mouse
        desc.style.left = e.clientX + "px"
        desc.style.top = e.clientY - innerHeight * 0.1 + "px"
    })
}
import Item from "./item.js"
import { player } from "../index.js"

export default class Player {
    constructor() {
        this.def = 3
        this.atk = 3
        this.maxLife = 10
        this.life = 10
        this.lvl = 1
        this.maxXp = 50
        this.xp = 0
        this.coins = 0
        /**
         * @type {Item[]}
         */
        this.equip = []
        /**
         * @type {Item[]}
         */
        this.inv = []

        setInterval(this.updatePanel, 500)
    }

    updatePanel() {
        if ((player.maxLife - player.life) && player.coins) {
            player.coins--
            player.life++
        }

        if (player.xp >= player.maxXp) {
            player.lvl += Math.floor(player.xp / player.maxXp)
            player.xp = player.xp % player.maxXp
            player.maxXp = player.lvl * 50
            player.maxLife += player.lvl * 5
            player.life += Math.floor(player.lvl * 2.5)
        }

        document.querySelector('span#hp').innerText = player.life
        document.querySelector('div#hp').style.width = (player.life / player.maxLife) * 100 + "%"
        document.querySelector('span#xp').innerText = player.lvl
        document.querySelector('div#xp').style.width = player.xp / player.maxXp * 100 + "%"
        document.querySelector('span#coin').innerText = player.coins
    }

    getAtk() {
        let total = this.atk
        for (const item of this.equip) {
            total += item.atk
        }
        return total
    }

    getDef() {
        let total = this.def
        for (const item of this.equip) {
            total += item.def
        }
        return total
    }

    /**
     * @param {Item} item
     */
    addEquip(item) {
        if (this.equip.length == 8) return false

        for (let i = 0; i < this.equip.length; i++) {
            if (this.equip[i].category == item.category) {
                this.inv.push(this.equip[i])
                this.equip[i] = item
                return true
            }
        }

        this.equip.push(item)
        return true
    }

    removeEquip(slot) {
        this.equip[slot] = null
        this.equip = this.equip.filter(e => e)
    }

    removeItem(slot) {
        this.inv[slot] = null
        this.inv = this.inv.filter(e => e)
    }
}
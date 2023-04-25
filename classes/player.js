export default class Player {
    /**
     * @type {Item[]}
     */
    inv
    /**
     * @type {Item[]}
     */
    equip
    constructor() {
        this.def = 5
        this.atk = 5
        this.life = 20
        this.equip = []
        this.inv = []
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
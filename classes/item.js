export default class Item {
    constructor(name, category, def, atk) {
        this.name = name
        this.category = category
        this.def = def
        this.atk = atk
    }

    static get(name) {
        if (!name) {
            let keys = Object.keys(items)
            name = keys[Math.floor(Math.random() * keys.length)]
        }
        return items[name]()
    }

    get image() {
        return `./images/${this.name}.png`
    }
}

/**
 * @type {{[key: string]: Item}}
 */
const items = {
    coppershield: () => new Item("EscudoCobre", "shield", 5, 0),
    ironshield: () => new Item("EscudoFerro", "shield", 10, 0),
    goldenshield: () => new Item("EscudoOuro", "shield", 15, 0),
    copperhelmet: () => new Item("CapaceteCobre", "helmet", 5, 0),
    ironhelmet: () => new Item("CapaceteFerro", "helmet", 10, 0),
    goldenhelmet: () => new Item("CapaceteOuro", "helmet", 15, 0),
    copperleggings: () => new Item("CalçaCobre", "leggings", 5, 0),
    ironleggings: () => new Item("CalçaFerro", "leggings", 10, 0),
    goldenleggings: () => new Item("CalçaOuro", "leggings", 15, 0),
    copperboots: () => new Item("BotaCobre", "boots", 5, 0),
    ironboots: () => new Item("BotaFerro", "boots", 10, 0),
    goldenboots: () => new Item("BotaOuro", "boots", 15, 0),
    copperchest: () => new Item("PeitoralCobre", "chest", 5, 0),
    ironchest: () => new Item("PeitoralFerro", "chest", 10, 0),
    goldenchest: () => new Item("PeitoralOuro", "chest", 15, 0)
}
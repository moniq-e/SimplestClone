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

    static getAll() {
        return Object.values(items).map(f => f())
    }

    get image() {
        return `./images/${this.name.replace(' de ', '')}.png`
    }
}

/**
 * @type {{[key: string]: Item}}
 */
const items = {
    coppershield: () => new Item("Escudo de Cobre", "shield", 5, 0),
    ironshield: () => new Item("Escudo de Ferro", "shield", 10, 0),
    goldenshield: () => new Item("Escudo de Ouro", "shield", 15, 0),
    copperhelmet: () => new Item("Capacete de Cobre", "helmet", 5, 0),
    ironhelmet: () => new Item("Capacete de Ferro", "helmet", 10, 0),
    goldenhelmet: () => new Item("Capacete de Ouro", "helmet", 15, 0),
    copperleggings: () => new Item("Calça de Cobre", "leggings", 5, 0),
    ironleggings: () => new Item("Calça de Ferro", "leggings", 10, 0),
    goldenleggings: () => new Item("Calça de Ouro", "leggings", 15, 0),
    copperboots: () => new Item("Bota de Cobre", "boots", 5, 0),
    ironboots: () => new Item("Bota de Ferro", "boots", 10, 0),
    goldenboots: () => new Item("Bota de Ouro", "boots", 15, 0),
    copperchest: () => new Item("Peitoral de Cobre", "chest", 5, 0),
    ironchest: () => new Item("Peitoral de Ferro", "chest", 10, 0),
    goldenchest: () => new Item("Peitoral de Ouro", "chest", 15, 0),
    coppersword: () => new Item("Espada de Cobre", "sword", 0, 5),
    ironsword: () => new Item("Espada de Ferro", "sword", 0, 10),
    goldensword: () => new Item("Espada de Ouro", "sword", 0, 15)
}
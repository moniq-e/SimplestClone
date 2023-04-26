import { r } from "./util.js"

export default class Item {
    constructor(name, category, def, atk, price) {
        this.name = name
        this.category = category
        this.def = def
        this.atk = atk
        this.price = price
    }

    static get(name) {
        if (!name) return items[r(0, items.length - 1)]()
        else return items.find(f => f().name == name)()
    }

    static getAll() {
        return items.map(f => f())
    }

    get image() {
        return `./images/${this.name.replace(' de ', '')}.png`
    }
}

const items = [
    () => new Item("Escudo de Cobre", "shield", 5, 0, 25),
    () => new Item("Escudo de Ferro", "shield", 10, 0, 50),
    () => new Item("Escudo de Ouro", "shield", 15, 0, 100),
    () => new Item("Capacete de Cobre", "helmet", 5, 0, 25),
    () => new Item("Capacete de Ferro", "helmet", 10, 0, 50),
    () => new Item("Capacete de Ouro", "helmet", 15, 0, 100),
    () => new Item("Calça de Cobre", "leggings", 5, 0, 25),
    () => new Item("Calça de Ferro", "leggings", 10, 0, 50),
    () => new Item("Calça de Ouro", "leggings", 15, 0, 100),
    () => new Item("Bota de Cobre", "boots", 5, 0, 25),
    () => new Item("Bota de Ferro", "boots", 10, 0, 50),
    () => new Item("Bota de Ouro", "boots", 15, 0, 100),
    () => new Item("Peitoral de Cobre", "chest", 5, 0, 25),
    () => new Item("Peitoral de Ferro", "chest", 10, 0, 50),
    () => new Item("Peitoral de Ouro", "chest", 15, 0, 100),
    () => new Item("Espada de Cobre", "sword", 0, 5, 25),
    () => new Item("Espada de Ferro", "sword", 0, 10, 50),
    () => new Item("Espada de Ouro", "sword", 0, 15, 100)
]
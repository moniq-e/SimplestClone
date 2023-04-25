export class Enemy {
    constructor(def, atk, life) {
        this.def = def
        this.atk = atk
        this.life = life
    }
}

export class Item {
    constructor(name, def, atk) {
        this.name = name
        this.def = def
        this.atk = atk
    }

    static get(name) {
        if (!name) {
            let keys = Object.keys(items)
            name = keys[Math.floor(Math.random() * keys.length)]
        }
        return items[name].clone()
    }

    get image() {
        return `./images/${this.name}.png`
    }

    clone() {
        return new Item(this.name, this.def, this.atk)
    }
}

/**
 * @type {{[key: string]: Item}}
 */
const items = {
    sword: new Item("sword", 0, 5)
}

export class Player {
    constructor() {
        //
    }
}
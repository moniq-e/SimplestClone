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

    static getItem(name) {
        if (items[name]) return items[name]
    }
}

let items = {
    sword: new Item()
}
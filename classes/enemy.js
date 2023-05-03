import { r } from "./util.js"

export default class Enemy {
    constructor(name, def, atk, life, lvl) {
        this.name = name
        this.def = def
        this.atk = atk
        this.life = life
        this.lvl = lvl
    }

    static get(name) {
        if (!name) return enemys[r(0, enemys.length - 1)]()
        else return enemys.find(f => f().name == name)()
    }

    static getAll() {
        return enemys.map(f => f())
    }
}

const enemys = [
    () => new Enemy("Esqueleto", 0, 3, 10, 1),
    () => new Enemy("Zumbi", 5, 5, 10, 2),
    () => new Enemy("Aranha", 15, 10, 15, 3),
    () => new Enemy("Grandalhao", 20, 15, 20, 4)
]
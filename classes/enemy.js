export default class Enemy {
    constructor(name, def, atk, life, lvl) {
        this.name = name
        this.def = def
        this.atk = atk
        this.life = life
        this.lvl = lvl
    }

    static get(name) {
        if (!name) return enemys[Math.floor(Math.random() * enemys.length)]()
        else return enemys.find(f => f().name == name)()
    }

    static getAll() {
        return enemys.map(f => f())
    }
}

const enemys = [
    () => new Enemy("Esqueleto", 0, 3, 10, 0),
]
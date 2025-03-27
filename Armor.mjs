export default class Armor {
    constructor(name, minLevel, defense) {
        this.name = name;
        this.minLevel = minLevel;
        this.defense = defense;
    }

    getName() {
        return this.name;
    }

    getMinLevel() {
        return this.minLevel;
    }

    getDefense() {
        return this.defense;
    }
}
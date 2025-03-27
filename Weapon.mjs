export default class Weapon {
    constructor(name, minLevel, damage, durability) {
        this.name = name;
        this.minLevel = minLevel;
        this.damage = damage;
        this.durability = durability;
    }

    getName() {
        return this.name;
    }
    
    getMinLevel() {
        return this.minLevel;
    }

    getDamage() {
        return this.damage;
    }

    getDurability() {
        return this.durability;
    }
}
export default class Inventory {
    constructor(weapon, armor) {
        this.weapon = weapon;
        this.armor = armor;
        this.inventory = [];
    }


    getWeaponName() {
        return this.weapon.getName();
    }

    getWeaponMinLevel() {
        return this.weapon.getMinLevel();
    }

    getWeaponDamage() {
        return this.weapon.getDamage();
    }

    getWeaponDurability() {
        return this.weapon.getDurability();
    }

    getArmorName()  {
        return this.armor.getName();
    }

    getArmorMinLevel() {
        return this.armor.getMinLevel();
    }

    getArmorDefense() {
        return this.armor.getDefense();
    }

    insertWeapon(newWeapon) {
        this.inventory.push(newWeapon);
    }

    getNewInventory() {
        return this.inventory;
    }
}
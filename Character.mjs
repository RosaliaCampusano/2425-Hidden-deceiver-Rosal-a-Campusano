export default class Character {
    constructor(name, level, age, stamina, inventory) {
        this.name = name;
        this.level = level;
        this.age = age;
        this.stamina = stamina;
        this.inventory = inventory;
    }

    getName() {
        return this.name;
    }

    getLevel() {
        return this.level;
    }

    getAge() {
        return this.age;
    }

    getStamina() {
        return this.stamina;
    }


    getInventory() {
       return this.inventory; 
    }


    insertInventary(newElement) {
        this.inventory.push(newElement);
    }

    fumble() {
        //OVER
    }
    
}
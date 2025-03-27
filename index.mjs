import Weapon from "./Weapon.mjs";
import Armor from "./Armor.mjs";
import Character from "./Character.mjs";
import Inventory from "./Inventory.mjs";

//WEAPONS 
const weapon1 = new Weapon("Stormbreaker Axe", 30, 25, 80);
const weapon2 = new Weapon("Celestial Rapier", 25, 18, 75);
const weapon3 = new Weapon("Obsidian Warhammer", 38, 30, 90);
const weapon4 = new Weapon("Starfire Bow", 33, 22, 85);
const weapon5 = new Weapon("Doomfang Dagger", 28, 20, 78);

//ARMORS
const armor1 = new Armor("Shadowplate", 28, 15);
const armor2 = new Armor("Phantom Shroud", 22, 12);
const armor3 = new Armor("Titan's Bulwark", 35, 18);
const armor4 = new Armor("Sylvan Guardian", 30, 14);
const armor5 = new Armor("Abyssal Carapace", 25, 10);

//TYPES OF EQUIPEMENT
const weapons = [weapon1, weapon2, weapon3, weapon4, weapon5];
const armors = [armor1, armor2, armor3, armor4, armor5];

const inventory1 = new Inventory(weapon1, armor1);
const inventory2 = new Inventory(weapon2, armor2);
const inventory3 = new Inventory(weapon3, armor3);
const inventory4 = new Inventory(weapon4, armor4);
const inventory5 = new Inventory(weapon5, armor5);

//CHARACTERS
const character1 = new Character("Ragnar Wolfbane", 32, 45, 87, inventory1);
const character2 = new Character("Seraphina Nightshade", 27, 120, 92, inventory2);
const character3 = new Character("Thalgrim  Ironfist", 40, 52, 95, inventory3);
const character4 = new Character("Lyara Moonwhisper", 35, 29, 88, inventory4);
const character5 = new Character("Draven Blackthorn", 30, 37, 90, inventory5);


//CHARACTERS
const characters = [character1,character2, character3, character4, character5];


//LIST OF WEAPONS
showListOfWeapons(weapons);

//LIST OF ARMORS
showListOfArmors(armors);

//CHARACTERS ATTRIBUTES
showCharacterAttributes(characters);

//ARMORS MIN LEVEL < THAN 30
showMinLevel(characters);
equipmentWeaponsPerLevel(characters);


function showCharacterAttributes(characters) {

    console.log("CHARACTER LIST"); 
    console.log("--------------");

    for (let i = 0; i < characters.length; i++) {
        console.log(characters[i].getName());
        console.log("--------------");

        console.log("\nAttributes:");
        console.log("------------");
        console.log("Level: " + characters[i].getLevel());
        console.log("Age: " + characters[i].getAge());
        console.log("Stamina: " + characters[i].getStamina());
        console.log("-------------");

        console.log("\nWeapons");
        console.log("---------");
        console.log("Name: " + characters[i].getInventory().getWeaponName());
        console.log("Min Level: " + characters[i].getInventory().getWeaponMinLevel());
        console.log("Damage: " + characters[i].getInventory().getWeaponDamage());
        console.log("Durability: " + characters[i].getInventory().getWeaponDurability());

        console.log("\nArmors");
        console.log("------");
        console.log("Name: " + characters[i].getInventory().getArmorName());
        console.log("Min Level: " + characters[i].getInventory().getArmorMinLevel());
        console.log("Defense: " + characters[i].getInventory().getArmorDefense());
        console.log();

    }
}


function showMinLevel(characters) {
    console.log("\nArmors Characters");
    console.log("---------")
    for(let i = 0; i < characters.length; i++) {
        const characterArmor = characters[i].getInventory().getArmorMinLevel();

        if(characterArmor < 30) {
            console.log("Name: " + characters[i].getName());
            console.log("Level: " + characters[i].getLevel())
        }

    }

}

function equipmentWeaponsPerLevel(characters) {
    console.log("\nWeapon character equipement");
    console.log("-----------------------------");

    for(let i = 0; i < characters.length; i++) {
        const characterWeaponLevel = characters[i].getInventory().getWeaponMinLevel();
        const characterLevel = characters[i].getLevel();

        if(characterWeaponLevel <= characterLevel) {
            console.log("Name: " + characters[i].getName());
            console.log("Level: " + characters[i].getLevel());
            console.log("---------");
            console.log("\n Weapons");
            console.log("Name: " + characters[i].getInventory().getWeaponName());
            console.log("Min Level: " + characters[i].getInventory().getWeaponMinLevel());
            console.log();
        }
        

    }
}


function showListOfWeapons(weapons) {
    console.log("Weapon List");
    console.log("-----------");

    for( let i = 0; i < weapons.length; i++) {
        console.log(weapons[i].getName() + ": " + "minLevel = " + weapons[i].getMinLevel() 
                    + ", " + "Damage = " + weapons[i].getDamage() + ", "  + "Durability = " + weapons[i].getDurability());             
    }
    console.log();
}

function showListOfArmors(armors) {
    console.log("Armor List");
    console.log("----------");
    
    for (let i = 0; i < armors.length; i++) {
        console.log(armors[i].getName() + ": " + "minLevel = " + armors[i].getMinLevel()
        + ", " + "Defense = " +armors[i].getDefense());
    }
    console.log();
}
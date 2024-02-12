export default class Character {
    constructor (name, type) {

    if (name.length < 2 || name.length > 10) {
        throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!allowedTypes.includes(type)) {
        throw new Error('Некорректный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
    }
}

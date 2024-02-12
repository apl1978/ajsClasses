import Undead from '../undead';

test ('check Undead is created', () => {
  const hero = new Undead('Name', 'Undead');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('check Undead type', () => {
    expect(() => {
    const hero = new Undead('nn', 'Undeed');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Undead min length name', () => {
  expect(() => {
    const hero = new Undead('n', 'Undead');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Undead max length name', () => {
  expect(() => {
    const hero = new Undead('nnnnnnnnnnn', 'Undead');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});
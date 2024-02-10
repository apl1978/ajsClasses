import Undead from '../undead';

test('check Undead min length name', () => {
    expect(() => {
    const hero = new Undead('n');
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Undead max length name', () => {
    expect(() => {
    const hero = new Undead('nnnnnnnnnnn');
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test ('check Undead is created', () => {
  const hero = new Undead('Name');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

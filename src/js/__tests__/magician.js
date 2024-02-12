import Magician from '../magician';

test ('check Magician is created', () => {
  const hero = new Magician('Name', 'Magician');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

test('check Magician type', () => {
    expect(() => {
    const hero = new Magician('nn', 'Magicien');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Magician min length name', () => {
  expect(() => {
    const hero = new Magician('n', 'Magician');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Magician max length name', () => {
  expect(() => {
    const hero = new Magician('nnnnnnnnnnn', 'Magician');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});
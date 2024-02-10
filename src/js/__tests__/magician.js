import Magician from '../magician';

test('check Magician min length name', () => {
    expect(() => {
    const hero = new Magician('n');
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Magician max length name', () => {
    expect(() => {
    const hero = new Magician('nnnnnnnnnnn');
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test ('check Magician is created', () => {
  const hero = new Magician('Name');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

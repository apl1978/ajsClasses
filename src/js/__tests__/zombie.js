import Zombie from '../zombie';

test ('check Zombie is created', () => {
  const hero = new Zombie('Name', 'Zombie');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

test('check Zombie type', () => {
    expect(() => {
    const hero = new Zombie('nn', 'Zoombie');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Zombie min length name', () => {
  expect(() => {
    const hero = new Zombie('n', 'Zombie');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Zombie max length name', () => {
  expect(() => {
    const hero = new Zombie('nnnnnnnnnnn', 'Zombie');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});
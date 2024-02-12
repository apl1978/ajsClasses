import Swordsman from '../swordsman';

test ('check Swordsman is created', () => {
  const hero = new Swordsman('Name', 'Swordsman');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

test('check Swordsman type', () => {
    expect(() => {
    const hero = new Swordsman('nn', 'Swordsmen');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Swordsman min length name', () => {
  expect(() => {
    const hero = new Swordsman('n', 'Swordsman');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Swordsman max length name', () => {
  expect(() => {
    const hero = new Swordsman('nnnnnnnnnnn', 'Swordsman');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});
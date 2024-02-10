import Swordsman from '../swordsman';

test('check Swordsman min length name', () => {
    expect(() => {
    const hero = new Swordsman('n');
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Swordsman max length name', () => {
    expect(() => {
    const hero = new Swordsman('nnnnnnnnnnn');
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test ('check Swordsman is created', () => {
  const hero = new Swordsman('Name');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

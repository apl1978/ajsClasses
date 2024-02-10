import Bowerman from '../bowerman';

test('check Bowerman min length name', () => {
    expect(() => {
    const hero = new Bowerman('n');
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Bowerman max length name', () => {
    expect(() => {
    const hero = new Bowerman('nnnnnnnnnnn');
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test ('check Bowerman is created', () => {
  const hero = new Bowerman('Name');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

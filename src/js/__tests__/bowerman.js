import Bowerman from '../bowerman';

test ('check Bowerman is created', () => {
  const hero = new Bowerman('Name', 'Bowman');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('check Bowerman type', () => {
    expect(() => {
    const hero = new Bowerman('nn', 'bowmen');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Bowerman min length name', () => {
  expect(() => {
    const hero = new Bowerman('n', 'Bowman');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Bowerman max length name', () => {
  expect(() => {
    const hero = new Bowerman('nnnnnnnnnnn', 'Bowman');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});
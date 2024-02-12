import Daemon from '../daemon';

test ('check Daemon is created', () => {
  const hero = new Daemon('Name', 'Daemon');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

test('check Daemon type', () => {
    expect(() => {
    const hero = new Daemon('nn', 'Deamon');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Daemon min length name', () => {
  expect(() => {
    const hero = new Daemon('n', 'Daemon');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Daemon max length name', () => {
  expect(() => {
    const hero = new Daemon('nnnnnnnnnnn', 'Daemon');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});
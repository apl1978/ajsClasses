import Daemon from '../daemon';

test('check Daemon min length name', () => {
    expect(() => {
    const hero = new Daemon('n');
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Daemon max length name', () => {
    expect(() => {
    const hero = new Daemon('nnnnnnnnnnn');
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test ('check Daemon is created', () => {
  const hero = new Daemon('Name');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

import Character from '../character';

test('check Character type', () => {
    expect(() => {
    const hero = new Character('nn', 'bowmen');
    }).toThrowError('Некорректный тип персонажа');
});

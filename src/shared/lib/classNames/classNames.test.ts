import { classNames } from './classNames';

describe('classNames', () => {
    test('test', () => {
        expect(true).toBe(true);
    });

    test('main class', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional class', () => {
        const expected = 'class second third';
        expect(classNames('class', {}, ['second', 'third'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'class second third hovered selected';
        expect(
            classNames('class', { hovered: true, selected: true }, [
                'second',
                'third',
            ]),
        ).toBe(expected);
    });

    test('with mod false', () => {
        const expected = 'class second third hovered';
        expect(
            classNames('class', { hovered: true, selected: false }, [
                'second',
                'third',
            ]),
        ).toBe(expected);
    });

    test('with mod undefined', () => {
        const expected = 'class second third hovered';
        expect(
            classNames('class', { hovered: true, selected: undefined }, [
                'second',
                'third',
            ]),
        ).toBe(expected);
    });
});

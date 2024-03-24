const { Circle, Triangle, Square } = require('./shapes');

describe('SVG Generator', () => {
    test('Circle SVG generation', () => {
        const circle = new Circle('#FF0000', '#000000', 'ABC');
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="#FF0000" /><text x="150" y="150" font-size="30" fill="#000000" text-anchor="middle" dominant-baseline="central">ABC</text></svg>`;
        expect(circle.render()).toBe(expectedSVG);
    });

    test('Triangle SVG generation', () => {
        const triangle = new Triangle('#00FF00', '#FFFFFF', 'DEF');
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 50,180 250,180" fill="#00FF00" /><text x="150" y="150" font-size="30" fill="#FFFFFF" text-anchor="middle" dominant-baseline="central">DEF</text></svg>`;
        expect(triangle.render()).toBe(expectedSVG);
    });

    test('Square SVG generation', () => {
        const square = new Square('#0000FF', '#FFFFFF', 'GHI');
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" fill="#0000FF" /><text x="150" y="150" font-size="30" fill="#FFFFFF" text-anchor="middle" dominant-baseline="central">GHI</text></svg>`;
        expect(square.render()).toBe(expectedSVG);
    });
});
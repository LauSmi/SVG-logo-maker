const { Square, Triangle, Circle } = require('./shapes');

describe('Circle', () => {
    test("correctly renders circle", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle = new Circle();
        circle.setColor("green");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
  });
  describe('Square', () => {
    test("correctly renders square", () => {
        const expectedSvg =
          '<rect x="90" y="40" width="120" height="120" fill="blue" />';
        const square = new Square();
        square.setColor("blue");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
      });
    });
  describe('Triangle', () => {
    test("correctly renders triangle", () => {
        const expectedSvg =
          '<polygon points="150, 18 244, 182 56, 182" fill="red" />';
        const triangle = new Triangle();
        triangle.setColor("red");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
      });
    });
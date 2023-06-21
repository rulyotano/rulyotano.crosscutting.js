import Point from '../Point';

describe('src > Point', () => {
  beforeEach(() => {});

  afterEach(() => {});

  const x = 3.4;
  const y = 9.3;

  test('Constructor should initialize x and y', () => {
    const point = new Point(x, y);
    expect(point.x).toBe(x);
    expect(point.y).toBe(y);
  });

  describe('Equal method', () => {
    [
      [0, 1, 0, 1, true],
      [2, 1, 0, 1, false],
      [0, 1, 2, 1, false],
      [0, 2, 0, 1, false],
      [0, 1, 0, 2, false],
      [0.000000001, 1.000000001, 0, 1, true],
    ].forEach(testCase => {
      test(`When x and y both are equals, points should be true. False other wise. p1(${testCase[0]}, ${testCase[1]}), p2(${testCase[2]}, ${testCase[3]}) => expected: ${testCase[4]}`, () => {
        const p1 = new Point(testCase[0] as number, testCase[1] as number);
        const p2 = new Point(testCase[2] as number, testCase[3] as number);
        const expected = testCase[4] as boolean;
        expect(p1.equals(p2)).toBe(expected);
      });
    });
  });

  describe('getHashCode', () => {
    test('Two points with same value should get same getHashCode', () => {
      const p1 = new Point(x, y);
      const p2 = new Point(x, y);
      expect(p1.getHashCode()).toBe(p2.getHashCode());
    });

    test('Two points with different values should get different getHashCodes', () => {
      const p1 = new Point(x, y);
      const p2 = new Point(x, y + 1);
      expect(p1.getHashCode()).not.toBe(p2.getHashCode());
    });
  });
});

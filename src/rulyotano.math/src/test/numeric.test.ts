import Numeric from '../Numeric';

// jest.mock("../defaultMenuItems");

describe('Numeric', () => {
  beforeEach(() => {});

  afterEach(() => {});

  describe('Float equal', () => {
    [
      [0.345, 0.34500000001, true],
      [0.345, 0.347, false],
      [1.345, 1.3, false],
      [0.3, 0.3, true],
      [Number.MAX_VALUE, Number.MAX_VALUE, true],
      [Number.MIN_VALUE, Number.MIN_VALUE, true],
      [Number.NaN, Number.NaN, true],
    ].forEach(testCase => {
      test(`When less than epsilon Should return true. n1=${testCase[0]}, n2=${testCase[1]}, expected=${testCase[2]}`, () => {
        const n1 = testCase[0] as number;
        const n2 = testCase[1] as number;
        const expected = testCase[2] as boolean;
        expect(Numeric.numericEqual(n1, n2)).toBe(expected);
        expect(Numeric.numericEqual(n1, n2, Numeric.Epsilon)).toBe(expected);
      });
    });
  });

  describe('Middle', () => {
    [
      [0, 1, 0.5],
      [3, 9, 6],
      [2.5, 6.5, 4.5],
      [-7, 9, 1],
    ].forEach(testCase => {
      test(`Should return middle value. value1=${testCase[0]}, value2=${testCase[1]}, expected=${testCase[2]}`, () => {
        const n1 = testCase[0];
        const n2 = testCase[1];
        const expected = testCase[2];
        const result = Numeric.middle(n1, n2);
        expect(Numeric.numericEqual(expected, result)).toBeTruthy();
      });
    });
  });
});

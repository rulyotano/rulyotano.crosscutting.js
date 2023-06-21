import {Numeric} from 'rulyotano.math';
import Helpers from '../Helpers';
import Point from '../Point';

describe('src > helpers', () => {
  beforeEach(() => {});

  afterEach(() => {});

  describe('radianToDegree()', () => {
    [3, 1, 0.6, 0.2].forEach(testCase => {
      test(`Should convert according to formula (180*radian)/PI. Current ${testCase}`, () => {
        const expected = (testCase * 180) / Math.PI;
        expect(
          Numeric.numericEqual(expected, Helpers.radianToDegree(testCase))
        ).toBeTruthy();
      });
    });
  });

  describe('degreeToRadian()', () => {
    [180, 90, 90, 30, 0.5, 330].forEach(testCase => {
      test(`Should convert according to formula (degree*PI)/180. Current ${testCase}`, () => {
        const expected = (testCase * Math.PI) / 180;
        expect(
          Numeric.numericEqual(expected, Helpers.degreeToRadian(testCase))
        ).toBeTruthy();
      });
    });
  });

  describe('euclideanDistance()', () => {
    [
      [0, 0, 3, 3],
      [1, 7, 1, 7],
      [1, 0.9, 20, 7],
      [0, 0, 10, 0],
      [-10, 5, 5, 8],
      [3, 0.54544, 1, 9],
    ].forEach(testCase => {
      test(`Should return according to euclidean distance formula Sqrt(dx^2 + dy^2). p1=(${testCase[0]},${testCase[1]}) p2=(${testCase[2]},${testCase[3]})`, () => {
        const p1 = new Point(testCase[0], testCase[1]);
        const p2 = new Point(testCase[2], testCase[3]);

        const expected = Math.sqrt(
          (p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y)
        );

        expect(
          Numeric.numericEqual(
            expected,
            Helpers.euclideanDistance(p1.x, p1.y, p2.x, p2.y)
          )
        ).toBeTruthy();
        expect(
          Numeric.numericEqual(
            expected,
            Helpers.euclideanDistanceBetweenPoints(p1, p2)
          )
        ).toBeTruthy();
      });
    });
  });

  describe('bestPlaceToInsertPoint', () => {
    test('When points are empty should insert at the beginning', () => {
      const newPoint = new Point(3, 4);
      const list: Array<Point> = [];

      expect(Helpers.bestPlaceToInsertPoint(newPoint, list)).toBe(0);
    });

    test('When only one point should insert at the end', () => {
      const newPoint = new Point(3, 4);
      const list: Array<Point> = [new Point(10, 5)];

      expect(Helpers.bestPlaceToInsertPoint(newPoint, list)).toBe(1);
    });

    test('When 2 points and is near to the first one should insert at the beginning', () => {
      const newPoint = new Point(3, 0);
      const list: Array<Point> = [new Point(10, 0), new Point(50, 0)];

      expect(Helpers.bestPlaceToInsertPoint(newPoint, list)).toBe(0);
    });

    test('When 2 points and is near to the last one should insert at the end', () => {
      const newPoint = new Point(70, 0);
      const list: Array<Point> = [new Point(40, 0), new Point(50, 0)];

      expect(Helpers.bestPlaceToInsertPoint(newPoint, list)).toBe(list.length);
    });

    test('When 4 points should insert in the index with lower distance', () => {
      const expectedIndex = 3;
      const newPoint = new Point(45, 0);
      const list: Array<Point> = [
        new Point(38, 0),
        new Point(39, 0),
        new Point(40, 0),
        new Point(50, 0),
      ];

      expect(Helpers.bestPlaceToInsertPoint(newPoint, list)).toBe(
        expectedIndex
      );
    });
  });
});

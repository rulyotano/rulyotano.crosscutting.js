import {Point} from 'rulyotano.math.geometry';
import BezierCurveSegment from '../BezierCurveSegment';

describe('src > BezierCurveSegment', () => {
  const points = [
    new Point(12, 33),
    new Point(1.43111111, 2),
    new Point(4, 2),
    new Point(5, 30),
  ];
  beforeEach(() => {});

  afterEach(() => {});

  test('Constructor should initialize points correctly. In order: start -> first ctrl -> second ctrl -> end', () => {
    const result = new BezierCurveSegment(
      points[0],
      points[1],
      points[2],
      points[3]
    );
    expect(points[0].equals(result.start)).toBeTruthy();
    expect(points[1].equals(result.firstControl)).toBeTruthy();
    expect(points[2].equals(result.secondControl)).toBeTruthy();
    expect(points[3].equals(result.end)).toBeTruthy();
  });

  describe('equals()', () => {
    test('when all points are equals should return true', () => {
      const curve1 = new BezierCurveSegment(
        points[0],
        points[1],
        points[2],
        points[3]
      );
      const curve2 = new BezierCurveSegment(
        points[0],
        points[1],
        points[2],
        points[3]
      );

      expect(curve1.equals(curve2)).toBeTruthy();
    });

    test('when start points are different should return false', () => {
      const curve1 = new BezierCurveSegment(
        points[0],
        points[1],
        points[2],
        points[3]
      );
      const curve2 = new BezierCurveSegment(
        new Point(0, 0),
        points[1],
        points[2],
        points[3]
      );

      expect(curve1.equals(curve2)).toBeFalsy();
    });

    test('when first ctrl points are different should return false', () => {
      const curve1 = new BezierCurveSegment(
        points[0],
        points[1],
        points[2],
        points[3]
      );
      const curve2 = new BezierCurveSegment(
        points[0],
        new Point(0, 0),
        points[2],
        points[3]
      );

      expect(curve1.equals(curve2)).toBeFalsy();
    });

    test('when second ctrl points are different should return false', () => {
      const curve1 = new BezierCurveSegment(
        points[0],
        points[1],
        points[2],
        points[3]
      );
      const curve2 = new BezierCurveSegment(
        points[0],
        points[1],
        new Point(0, 0),
        points[3]
      );

      expect(curve1.equals(curve2)).toBeFalsy();
    });

    test('when end points are different should return false', () => {
      const curve1 = new BezierCurveSegment(
        points[0],
        points[1],
        points[2],
        points[3]
      );
      const curve2 = new BezierCurveSegment(
        points[0],
        points[1],
        points[2],
        new Point(0, 0)
      );

      expect(curve1.equals(curve2)).toBeFalsy();
    });

    test('when other curve is null should return false', () => {
      const curve = new BezierCurveSegment(
        points[0],
        points[1],
        points[2],
        points[3]
      );

      expect(curve.equals(null!)).toBeFalsy();
    });
  });
});

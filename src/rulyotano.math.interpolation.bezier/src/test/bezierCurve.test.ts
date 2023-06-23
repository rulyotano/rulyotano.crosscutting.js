import {Point} from 'rulyotano.math.geometry';
import BezierCurve, {BezierCurveSegment} from '../BezierCurve';

describe('src > BezierCurve', () => {
  const points = [
    new Point(12, 33),
    new Point(1.43111111, 2),
    new Point(4, 2),
    new Point(5, 30),
  ];
  beforeEach(() => {});

  afterEach(() => {});

  describe('BezierCurve', () => {
    test('should be initialized correctly', () => {
      const curveSegment = new BezierCurveSegment(
        points[0],
        points[1],
        points[2],
        points[3]
      );
      const curve = new BezierCurve([curveSegment]);

      expect(curve.segments).toHaveLength(1);
      expect(curve.segments[0].equals(curveSegment));
    });

    describe('toPath', () => {
      test('When empty should return empty', () => {
        expect(new BezierCurve([]).toPath()).toBe('');
      });

      test('When one item with integer values should return expected result', () => {
        const segments = [
          new BezierCurveSegment(
            new Point(1, 2),
            new Point(3, 4),
            new Point(5, 6),
            new Point(7, 8)
          ),
        ];

        expect(new BezierCurve(segments).toPath()).toBe('M1,2 C3,4 5,6 7,8');
      });

      test('When several items should concatenate segments', () => {
        const segments = [
          new BezierCurveSegment(
            new Point(1, 2),
            new Point(3, 4),
            new Point(5, 6),
            new Point(7, 8)
          ),
          new BezierCurveSegment(
            new Point(7, 8),
            new Point(9, 10),
            new Point(11, 12),
            new Point(13, 14)
          ),
        ];

        expect(new BezierCurve(segments).toPath()).toBe(
          'M1,2 C3,4 5,6 7,8 C9,10 11,12 13,14'
        );
      });

      test('When float values should round up to 3 decimal values', () => {
        const segments = [
          new BezierCurveSegment(
            new Point(1, 2.4357),
            new Point(3.15434534, 4.231),
            new Point(5.776, 6.8954244),
            new Point(7.199999, 8.111111)
          ),
        ];

        expect(new BezierCurve(segments).toPath()).toBe(
          'M1,2.436 C3.154,4.231 5.776,6.895 7.2,8.111'
        );
      });

      test('When negative values should works ok', () => {
        const segments = [
          new BezierCurveSegment(
            new Point(-1, 2.4357),
            new Point(-3.15434534, 4.231),
            new Point(5.776, -6.8954244),
            new Point(7.199999, -8.111111)
          ),
        ];

        expect(new BezierCurve(segments).toPath()).toBe(
          'M-1,2.436 C-3.154,4.231 5.776,-6.895 7.2,-8.111'
        );
      });
    });
  });

  describe('BezierCurveSegment', () => {
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
});

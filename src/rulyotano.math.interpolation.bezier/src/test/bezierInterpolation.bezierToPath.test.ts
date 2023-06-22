import BezierCurveSegment from '../BezierCurveSegment';
import BezierInterpolation from '../BezierInterpolation';
import {Point} from 'rulyotano.math.geometry';

describe('src > BezierInterpolation', () => {
  beforeEach(() => {});

  afterEach(() => {});

  describe('bezierToPath()', () => {
    test('When empty should return empty', () => {
      expect(BezierInterpolation.bezierToPath([])).toBe('');
    });

    test('When one item with integer values should return expected result', () => {
      const curve = [
        new BezierCurveSegment(
          new Point(1, 2),
          new Point(3, 4),
          new Point(5, 6),
          new Point(7, 8)
        ),
      ];

      expect(BezierInterpolation.bezierToPath(curve)).toBe('M1,2 C3,4 5,6 7,8');
    });

    test('When several items should concatenate segments', () => {
      const curve = [
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

      expect(BezierInterpolation.bezierToPath(curve)).toBe(
        'M1,2 C3,4 5,6 7,8 C9,10 11,12 13,14'
      );
    });

    test('When float values should round up to 3 decimal values', () => {
      const curve = [
        new BezierCurveSegment(
          new Point(1, 2.4357),
          new Point(3.15434534, 4.231),
          new Point(5.776, 6.8954244),
          new Point(7.199999, 8.111111)
        ),
      ];

      expect(BezierInterpolation.bezierToPath(curve)).toBe(
        'M1,2.436 C3.154,4.231 5.776,6.895 7.2,8.111'
      );
    });

    test('When negative values should works ok', () => {
      const curve = [
        new BezierCurveSegment(
          new Point(-1, 2.4357),
          new Point(-3.15434534, 4.231),
          new Point(5.776, -6.8954244),
          new Point(7.199999, -8.111111)
        ),
      ];

      expect(BezierInterpolation.bezierToPath(curve)).toBe(
        'M-1,2.436 C-3.154,4.231 5.776,-6.895 7.2,-8.111'
      );
    });
  });
});

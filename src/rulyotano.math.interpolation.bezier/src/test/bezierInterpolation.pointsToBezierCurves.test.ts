import BezierInterpolation from '../BezierInterpolation';
import testCases from './testCases';
import {Point} from 'rulyotano.math.geometry';

describe('src > BezierInterpolation', () => {
  beforeEach(() => {});

  afterEach(() => {});

  describe('pointsToBezierCurves()', () => {
    const samplePoints = [
      new Point(0, 0),
      new Point(300, -100),
      new Point(15, 66),
    ];

    test('should start and end with the same point from in the input', () => {
      const result = BezierInterpolation.pointsToBezierCurves(
        samplePoints,
        false
      );
      expect(samplePoints[0].equals(result.segments[0].start)).toBeTruthy();
      expect(
        samplePoints[samplePoints.length - 1].equals(
          result.segments[result.segments.length - 1].end
        )
      ).toBeTruthy();
    });

    test('when closed curves should end with the start point', () => {
      const result = BezierInterpolation.pointsToBezierCurves(
        samplePoints,
        true
      );
      expect(samplePoints[0].equals(result.segments[0].start)).toBeTruthy();
      expect(
        samplePoints[0].equals(result.segments[result.segments.length - 1].end)
      ).toBeTruthy();
    });

    test('when interpolate with less than 3 points should return empty list', () => {
      const result = BezierInterpolation.pointsToBezierCurves(
        samplePoints.slice(0, -1),
        false
      );
      expect(result.segments.length).toBe(0);
    });

    testCases.forEach((testCase, index) => {
      test(`Test case no. ${index + 1} should pass.`, () => {
        const result = BezierInterpolation.pointsToBezierCurves(
          testCase.inputPoints,
          testCase.isClosed,
          testCase.smooth
        );

        expect(result.segments.length).toBe(testCase.expectedOutput.length);
        expect(
          result.segments.every((curve, index) =>
            curve.equals(testCase.expectedOutput[index])
          )
        ).toBeTruthy();
      });
    });
  });
});

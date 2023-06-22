import {BezierInterpolation, BezierCurveSegment} from '../index';

describe('default exports', () => {
  beforeEach(() => {});

  afterEach(() => {});

  test('Should export BezierInterpolation', () => {
    expect(BezierInterpolation).toBeTruthy();
    expect(BezierCurveSegment).toBeTruthy();
  });
});

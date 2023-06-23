import {BezierInterpolation, Point} from '../index';

describe('default exports', () => {
  beforeEach(() => {});

  afterEach(() => {});

  test('Should export BezierInterpolation', () => {
    expect(BezierInterpolation).toBeTruthy();
  });

  test('Should export Point', () => {
    expect(Point).toBeTruthy();
  });
});

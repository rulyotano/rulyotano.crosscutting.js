import {Point, Helpers} from '../index';

// jest.mock("../defaultMenuItems");

describe('default exports', () => {
  beforeEach(() => {});

  afterEach(() => {});

  test('Should export Point', () => {
    const result = new Point(1, 1);
    expect(result.x).toBe(1);
    expect(result.y).toBe(1);
  });

  test('Should export Helpers', () => {
    expect(Helpers.euclideanDistance(0, 0, 0, 0)).toBe(0);
  });
});

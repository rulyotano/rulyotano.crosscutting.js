import {Numeric} from '../index';

// jest.mock("../defaultMenuItems");

describe('default exports', () => {
  beforeEach(() => {});

  afterEach(() => {});

  test('Should export Numeric', () => {
    expect(Numeric.middle(1, 3)).toBe(2);
  });
});

import {doSomeStuff} from '../src';

// jest.mock("../defaultMenuItems");

describe('... > sample', () => {
  beforeEach(() => {});

  afterEach(() => {});

  test('Fake test', () => {
    doSomeStuff('', '', []);
    expect(1).toBeTruthy(); // change
  });
});

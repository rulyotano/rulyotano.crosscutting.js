import {Point} from 'rulyotano.math.geometry';
import {BezierCurveSegment} from '../BezierCurve';

export type TestCaseBezier = {
  isClosed: boolean;
  smooth?: number;
  inputPoints: Array<Point>;
  expectedOutput: Array<BezierCurveSegment>;
};

const points = {
  case1: [
    new Point(173, 42),
    new Point(5, 1),
    new Point(64, 84),
    new Point(210, 64),
    new Point(191, 90),
    new Point(241, 206),
    new Point(31, 138),
    new Point(338, 112),
    new Point(310, 33),
  ],
  case2: [new Point(173, 42), new Point(5, 1), new Point(64, 84)],
};

const testCases: Array<TestCaseBezier> = [
  {
    isClosed: false,
    inputPoints: points.case1,
    expectedOutput: [
      new BezierCurveSegment(
        points.case1[0],
        points.case1[0],
        new Point(32.44093, -9.57356),
        points.case1[1]
      ),
      new BezierCurveSegment(
        points.case1[1],
        new Point(-11.15906, 7.22643),
        new Point(30.49103, 73.70212),
        points.case1[2]
      ),
      new BezierCurveSegment(
        points.case1[2],
        new Point(112.49103, 98.90212),
        new Point(168.31022, 62.0304),
        points.case1[3]
      ),
      new BezierCurveSegment(
        points.case1[3],
        new Point(219.11022, 64.4304),
        new Point(188.48099, 78.46135),
        points.case1[4]
      ),
      new BezierCurveSegment(
        points.case1[4],
        new Point(200.88099, 135.26135),
        new Point(264.29416, 199.01174),
        points.case1[5]
      ),
      new BezierCurveSegment(
        points.case1[5],
        new Point(200.29416, 218.21174),
        new Point(14.80489, 153.69422),
        points.case1[6]
      ),
      new BezierCurveSegment(
        points.case1[6],
        new Point(53.60489, 116.09422),
        new Point(250.26691, 145.01782),
        points.case1[7]
      ),
      new BezierCurveSegment(
        points.case1[7],
        new Point(361.86691, 103.01782),
        points.case1[8],
        points.case1[8]
      ),
    ],
  },
  {
    isClosed: true,
    inputPoints: points.case2,
    expectedOutput: [
      new BezierCurveSegment(
        points.case2[0],
        new Point(158.91451, 22.18482),
        new Point(32.44093, -9.57356),
        points.case2[1]
      ),
      new BezierCurveSegment(
        points.case2[1],
        new Point(-11.15906, 7.22643),
        new Point(32.70182, 76.36175),
        points.case2[2]
      ),
      new BezierCurveSegment(
        points.case2[2],
        new Point(99.90182, 92.76175),
        new Point(182.51451, 55.38482),
        points.case2[0]
      ),
    ],
  },
  {
    isClosed: true,
    inputPoints: points.case2,
    smooth: 0.3,
    expectedOutput: [
      new BezierCurveSegment(
        points.case2[0],
        new Point(167.71794, 34.5693),
        new Point(15.29034, -2.96508),
        points.case2[1]
      ),
      new BezierCurveSegment(
        points.case2[1],
        new Point(-1.05965, 3.33491),
        new Point(52.26318, 81.13565),
        points.case2[2]
      ),
      new BezierCurveSegment(
        points.case2[2],
        new Point(77.46318, 87.28565),
        new Point(176.56794, 47.0193),
        points.case2[0]
      ),
    ],
  },
];

export default testCases;

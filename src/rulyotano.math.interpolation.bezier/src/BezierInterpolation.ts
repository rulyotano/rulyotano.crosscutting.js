import {Point} from 'rulyotano.math.geometry';
import BezierCurve from './BezierCurve';
import pointsToBezierCurves from './helpers/pointsToBezierCurves';

export default class BezierInterpolation {
  /**
   * Interpolate a list of points to a list of ordered Bezier curve segments
   * @param {Array<Point>} workPoints Points to interpolate
   * @param {boolean} isClosedCurve True if is a closed curve
   * @param {number} smoothValue Optional value for making the curve smoother or not
   * @returns {BezierCurve} The bezier curve
   */
  public static pointsToBezierCurves(
    points: Array<Point>,
    isClosedCurve: boolean,
    smoothValue = 0.8
  ): BezierCurve {
    return new BezierCurve(
      pointsToBezierCurves(points, isClosedCurve, smoothValue)
    );
  }
}

import {Point} from 'rulyotano.math.geometry';
import BezierCurveSegment from './BezierCurveSegment';
import pointsToBezierCurves from './helpers/pointsToBezierCurves';
import bezierToPath from './helpers/bezierToPath';

export default class BezierInterpolation {
  /**
   * Interpolate a list of points to a list of ordered Bezier curve segments
   * @param {Array<Point>} workPoints Points to interpolate
   * @param {boolean} isClosedCurve True if is a closed curve
   * @param {number} smoothValue Optional value for making the curve smoother or not
   * @returns {Array<BezierCurveSegment>} The bezier curve segments
   */
  public static pointsToBezierCurves(
    points: Array<Point>,
    isClosedCurve: boolean,
    smoothValue = 0.8
  ): Array<BezierCurveSegment> {
    return pointsToBezierCurves(points, isClosedCurve, smoothValue);
  }

  /**
   * Convert a bezier curve to path. Which can be used in svg, html or xaml formats.
   * @param {Array<BezierCurveSegment>} bezierPaths Bezier curve segments
   * @returns {string} path or xpath
   */
  public static bezierToPath(bezierPaths: Array<BezierCurveSegment>): string {
    return bezierToPath(bezierPaths);
  }
}

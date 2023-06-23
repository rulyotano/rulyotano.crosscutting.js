import {Point} from 'rulyotano.math.geometry';
import bezierToPath from './helpers/bezierToPath';

export default class BezierCurve {
  segments: Array<BezierCurveSegment>;

  constructor(segments: Array<BezierCurveSegment>) {
    this.segments = segments;
  }

  /**
   * Convert this bezier curve into a path string. Which can be used in svg, html or xaml formats.
   * @returns {string} path or xpath
   */
  toPath() {
    return bezierToPath(this.segments);
  }
}

export class BezierCurveSegment {
  start: Point;
  firstControl: Point;
  secondControl: Point;
  end: Point;

  constructor(
    start: Point,
    firstControl: Point,
    secondControl: Point,
    end: Point
  ) {
    this.start = start;
    this.end = end;
    this.firstControl = firstControl;
    this.secondControl = secondControl;
  }

  public equals(otherCurve: BezierCurveSegment): boolean {
    if (!otherCurve) return false;

    return (
      otherCurve.start.equals(this.start) &&
      otherCurve.firstControl.equals(this.firstControl) &&
      otherCurve.secondControl.equals(this.secondControl) &&
      otherCurve.end.equals(this.end)
    );
  }
}

import {Point} from 'rulyotano.math.geometry';

export default class BezierCurveSegment {
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

import {Helpers, Point} from 'rulyotano.math.geometry';
import {BezierCurveSegment} from '../BezierCurve';
import {Numeric} from 'rulyotano.math';

export default function pointsToBezierCurves(
  points: Array<Point>,
  isClosedCurve: boolean,
  smoothValue = 0.8
): Array<BezierCurveSegment> {
  const workPoints = [...points];
  if (workPoints.length < 3) return [];

  const result: Array<BezierCurveSegment> = [];

  if (isClosedCurve) workPoints.push(workPoints[0]);

  //iterate for points but the last one
  for (let i = 0; i < workPoints.length - 1; i++) {
    // Assume we need to calculate the control
    // points between (x1,y1) and (x2,y2).
    // Then x0,y0 - the previous vertex,
    //      x3,y3 - the next one.
    const x1 = workPoints[i].x;
    const y1 = workPoints[i].y;

    const x2 = workPoints[i + 1].x;
    const y2 = workPoints[i + 1].y;

    let x0: number;
    let y0: number;

    if (i === 0) {
      //if is first point
      if (isClosedCurve) {
        const previousPoint = workPoints[workPoints.length - 2]; //last Point, but one (due inserted the first at the end)
        x0 = previousPoint.x;
        y0 = previousPoint.y;
      } //Get some previous point
      else {
        const previousPoint = workPoints[i]; //if is the first point the previous one will be it self
        x0 = previousPoint.x;
        y0 = previousPoint.y;
      }
    } else {
      x0 = workPoints[i - 1].x; //Previous Point
      y0 = workPoints[i - 1].y;
    }

    let x3: number, y3: number;

    if (i === workPoints.length - 2) {
      //if is the last point
      if (isClosedCurve) {
        const nextPoint = workPoints[1]; //second Point(due inserted the first at the end)
        x3 = nextPoint.x;
        y3 = nextPoint.y;
      } //Get some next point
      else {
        const nextPoint = workPoints[i + 1]; //if is the last point the next point will be the last one
        x3 = nextPoint.x;
        y3 = nextPoint.y;
      }
    } else {
      x3 = workPoints[i + 2].x; //Next Point
      y3 = workPoints[i + 2].y;
    }

    const xc1 = Numeric.middle(x0, x1);
    const yc1 = Numeric.middle(y0, y1);
    const xc2 = Numeric.middle(x1, x2);
    const yc2 = Numeric.middle(y1, y2);
    const xc3 = Numeric.middle(x2, x3);
    const yc3 = Numeric.middle(y2, y3);

    const len1 = Helpers.euclideanDistance(x0, y0, x1, y1);
    const len2 = Helpers.euclideanDistance(x1, y1, x2, y2);
    const len3 = Helpers.euclideanDistance(x2, y2, x3, y3);

    const k1 = len1 / (len1 + len2);
    const k2 = len2 / (len2 + len3);

    const xm1 = xc1 + (xc2 - xc1) * k1;
    const ym1 = yc1 + (yc2 - yc1) * k1;

    const xm2 = xc2 + (xc3 - xc2) * k2;
    const ym2 = yc2 + (yc3 - yc2) * k2;

    // Resulting control points. Here smooth_value is mentioned
    // above coefficient K whose value should be in range [0...1].
    const ctrl1X = xm1 + (xc2 - xm1) * smoothValue + x1 - xm1;
    const ctrl1Y = ym1 + (yc2 - ym1) * smoothValue + y1 - ym1;

    const ctrl2X = xm2 + (xc2 - xm2) * smoothValue + x2 - xm2;
    const ctrl2Y = ym2 + (yc2 - ym2) * smoothValue + y2 - ym2;
    result.push(
      new BezierCurveSegment(
        new Point(x1, y1),
        i === 0 && !isClosedCurve
          ? new Point(x1, y1)
          : new Point(ctrl1X, ctrl1Y),
        i === workPoints.length - 2 && !isClosedCurve
          ? new Point(x2, y2)
          : new Point(ctrl2X, ctrl2Y),
        new Point(x2, y2)
      )
    );
  }

  return result;
}

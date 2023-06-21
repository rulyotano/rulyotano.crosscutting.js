import Point from './Point';

export default class Helpers {
  /**
   * Convert from radians to degree
   * returns: (180*radian)/Math.PI
   */
  public static radianToDegree(radian: number) {
    return 57.29577951308232 * radian;
  }

  /**
   * Convert degree to radians
   * returns: (degree*Math.PI)/180;
   */
  public static degreeToRadian(degree: number) {
    return (degree * Math.PI) / 180;
  }

  /**
   * Euclidean distance. From points coordinates.
   */
  public static euclideanDistance(
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number {
    const xDiff = x2 - x1;
    const yDiff = y2 - y1;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  }

  /**
   * Euclidean distance. From points.
   */
  public static euclideanDistanceBetweenPoints(p1: Point, p2: Point): number {
    return Helpers.euclideanDistance(p1.x, p1.y, p2.x, p2.y);
  }

  /**
   * Find best place to insert a new point by minimizing the total length.
   * Useful for instance when want to add points to an ordered points sequence,
   * that could be interpolated then using Bezier curves.
   */
  public static bestPlaceToInsertPoint(newPoint: Point, points: Array<Point>) {
    if (points.length === 0) return 0;
    if (points.length === 1) return 1;

    let bestIndex = 0;
    let bestDistance = Helpers.euclideanDistanceBetweenPoints(
      newPoint,
      points[0]
    );

    for (let i = 1; i < points.length; i++) {
      const previousPoint = points[i - 1];
      const currentPoint = points[i];
      const oldDistance = Helpers.euclideanDistanceBetweenPoints(
        previousPoint,
        currentPoint
      );
      const distance1 = Helpers.euclideanDistanceBetweenPoints(
        previousPoint,
        newPoint
      );
      const distance2 = Helpers.euclideanDistanceBetweenPoints(
        newPoint,
        currentPoint
      );
      const distanceDifference = distance1 + distance2 - oldDistance;
      if (distanceDifference >= bestDistance) continue;
      bestDistance = distanceDifference;
      bestIndex = i;
    }

    const lastDistance = Helpers.euclideanDistanceBetweenPoints(
      points[points.length - 1],
      newPoint
    );

    if (lastDistance < bestDistance) {
      bestIndex = points.length;
    }

    return bestIndex;
  }
}

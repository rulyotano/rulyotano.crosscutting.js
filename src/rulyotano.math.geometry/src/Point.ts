import {Numeric} from 'rulyotano.math';

export default class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  equals(otherPoint: Point): boolean {
    return (
      Numeric.numericEqual(this.x, otherPoint.x) &&
      Numeric.numericEqual(this.y, otherPoint.y)
    );
  }

  getHashCode(): number {
    return (this.x << 10) + this.y;
  }
}

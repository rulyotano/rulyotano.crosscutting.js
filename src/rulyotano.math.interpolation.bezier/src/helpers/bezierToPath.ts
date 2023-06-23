import {BezierCurveSegment} from '../BezierCurve';

export default function bezierToPath(
  bezierPaths: Array<BezierCurveSegment>
): string {
  const builder: Array<string> = [];
  const round = (n: number) =>
    n.toLocaleString('en-us', {
      maximumFractionDigits: 3,
    });

  if (bezierPaths.length > 0) {
    const head = bezierPaths[0];
    builder.push(`M${round(head.start.x)},${round(head.start.y)}`);

    bezierPaths.forEach(path => {
      builder.push(
        ` C${round(path.firstControl.x)},${round(path.firstControl.y)} ${round(
          path.secondControl.x
        )},${round(path.secondControl.y)} ${round(path.end.x)},${round(
          path.end.y
        )}`
      );
    });
  }

  return builder.join('');
}

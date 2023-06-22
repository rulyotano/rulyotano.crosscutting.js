<a href="https://www.npmjs.com/package/rulyotano.math.interpolation.bezier"><img src="https://img.shields.io/npm/v/rulyotano.math.interpolation.bezier?logo=npm"/></a>
<a href="https://github.com/rulyotano/rulyotano.crosscutting.js/tree/main/src/rulyotano.math.interpolation.bezier"><img src="https://img.shields.io/badge/github-2088FF?logo=github"/></a>
<a href="https://github.com/rulyotano/rulyotano.crosscutting.js/actions/workflows/rulyotano.math.interpolation.bezier-npm-publish.yml"><img src="https://img.shields.io/github/actions/workflow/status/rulyotano/rulyotano.crosscutting.js/rulyotano.math.interpolation.bezier-npm-publish.yml?logo=githubactions"/></a>

# rulyotano.math.interpolation.bezier

Interpolation by using Bezier Curves

## Bezier Curves

This library can be used as a nuget package. 

Install the npm package [rulyotarulyotano.math.interpolation.bezier](https://www.npmjs.com/package/rulyotano.math.interpolation.bezier) like this:

```yarn
yarn add rulyotano.math.interpolation.bezier
```
OR
```npm
npm install rulyotano.math.interpolation.bezier
```

Then it can be used like this:

```ts
  import {BezierInterpolation} from "rulyotano.math.interpolation.bezier"

  const result = BezierInterpolation.pointsToBezierCurves(points, isClosedCurve, smoothValue);
```

The result is a list of `Bezier Curve Segments`. A Bezier curve segment is represented with an origin and destination points beside two control points. 

A more detailed usage example can be found at this wpf sample: [rulyotano/wpf-bezier-interpolation](https://github.com/rulyotano/wpf-bezier-interpolation)

### References about this Bezier Curves Interpolation Algorithm

- See this article: [Interpolate 2D points, using Bezier curves in WPF](http://www.codeproject.com/Articles/769055/Interpolate-2D-points-usign-Bezier-curves-in-WPF)

### Converting to Bezier Interpolation results to svg path

You can convert the result of the `pointsToBezierCurves` by using an extension method named `bezierToPath`:

``` ts
  const curves = BezierInterpolation.pointsToBezierCurves(points, false);
  const path = BezierInterpolation.bezierToPath(curves);
```

This will generate a path string like this, that can be used in `xaml` or `html`:

```svg
M173,42 C173,42 32.441,-9.574 5,1 C-11.159,7.226 30.491,73.702 64,84 C112.491,98.902 168.31,62.03 210,64 C219.11,64.43 188.481,78.461 191,90 C200.881,135.261 264.294,199.012 241,206 C200.294,218.212 14.805,153.694 31,138 C53.605,116.094 250.267,145.018 338,112 C361.867,103.018 310,33 310,33
```

<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Beta

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Beta distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-beta-ctor
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var Beta = require( '@stdlib/stats-base-dists-beta-ctor' );
```

#### Beta( \[alpha, beta] )

Returns a [beta][beta-distribution] distribution object.

```javascript
var beta = new Beta();

var mu = beta.mean;
// returns 0.5
```

By default, `alpha = 1.0` and `beta = 1.0`. To create a distribution having a different `alpha` (first shape parameter) and `beta` (second shape parameter), provide the corresponding arguments.

```javascript
var beta = new Beta( 2.0, 4.0 );

var mu = beta.mean;
// returns ~0.333
```

* * *

## beta

A [beta][beta-distribution] distribution object has the following properties and methods...

### Writable Properties

#### beta.alpha

First shape parameter of the distribution. `alpha` **must** be a positive number.

```javascript
var beta = new Beta();

var alpha = beta.alpha;
// returns 1.0

beta.alpha = 3.0;

alpha = beta.alpha;
// returns 3.0
```

#### beta.beta

Second shape parameter of the distribution. `beta` **must** be a positive number.

```javascript
var beta = new Beta( 2.0, 4.0 );

var b = beta.beta;
// returns 4.0

beta.beta = 3.0;

b = beta.beta;
// returns 3.0
```

* * *

### Computed Properties

#### Beta.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var beta = new Beta( 4.0, 12.0 );

var entropy = beta.entropy;
// returns ~-0.869
```

#### Beta.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var beta = new Beta( 4.0, 12.0 );

var kurtosis = beta.kurtosis;
// returns ~0.082
```

#### Beta.prototype.mean

Returns the [expected value][expected-value].

```javascript
var beta = new Beta( 4.0, 12.0 );

var mu = beta.mean;
// returns 0.25
```

#### Beta.prototype.median

Returns the [median][median].

```javascript
var beta = new Beta( 4.0, 12.0 );

var median = beta.median;
// returns ~0.239
```

#### Beta.prototype.mode

Returns the [mode][mode].

```javascript
var beta = new Beta( 4.0, 12.0 );

var mode = beta.mode;
// returns ~0.214
```

#### Beta.prototype.skewness

Returns the [skewness][skewness].

```javascript
var beta = new Beta( 4.0, 12.0 );

var skewness = beta.skewness;
// returns ~0.529
```

#### Beta.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var beta = new Beta( 4.0, 12.0 );

var s = beta.stdev;
// returns ~0.105
```

#### Beta.prototype.variance

Returns the [variance][variance].

```javascript
var beta = new Beta( 4.0, 12.0 );

var s2 = beta.variance;
// returns ~0.011
```

* * *

### Methods

#### Beta.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.cdf( 0.5 );
// returns ~0.813
```

#### Beta.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.logcdf( 0.5 );
// returns ~-0.208
```

#### Beta.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.logpdf( 0.8 );
// returns ~-2.0557
```

#### Beta.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.mgf( 0.5 );
// returns ~1.186
```

#### Beta.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.pdf( 0.8 );
// returns ~0.128
```

#### Beta.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var beta = new Beta( 2.0, 4.0 );

var y = beta.quantile( 0.5 );
// returns ~0.314

y = beta.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Beta = require( '@stdlib/stats-base-dists-beta-ctor' );

var beta = new Beta( 2.0, 4.0 );

var mu = beta.mean;
// returns ~0.333

var median = beta.median;
// returns ~0.314

var s2 = beta.variance;
// returns ~0.032

var y = beta.cdf( 0.8 );
// returns ~0.993
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-beta-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-beta-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-beta-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-beta-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-beta-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-beta-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-beta-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-beta-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-beta-ctor/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-beta-ctor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-beta-ctor/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-beta-ctor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-beta-ctor/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-beta-ctor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-beta-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-beta-ctor/main/LICENSE

[beta-distribution]: https://en.wikipedia.org/wiki/Beta_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->

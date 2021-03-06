/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-beta-quantile' );
var logcdf = require( '@stdlib/stats-base-dists-beta-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-beta-logpdf' );
var cdf = require( '@stdlib/stats-base-dists-beta-cdf' );
var mgf = require( '@stdlib/stats-base-dists-beta-mgf' );
var pdf = require( '@stdlib/stats-base-dists-beta-pdf' );
var kurtosis = require( '@stdlib/stats-base-dists-beta-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-beta-skewness' );
var stdev = require( '@stdlib/stats-base-dists-beta-stdev' );
var variance = require( '@stdlib/stats-base-dists-beta-variance' );
var entropy = require( '@stdlib/stats-base-dists-beta-entropy' );
var median = require( '@stdlib/stats-base-dists-beta-median' );
var mode = require( '@stdlib/stats-base-dists-beta-mode' );
var mean = require( '@stdlib/stats-base-dists-beta-mean' );
var Beta = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Beta, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `alpha` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Beta( value, 2.0 );
		};
	}
});

tape( 'the function throws an error if provided a `beta` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Beta( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `alpha` and `beta`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Beta( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var beta = new Beta();
	t.strictEqual( beta instanceof Beta, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var beta = new Beta( 2.0, 4.0 );
	t.strictEqual( beta instanceof Beta, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var beta = Beta();
	t.strictEqual( beta instanceof Beta, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	beta = Beta( 2.0, 4.0 );
	t.strictEqual( beta instanceof Beta, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `alpha`', function test( t ) {
	var beta;

	beta = new Beta( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( beta, 'alpha' ), true, 'has property' );
	t.strictEqual( beta.alpha, 2.0, 'returns expected value' );

	beta.alpha = 3.0;
	t.strictEqual( beta.alpha, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `alpha` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var beta = new Beta();
			beta.alpha = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `beta`', function test( t ) {
	var beta;

	beta = new Beta( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( beta, 'beta' ), true, 'has property' );
	t.strictEqual( beta.beta, 4.0, 'returns expected value' );

	beta.beta = 3.0;
	t.strictEqual( beta.beta, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `beta` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var beta = new Beta();
			beta.beta = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var beta;

	t.strictEqual( hasOwnProp( Beta.prototype, 'entropy' ), true, 'has property' );

	beta = new Beta();
	t.strictEqual( beta.entropy, entropy( 1.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var beta;

	t.strictEqual( hasOwnProp( Beta.prototype, 'kurtosis' ), true, 'has property' );

	beta = new Beta( 2.0, 4.0 );
	t.strictEqual( beta.kurtosis, kurtosis( 2.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var beta;

	t.strictEqual( hasOwnProp( Beta.prototype, 'mean' ), true, 'has property' );

	beta = new Beta();
	t.strictEqual( beta.mean, mean( 1.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var beta;

	t.strictEqual( hasOwnProp( Beta.prototype, 'median' ), true, 'has property' );

	beta = new Beta( 5.0, 2.0 );
	t.strictEqual( beta.median, median( 5.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var beta;

	t.strictEqual( hasOwnProp( Beta.prototype, 'mode' ), true, 'has property' );

	beta = new Beta( 2.0, 3.0 );
	t.strictEqual( beta.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var beta;

	t.strictEqual( hasOwnProp( Beta.prototype, 'skewness' ), true, 'has property' );

	beta = new Beta( 0.5, 0.5 );
	t.strictEqual( beta.skewness, skewness( 0.5, 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var beta;

	t.strictEqual( hasOwnProp( Beta.prototype, 'stdev' ), true, 'has property' );

	beta = new Beta( 0.5, 0.5 );
	t.strictEqual( beta.stdev, stdev( 0.5, 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var beta;

	t.strictEqual( hasOwnProp( Beta.prototype, 'variance' ), true, 'has property' );

	beta = new Beta( 3.0, 1.0 );
	t.strictEqual( beta.variance, variance( 3.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var beta;
	var y;

	t.strictEqual( hasOwnProp( Beta.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Beta.prototype.cdf ), true, 'has method' );

	beta = new Beta();
	y = beta.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (CDF)', function test( t ) {
	var beta;
	var y;

	t.strictEqual( hasOwnProp( Beta.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Beta.prototype.logcdf ), true, 'has method' );

	beta = new Beta();
	y = beta.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var beta;
	var y;

	t.strictEqual( hasOwnProp( Beta.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Beta.prototype.logpdf ), true, 'has method' );

	beta = new Beta();
	y = beta.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var beta;
	var y;

	t.strictEqual( hasOwnProp( Beta.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Beta.prototype.mgf ), true, 'has method' );

	beta = new Beta();
	y = beta.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var beta;
	var y;

	t.strictEqual( hasOwnProp( Beta.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Beta.prototype.pdf ), true, 'has method' );

	beta = new Beta();
	y = beta.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var beta;
	var y;

	t.strictEqual( hasOwnProp( Beta.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Beta.prototype.quantile ), true, 'has method' );

	beta = new Beta();
	y = beta.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

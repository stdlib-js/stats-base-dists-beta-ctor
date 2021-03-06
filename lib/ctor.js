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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var entropy = require( '@stdlib/stats-base-dists-beta-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-beta-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-beta-mean' );
var median = require( '@stdlib/stats-base-dists-beta-median' );
var mode = require( '@stdlib/stats-base-dists-beta-mode' );
var skewness = require( '@stdlib/stats-base-dists-beta-skewness' );
var stdev = require( '@stdlib/stats-base-dists-beta-stdev' );
var variance = require( '@stdlib/stats-base-dists-beta-variance' );
var cdf = require( '@stdlib/stats-base-dists-beta-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-beta-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-beta-logpdf' );
var mgf = require( '@stdlib/stats-base-dists-beta-mgf' );
var pdf = require( '@stdlib/stats-base-dists-beta-pdf' );
var quantile = require( '@stdlib/stats-base-dists-beta-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function betaCDF( x ) {
	return cdf( x, this.alpha, this.beta );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function betaLogCDF( x ) {
	return logcdf( x, this.alpha, this.beta );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function betaLogPDF( x ) {
	return logpdf( x, this.alpha, this.beta );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function betaMGF( t ) {
	return mgf( t, this.alpha, this.beta );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function betaPDF( x ) {
	return pdf( x, this.alpha, this.beta );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function betaQuantile( p ) {
	return quantile( p, this.alpha, this.beta );
}


// MAIN //

/**
* Beta distribution constructor.
*
* @constructor
* @param {PositiveNumber} [alpha=1.0] - first shape parameter
* @param {PositiveNumber} [beta=1.0] - second shape parameter
* @throws {TypeError} `alpha` must be a positive number
* @throws {TypeError} `beta` must be a positive number
* @returns {Beta} distribution instance
*
* @example
* var beta = new Beta( 1.0, 1.0 );
*
* var y = beta.cdf( 0.8 );
* // returns 0.8
*
* var mu = beta.mean;
* // returns 0.5
*/
function Beta() {
	var alpha;
	var beta;
	if ( !(this instanceof Beta) ) {
		if ( arguments.length === 0 ) {
			return new Beta();
		}
		return new Beta( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		alpha = arguments[ 0 ];
		beta = arguments[ 1 ];
		if ( !isPositive( alpha ) ) {
			throw new TypeError( format( 'invalid argument. First shape parameter must be a positive number. Value: `%s`.', alpha ) );
		}
		if ( !isPositive( beta ) ) {
			throw new TypeError( format( 'invalid argument. Second shape parameter must be a positive number. Value: `%s`.', beta ) );
		}
	} else {
		alpha = 1.0;
		beta = 1.0;
	}
	defineProperty( this, 'alpha', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return alpha;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			alpha = value;
		}
	});
	defineProperty( this, 'beta', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return beta;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			beta = value;
		}
	});
	return this;
}

/**
* Beta distribution differential entropy.
*
* @name entropy
* @memberof Beta.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var beta = new Beta( 4.0, 12.0 );
*
* var v = beta.entropy;
* // returns ~-0.869
*/
setReadOnlyAccessor( Beta.prototype, 'entropy', function get() {
	return entropy( this.alpha, this.beta );
});

/**
* Beta distribution excess kurtosis.
*
* @name kurtosis
* @memberof Beta.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var beta = new Beta( 4.0, 12.0 );
*
* var v = beta.kurtosis;
* // returns ~0.082
*/
setReadOnlyAccessor( Beta.prototype, 'kurtosis', function get() {
	return kurtosis( this.alpha, this.beta );
});

/**
* Beta distribution expected value.
*
* @name mean
* @memberof Beta.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var beta = new Beta( 4.0, 12.0 );
*
* var v = beta.mean;
* // returns 0.25
*/
setReadOnlyAccessor( Beta.prototype, 'mean', function get() {
	return mean( this.alpha, this.beta );
});

/**
* Beta distribution median.
*
* @name median
* @memberof Beta.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var beta = new Beta( 4.0, 12.0 );
*
* var v = beta.median;
* // returns ~0.239
*/
setReadOnlyAccessor( Beta.prototype, 'median', function get() {
	return median( this.alpha, this.beta );
});

/**
* Beta distribution mode.
*
* @name mode
* @memberof Beta.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var beta = new Beta( 4.0, 12.0 );
*
* var v = beta.mode;
* // returns ~0.214
*/
setReadOnlyAccessor( Beta.prototype, 'mode', function get() {
	return mode( this.alpha, this.beta );
});

/**
* Beta distribution skewness.
*
* @name skewness
* @memberof Beta.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var beta = new Beta( 4.0, 12.0 );
*
* var v = beta.skewness;
* // returns ~0.529
*/
setReadOnlyAccessor( Beta.prototype, 'skewness', function get() {
	return skewness( this.alpha, this.beta );
});

/**
* Beta distribution standard deviation.
*
* @name stdev
* @memberof Beta.prototype
* @type {number}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var beta = new Beta( 4.0, 12.0 );
*
* var v = beta.stdev;
* // returns ~0.105
*/
setReadOnlyAccessor( Beta.prototype, 'stdev', function get() {
	return stdev( this.alpha, this.beta );
});

/**
* Beta distribution variance.
*
* @name variance
* @memberof Beta.prototype
* @type {number}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var beta = new Beta( 4.0, 12.0 );
*
* var v = beta.variance;
* // returns ~0.011
*/
setReadOnlyAccessor( Beta.prototype, 'variance', function get() {
	return variance( this.alpha, this.beta );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Beta.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var beta = new Beta( 2.0, 4.0 );
*
* var v = beta.cdf( 0.5 );
* // returns ~0.813
*/
setReadOnly( Beta.prototype, 'cdf', betaCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name logcdf
* @memberof Beta.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var beta = new Beta( 2.0, 4.0 );
*
* var v = beta.logcdf( 0.5 );
* // returns ~-0.208
*/
setReadOnly( Beta.prototype, 'logcdf', betaLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Beta.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var beta = new Beta( 2.0, 4.0 );
*
* var v = beta.logpdf( 0.8 );
* // returns ~-2.0557
*/
setReadOnly( Beta.prototype, 'logpdf', betaLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Beta.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var beta = new Beta( 2.0, 4.0 );
*
* var v = beta.mgf( 0.5 );
* // returns ~1.186
*/
setReadOnly( Beta.prototype, 'mgf', betaMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Beta.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var beta = new Beta( 2.0, 4.0 );
*
* var v = beta.pdf( 0.8 );
* // returns ~0.13
*/
setReadOnly( Beta.prototype, 'pdf', betaPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Beta.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var beta = new Beta( 2.0, 4.0 );
*
* var v = beta.quantile( 0.5 );
* // returns ~0.314
*/
setReadOnly( Beta.prototype, 'quantile', betaQuantile );


// EXPORTS //

module.exports = Beta;

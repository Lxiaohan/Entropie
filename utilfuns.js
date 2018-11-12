// Returns a dict with helper functions like sinc(x).
// E.g.:
// "utilFuns": {
//     "sinc":   function(x) {...},
//     "cosinc": function(x) {...},
//     ...
// },
function getUtilFuns() {
    var utilFuns = {};

    // *** util functions *** //
    // rounds a value and keeps the given number of decimals
    utilFuns.round = function(x, decimals) {
        var scale = Math.pow(10, decimals);
        return Math.round(x * scale) / scale;
    }

    // the classic si funxction sin(x) / (x), with care taken the it returns 1 at  x=0
    utilFuns.si = function(x) {
        if (Math.abs(x) < 1E-15)
            return 1.0;
        else
            return Math.sin(x)/(x);
    }
    // the classic sinc funxction sin(pi x) / (pi x), with care taken the it returns 1 at x=0
    utilFuns.sinc = function(x) {
        return utilFuns.si(Math.PI * x);
    }

    // a cosine function which resembles the sinc, thus the name
    // takes care that it returns the right result at the denominator"s pole
    utilFuns.cosinc = function(x) {
        if (Math.abs(x-0.5) < 1E-15)
            return Math.PI/4;
        else
            return Math.cos(Math.PI*x) / (1 - 4 * x*x);
    }

    // the dirac delta distribution d(x) = 1 if x = 0, 0 else
    utilFuns.diracD = function(x) {
        if (Math.abs(x) < 1E-15)
            return 1.0;
        else
            return 0.0;
    }

    // Approximates the maximum of a function in the given interval.
    // f: the function, has to take a single value
    // x0 and x1 define the support of the function to check
    // N: how many values to evaluate in the interval
    utilFuns.fMax = function(f, x0, x1, N=1000) {
        var dx = (x1 - x0) / N;
        var ret = f(0);
        for (var n = 1; n < N; n++) {
            y = f(n*dx);
            if (y > ret)
                ret = y;
        }
        return ret;
    }

    // Calculates the greatest common divisor of two integers
    utilFuns.gcd = function(a, b) {
        if (! b)
            return a;
        else
            return utilFuns.gcd(b, a % b);
    };

    // Calculates the period of two superimposed sinusoidals with frequencies f1, f2 and amplitudes A1, A2.
    // Note that the given frequencies have to be integers (i.e. in Hz).
    utilFuns.calcPeriod = function(A1, f1, A2, f2) {
        // make sure we have intergers, gcd will fail otherwise
        f1 = Math.round(f1);
        f2 = Math.round(f2);
        // sanity checks: if one frequency or amplitude is 0, use only the other
        if (f1 === 0 || A1 === 0){
            return 1/f2;
        }
        else if (f2 === 0 || A2 === 0) {
            return 1/f1;
        }
        else {
            return 1 / utilFuns.gcd(f1, f2);
        }
    }

    // A cosine which is 1 for frequency 0, irrespective of the phase.
    // Note that phi is expexted in the range 0..360 degrees
    utilFuns.cos2 = function(f, phi, t) {
        var twpPi = 2 * Math.PI;
        if (Math.abs(f) < 1E-15)
            return 1.0;
        else
            return  Math.cos( twpPi * (f*t - phi/360) );
    }

    // A superposition of two sinusoidals.
    // Note that the phi values are expexted in the range 0..360 degrees
    // The taus are time delays.
    utilFuns.twoCos = function(A1, f1, phi1, A2, f2, phi2, t, tau1=0, tau2=0) {
        var twpPi = 2 * Math.PI;
        return  A1 * utilFuns.cos2(f1, phi1, (t-tau1)) + A2 * utilFuns.cos2(f2, phi2, (t-tau2));
    }

    return utilFuns;
}

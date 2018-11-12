

function getUtilDist() {
  var utilDist = {};

  // function for calculating the factorial n!
  utilDist.factorial = function(N) {
    var prod = 1;

    if (N == 0) {
      return 1;
    }
    else if (N > 0){

      for (var i=1; i <= N; i++){
        prod *= i;
      }
    }
          return prod;
  }

  // function to calculate the binomial Distribution
  utilDist.binomial = function(I, p, mu) {
    if (mu <= I) {
      var muOfI = utilDist.factorial(I) / (utilDist.factorial(mu)*(utilDist.factorial(I-mu)));

      return muOfI * Math.pow(p, mu) * Math.pow(1 - p, I - mu);
    }
    else {
      return 0;
    }
  }

  // function to calculate the poisson Distribution
  utilDist.poisson = function(lambda, mu) {
    return Math.pow(lambda, mu) * Math.pow(Math.E, -lambda) / utilDist.factorial(mu);
  }

  utilDist.momentB = function(k, I, p) {
    var sum = 0;

    for (var mu=0; mu<=I; mu++) {
      sum += Math.pow(mu, k) * utilDist.binomial(I, p, mu);
    }
    return sum;
  }

  utilDist.momentP = function(k, lambda) {
    var sum = 0;

    for (var mu = 0; mu <= 200; mu++) {
      sum += Math.pow(mu, k) * utilDist.poisson(lambda, mu);
    }
    return sum;
  }

  return utilDist;
}

/* Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i. */


var countBits = function (n) {
    let result = [0]
    for (let i = 1; i <= n; i++) {
      result[i] = result[i & (i - 1)] + 1
    }
    
    return result
  };
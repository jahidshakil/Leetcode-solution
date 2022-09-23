/*
Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations of 1 to n in order, modulo 109 + 7.
*/




var concatenatedBinary = function (n) {
    let num = 0;
    let mod =  10**9 +7;
    
    for(let i = 1; i <= n; i++) {
        num *= (1 << i.toString(2).length)
        num += i;
        num %= mod
    }
    return num;
};
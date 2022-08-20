/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 
*/

var multiply = function (num1, num2) {
    
    num1 = BigInt(num1);
    num2 = BigInt(num2)
    let res = num1*num2
    return res.toString()
};
/*
You are given two images, img1 and img2, represented as binary, square matrices of size n x n. A binary matrix has only 0s and 1s as values.

We translate one image however we choose by sliding all the 1 bits left, right, up, and/or down any number of units. We then place it on top of the other image. We can then calculate the overlap by counting the number of positions that have a 1 in both images.

Note also that a translation does not include any kind of rotation. Any 1 bits that are translated outside of the matrix borders are erased.

Return the largest possible overlap.

Input: img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]
Output: 3

Example 2:

Input: img1 = [[1]], img2 = [[1]]
Output: 1

*/



var largestOverlap = function (A, B) {
    let n = A.length;
    let result = 0;
    for (let i = -n + 1; i < n; i++) {
        for (let j = -n + 1; j < n; j++) {
            let t = 0;
            for (let x = 0; x < n; x++) {
                for (let y = 0; y < n; y++) {
                    if (x + i >= 0 && x + i < n && y + j >= 0 && y + j < n && A[x][y] === 1 && B[x + i][y + j] === 1) {
                        t++;
                    }
                }
            }
            result = Math.max(result, t);
        }
    }
    return result;
};
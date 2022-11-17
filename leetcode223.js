/*

Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).

 Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
Output: 45
Example 2:

Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
Output: 16
*/

var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let intersectWidth = Math.min(ax2,bx2) - Math.max(ax1,bx1);
    let intersectHeight = Math.min(ay2,by2) - Math.max(ay1,by1);
    intersectWidth = intersectWidth > 0 ? intersectWidth : 0;
    intersectHeight = intersectHeight > 0 ? intersectHeight : 0;
    let intrsectArea = (ax2-ax1) * (ay2-ay1) + (by2-by1) * (bx2-bx1) -  intersectHeight * intersectWidth;
    return intrsectArea;
};
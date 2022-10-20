/*
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3

*/



var kthSmallest = function (root, k) {
    
    if (root == null) return;
    
    const stack = [];
    
    let curr = root;
    
    while (stack.length > 0 || curr != null) {
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        
        if (stack.length > 0) {
            const top = stack.pop();
            k--;
            
            if (k === 0) return top.val;
            
            curr = top.right;
        }
    }
};
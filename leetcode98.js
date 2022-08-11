
/*Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.*/



var isValidBST = function(root) {
    let output = true;
    const loop = (tree, min, max) => {
        if ((tree?.val > min || min === undefined) && (tree?.val < max || max === undefined)) {
            if (tree?.left) {
                loop(tree.left, min, tree.val);    
            }
            if (tree?.right) {
                loop(tree.right, tree.val, max);    
            }
        } else {
            output = false;
        }
    }
    
    loop(root);
    
    return output;
};
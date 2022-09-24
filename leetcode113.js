/*
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

*/



var pathSum = function (root, targetSum) {
    if(!root)  return [];
    let paths = []
    const dfs = (node,sum, slate)=>{
         if(node.left == null && node.right == null){
             if(sum === node.val){
                 slate.push(node.val);
                 paths.push(slate.slice());
                 slate.pop()
             }
         }
        if(node.left){
            slate.push(node.val);
            dfs(node.left, sum-node.val, slate);
            slate.pop()
        }
        
        if(node.right){
            slate.push(node.val);
            dfs(node.right, sum-node.val, slate);
            slate.pop()
        }
    }
    dfs(root, targetSum, []);
    return paths
};
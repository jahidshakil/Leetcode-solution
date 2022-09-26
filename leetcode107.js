/*
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

*/



var levelOrderBottom = function(root) {
    if (!root) return [];
    let res = [];
    let q = [root];
    while(q.length){
        let temp = [];
        let len = q.length;
        for(let i =0; i<len;i++){
        let node = q.shift();
        if(node.left) q.push(node.left);
        if(node.right) q.push(node.right);
         temp.push(node.val)
        }
        res.push(temp)
    }
    return res.reverse()
};

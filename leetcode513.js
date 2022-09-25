/*
Given the root of a binary tree, return the leftmost value in the last row of the tree.  */


var findBottomLeftValue = function (root) {
    if(!root) return
    let q = [root];
    let res = []
    
    while(q.length){
        let temp = [];
        let len = q.length;
        for(let  i = 0; i<len; i++){
            let node = q.shift();
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
            temp.push(node.val)
        }
        res.push(temp)
    }
    let level = res.pop();
    return level[0]
    
};

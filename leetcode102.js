/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/


var levelOrder = function(root) {
    let q=[root];
    let res=[];
    while(q[0]){
        let len =q.length;
        let temp =[]
        for(let i=0; i<len;i++){
          let node = q.shift();
          temp.push(node.val)
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
           
        }
       res.push(temp)
        
    }
    return res;
    
};
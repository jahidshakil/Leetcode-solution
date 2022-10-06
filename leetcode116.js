/*
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

*/


var connect = function(root) {
    const top = root;
    
    while (root && root.left) {
        let tmp = root.left; 
		
        while (root) {
            root.left.next = root.right;
            root.right.next = root.next ? root.next.left : null;
            root = root.next;
        }
        root = tmp;
    }
    return top;
};


// iterative solution


var connect = function(root) {
    if(!root){
        return null
    }
    let q = [root];
    while(q.length){
        let length = q.length;
        while(length--){
            let node = q.shift();
            node.next = length==0?null:q[0] //condition to check it is in same level or not
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }     
    }
    return root
};

/*
Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

*/



var tree2str = function(root){
    let str=''
    
    let helper = root=>{
        if(!root) return ;
        str+=root.val;
        if((!root.left && root.right) || root.left) str+='(' ;
        if(root.left) helper(root.left);
        if((!root.left && root.right) || root.left) str+=')' ;
        if(root.right){
            str+='('
            helper(root.right);
            str+=')'
        }
    }
    helper(root);
    return str;
}

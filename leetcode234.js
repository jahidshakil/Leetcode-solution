/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

*/


var isPalindrome = function (head) {
    if(head==null || head.next==null) return true;
    let mid = findMid(head);
    let last = reverse(mid.next);
    let cur = head;
    while(last){
        if(last.val !== cur.val) return false
        cur=cur.next;
        last = last.next;
    }
    return true;
};



function findMid(head){
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next){
        slow=slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverse(node){
   let current = node;
    let previous =null;
    while(current){
        let n = current.next
        current.next=previous;
        previous = current;
        current=n;
        
        
    }
    return previous
    
}

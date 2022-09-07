/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

*/

var removeElements = function(head, val) {
    let curr=new ListNode(0);
    curr.next=head; head=curr;    
    while(curr.next!==null){
        curr.next.val===val?curr.next=curr.next.next:curr=curr.next;
    }
    return head.next;  
};
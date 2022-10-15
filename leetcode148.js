/*
Given the head of a linked list, return the list after sorting it in ascending order.

*/





var sortList = function (head) {
    if(head ==null || head.next==null) return head;
    
    
    let slow = head;
    let fast = head;
    let temp = head;
    while(fast && fast.next){
        temp =slow
        slow=slow.next;
        fast=fast.next.next;
        
    }
    temp.next = null;
    let left = sortList(head);
    let right = sortList(slow)
    return merge(left,right);
    
};


function merge(l1,l2){
    let sorted_tmp = new ListNode(0);
    let current = sorted_tmp;
    while(l1 !==null && l2 !==null){
        if(l1.val<l2.val){
            current.next=l1;
            l1=l1.next;
        }else{
            current.next = l2;
            l2=l2.next;
        }
        current=current.next;
    }
    if(l1 !==null){
        current.next=l1;
        l1=l1.next;
    }
    if(l2 !==null){
        current.next=l2;
        l2=l2.next
    }
    return sorted_tmp.next
}
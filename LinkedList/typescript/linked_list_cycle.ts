/**
 * Definition for singly-linked list.
*/
 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
    let slow = head
    let first = head
    let flag:boolean = false
    while(first!=null && first.next!=null && slow!=null){
        slow = slow.next
        first = first.next.next
        if(slow===first){
            flag = true
            break
        }
    }
    return flag
};
